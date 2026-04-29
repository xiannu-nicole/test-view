<template>
  <MainLayout>
    <div class="waiting-pool-view">
      <div class="table-container">
        <table class="patients-table">
          <thead>
            <tr>
              <th class="col-index">#</th>
              <th class="col-info">病患資訊</th>
              <th class="col-ptNo">病歷號</th>
              <th class="col-triage">檢傷級別</th>
              <th class="col-time">到達時間</th>
              <th class="col-reason">主訴</th>
              <th class="col-action">行動</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(patient, index) in patients" :key="patient.id">
              <td class="col-index">{{ index + 1 }}</td>
              <td class="col-info">
                <div class="name">{{ patient.name }}</div>
              </td>
              <td class="col-ptNo">{{ patient.ptNo }}</td>
              <td class="col-triage">
                <span :class="['triage-badge', `level-${patient.triageLevel}`]">
                  {{ patient.triageLevel }} 級
                </span>
              </td>
              <td class="col-time">{{ patient.arrivalTime }}</td>
              <td class="col-reason">{{ patient.chiefComplaint }}</td>
              <td class="col-action">
                <button class="claim-btn">認領</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </MainLayout>
</template>

<script setup lang="ts">
import { ref } from "vue";
import MainLayout from "@/components/MainLayout.vue";

interface WaitingPatient {
  id: string;
  ptNo: string;
  name: string;
  triageLevel: 2 | 3 | 4 | 5;
  arrivalTime: string;
  chiefComplaint: string;
}

const patients = ref<WaitingPatient[]>([
  {
    id: "1",
    name: "張*仁",
    ptNo: "***31",
    triageLevel: 3,
    arrivalTime: "10:15",
    chiefComplaint: "腹痛、噁心",
  },
  {
    id: "2",
    name: "陳*華",
    ptNo: "***61",
    triageLevel: 4,
    arrivalTime: "10:17",
    chiefComplaint: "頭暈",
  },
  {
    id: "3",
    name: "林*強",
    ptNo: "***32",
    triageLevel: 2,
    arrivalTime: "10:18",
    chiefComplaint: "胸悶、喘",
  },
  {
    id: "4",
    name: "黃*婷",
    ptNo: "***67",
    triageLevel: 5,
    arrivalTime: "10:20",
    chiefComplaint: "感冒、咳嗽",
  },
  {
    id: "5",
    name: "吳*豪",
    ptNo: "***99",
    triageLevel: 3,
    arrivalTime: "10:22",
    chiefComplaint: "扭傷",
  },
]);
</script>

<style lang="scss" scoped>
.waiting-pool-view {
  width: 100%;
  height: 100%;
}

.table-container {
  background-color: $white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  overflow: hidden;
  border: 1px solid $gray-200;
}

.patients-table {
  width: 100%;
  border-collapse: collapse;
  text-align: left;

  thead {
    background-color: #fcf8f6;

    th {
      padding: $spacing-24;
      @include font-style($fs-small, $fw-bold);
      color: $gray-700;
      border-bottom: 1px solid $gray-200;
    }
  }

  tbody {
    tr {
      border-bottom: 1px solid $gray-200;
      transition: background-color 0.2s;

      &:hover {
        background-color: $gray-100;
      }

      &:last-child {
        border-bottom: none;
      }
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

  .col-action {
    text-align: right;
  }

  .claim-btn {
    background-color: $primary-color;
    color: $white;
    border: none;
    padding: $spacing-12 $spacing-32;
    border-radius: 8px;
    cursor: pointer;
    @include font-style($fs-base, $fw-medium);
    transition: background-color 0.3s;

    &:hover {
      background-color: $primary-color-hover;
    }
  }
}
</style>
