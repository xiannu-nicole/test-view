<template>
  <tr class="patient-card-row">
    <td class="col-index">{{ index }}</td>
    <td class="col-info">
      <div class="name">{{ patient.name }}</div>
    </td>
    <td class="col-ptNo">
      <div class="ptNo">{{ patient.ptNo }}</div>
    </td>
    <td class="col-triage">
      <span :class="['triage-badge', `level-${patient.triageLevel}`]">
        {{ patient.triageLevel }} 級
      </span>
    </td>
    <td class="col-time">{{ patient.waitingTime }} 分鐘</td>
    <td class="col-reason">{{ patient.chiefComplaint }}</td>
    <td class="col-action">
      <div class="action-cell">
        <!-- 檢驗進度展示：未全數完成時顯示標籤且不可點選 -->
        <div v-if="patient.progress && !isAllDone" class="progress-tag">
          檢驗中
        </div>

        <!-- 行動按鈕：初診、已完成或無進度數據時顯示 -->
        <button
          v-else
          :class="['action-btn', patient.status, { 'is-ready': isAllDone }]"
        >
          {{ displayActionLabel }}
          <i class="icon icon-chevron-right"></i>
        </button>
      </div>
    </td>
  </tr>
</template>

<script setup lang="ts">
import { computed } from "vue";
import type { Patient } from "@/types/dashboard";

const props = defineProps<{
  patient: Patient;
  index: number;
}>();

const isAllDone = computed(() => {
  if (!props.patient.progress || props.patient.progress.length === 0)
    return false;
  return props.patient.progress.every((p) => p.value === 100);
});

const displayActionLabel = computed(() => {
  if (isAllDone.value) return "呼叫聽報告";

  switch (props.patient.status) {
    case "initial":
      return "呼叫初診";
    case "examining":
      return "查看進度";
    case "reportReady":
      return "呼叫聽報告";
    default:
      return "處理中";
  }
});
</script>

<style lang="scss" scoped>
.patient-card-row {
  border-bottom: 1px solid $gray-200;
  transition: background-color 0.2s;

  &:hover {
    background-color: $gray-100;
  }

  td {
    padding: $spacing-20 $spacing-24;
    vertical-align: middle;
  }
}

.col-info {
  .name {
    @include font-style($fs-h3, $fw-bold);
    color: $gray-900;
    margin-bottom: $spacing-4;
  }

  .meta {
    @include font-style($fs-small);
    color: $gray-500;
  }
}

.triage-badge {
  display: inline-block;
  padding: $spacing-4 $spacing-16;
  border-radius: 4px;
  @include font-style($fs-base, $fw-bold);

  &.level-2 {
    background-color: #fdeaea;
    color: #e57373;
  }
  &.level-3 {
    background-color: #fdf5e6;
    color: #fbc02d;
  }
  &.level-4 {
    background-color: #e8f5e9;
    color: #4caf50;
  }
  &.level-5 {
    background-color: #e3f2fd;
    color: #64b5f6;
  }
}

.col-time,
.col-reason {
  @include font-style($fs-base);
  color: $gray-900;
}

.col-action {
  text-align: right;

  .action-cell {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: $spacing-12;
  }
}

.progress-tag {
  width: 10rem;
  text-align: center;
  padding: $spacing-8 $spacing-24;
  background-color: $gray-100;
  color: $gray-500;
  border-radius: 4px;
  @include font-style($fs-base, $fw-medium);
  white-space: nowrap;
}

.action-btn {
  width: 10rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: $spacing-8;
  padding: $spacing-8 $spacing-24;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  @include font-style($fs-base, $fw-medium);
  transition: all 0.3s;

  &.initial,
  &.reportReady,
  &.is-ready {
    background-color: $accent-color;
    color: $white;
    &:hover {
      background-color: $accent-color-hover;
    }
  }

  &.examining:not(.is-ready) {
    background-color: $white;
    border: 1px solid $gray-300;
    color: $gray-700;
    &:hover {
      background-color: $gray-100;
    }
  }
}

.icon {
  width: 16px;
  height: 16px;
  display: block;
  background-color: currentColor;
  mask-size: contain;
  mask-repeat: no-repeat;
  mask-position: center;
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M9 5l7 7-7 7'/%3E%3C/svg%3E");
}
</style>
