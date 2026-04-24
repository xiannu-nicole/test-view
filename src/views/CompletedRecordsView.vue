<template>
  <MainLayout>
    <!-- todo: 搜尋功能 -->
      <!-- <header class="page-header">
        <h1 class="page-title">完診紀錄</h1>
        <div class="filter-bar">
          <div class="filter-group">
            <label>日期範圍</label>
            <div class="date-picker-placeholder">
              2026/04/01 - 2026/04/24
              <i class="icon icon-calendar"></i>
            </div>
          </div>
          
          <div class="filter-group keyword">
            <label>關鍵字搜尋</label>
            <div class="search-input">
              <input type="text" placeholder="請輸入病患姓名、特徵或主訴" />
              <i class="icon icon-search"></i>
            </div>
          </div>

          <button class="search-btn">搜尋</button>
        </div>
      </header> -->

      <div class="table-container">
        <table class="patients-table">
          <thead>
            <tr>
              <th class="col-index">#</th>
              <th class="col-info">病患資訊</th>
              <th class="col-mrn">病歷號</th>
              <th class="col-triage">檢傷級別</th>
              <th class="col-time">到達時間</th>
              <th class="col-reason">主訴</th>
              <th class="col-action">行動</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(record, index) in mockRecords" :key="record.id" class="patient-card-row">
              <td class="col-index">{{ index + 1 }}</td>
              <td class="col-info">
                <div class="name">{{ record.name }}</div>
              </td>
              <td class="col-mrn">{{ record.mrn }}</td>
              <td class="col-triage">
                <span :class="['triage-badge', `level-${record.triageLevel}`]">
                  {{ record.triageLevel }} 級
                </span>
              </td>
              <td class="col-time">{{ record.arrivalTime }}</td>
              <td class="col-reason">{{ record.chiefComplaint }}</td>
              <td class="col-action">
                <button class="view-btn">查看病歷</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
  </MainLayout>
</template>

<script setup lang="ts">
import MainLayout from '@/components/MainLayout.vue';

const mockRecords = [
  { id: '1', name: '王*明', mrn: '***53', triageLevel: 3, arrivalTime: '10:30', chiefComplaint: '腹痛、噁心' },
  { id: '2', name: '點*如', mrn: '***72', triageLevel: 4, arrivalTime: '11:15', chiefComplaint: '頭暈' },
  { id: '3', name: '王*宏', mrn: '***01', triageLevel: 2, arrivalTime: '12:45', chiefComplaint: '胸悶、喘' },
];
</script>
<style lang="scss" scoped>
.page-header {
  margin-bottom: $spacing-40;
  
  .page-title {
    @include font-style($fs-h2, $fw-bold);
    margin-bottom: $spacing-32;
  }
}

.filter-bar {
  display: flex;
  align-items: flex-end;
  gap: $spacing-24;
  padding: $spacing-24;
  background-color: $gray-100;
  border-radius: 8px;
  
  .filter-group {
    display: flex;
    flex-direction: column;
    gap: $spacing-8;
    
    label {
      @include font-style($fs-small, $fw-medium);
      color: $gray-700;
    }
    
    &.keyword {
      flex: 1;
    }
  }
}

.date-picker-placeholder, .search-input {
  background-color: $white;
  border: 1px solid $gray-300;
  border-radius: 8px;
  padding: $spacing-12;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @include font-style($fs-base);
  color: $gray-900;
  min-width: 240px;
}

.search-input {
  input {
    border: none;
    outline: none;
    width: 100%;
    @include font-style($fs-base);
  }
}

.search-btn {
  background-color: $primary-color;
  color: $white;
  border: none;
  padding: $spacing-12 $spacing-40;
  border-radius: 8px;
  @include font-style($fs-base, $fw-medium);
  cursor: pointer;
  height: 48px;
  
  &:hover {
    background-color: $primary-color-hover;
  }
}

.table-container {
  background-color: $white;
  overflow-x: auto;
  border: 1px solid $gray-200;
  border-radius: 12px;
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
    
    &.level-2 { background-color: #fdeaea; color: #e57373; }
    &.level-3 { background-color: #fdf5e6; color: #fbc02d; }
    &.level-4 { background-color: #e8f5e9; color: #4caf50; }
    &.level-5 { background-color: #e3f2fd; color: #64b5f6; }
  }

  .col-action {
    text-align: right;
  }

  .view-btn {
    background-color: $white;
    color: $primary-color;
    border: 1px solid $primary-color;
    padding: $spacing-8 $spacing-24;
    border-radius: 8px;
    cursor: pointer;
    @include font-style($fs-base, $fw-medium);
    transition: all 0.3s;
    
    &:hover {
      background-color: $primary-color-light;
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
  
  &.icon-calendar { mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 00-2 2z'/%3E%3C/svg%3E"); }
  &.icon-search { mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'/%3E%3C/svg%3E"); }
}
</style>
