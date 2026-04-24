<template>
  <MainLayout>
    <div class="clinic-view">
      <div class="clinic-main">
        <header class="view-header">
          <div class="filter-tabs">
            <button 
              v-for="tab in tabs" 
              :key="tab.id"
              :class="['tab-item', { active: currentTab === tab.id }]"
              @click="currentTab = tab.id"
            >
              {{ tab.label }} ({{ tab.count }})
            </button>
          </div>
        </header>

        <div class="table-container">
          <table class="patients-table">
            <thead>
              <tr>
                <th class="col-index">#</th>
                <th class="col-info">病患資訊</th>
                <th class="col-mrn">病歷號</th>
                <th class="col-triage">檢傷級別</th>
                <th class="col-time">等候時間</th>
                <th class="col-reason">主訴</th>
                <th class="col-action">行動</th>
              </tr>
            </thead>
            <tbody>
              <PatientCard 
                v-for="(patient, index) in filteredPatients" 
                :key="patient.id"
                :patient="patient"
                :index="index + 1"
              />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </MainLayout>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import MainLayout from '@/components/MainLayout.vue';
import PatientCard from '@/components/PatientCard.vue';
import { Patient } from '@/types/dashboard';

const currentTab = ref('all');

const tabs = ref([
  { id: 'all', label: '全部', count: 5 },
  { id: 'waiting', label: '等候中', count: 2 },
  { id: 'processing', label: '處置中', count: 2 },
  { id: 'done', label: '報告完', count: 1 }
]);

const patients = ref<Patient[]>([
  { 
    id: '1', name: '王*明', mrn:'***31', triageLevel: 3, arrivalTime: '10:15', chiefComplaint: '腹痛、噁心',
    status: 'initial', statusLabel: '初診', waitingTime: 18 
  },
  { 
    id: '2', name: '點*如', mrn:'***22', triageLevel: 4, arrivalTime: '10:17', chiefComplaint: '頭暈',
    status: 'examining', statusLabel: '檢驗中', waitingTime: 42,
    progress: [
      { label: '抽血', value: 100 },
      { label: 'X光', value: 0 }
    ]
  },
  { 
    id: '3', name: '王*宏', mrn:'***44', triageLevel: 2, arrivalTime: '10:18', chiefComplaint: '胸悶、喘',
    status: 'reportReady', statusLabel: '可聽取', waitingTime: 5,
    progress: [
      { label: '抽血', value: 100 },
      { label: 'X光', value: 100 }
    ]
  }
]);

const filteredPatients = computed(() => {
  if (currentTab.value === 'all') return patients.value;
  return patients.value.filter(p => {
    if (currentTab.value === 'waiting') return p.status === 'initial';
    if (currentTab.value === 'processing') return p.status === 'examining';
    if (currentTab.value === 'done') return p.status === 'reportReady';
    return true;
  });
});
</script>

<style lang="scss" scoped>
.clinic-view {
  width: 100%;
  height: 100%;
}

.clinic-main {
  width: 100%;
}

.view-header {
  margin-bottom: $spacing-24;
  
  .filter-tabs {
    display: flex;
    gap: $spacing-12;
    
    .tab-item {
      padding: $spacing-8 $spacing-24;
      border-radius: 8px;
      border: 1px solid $gray-200;
      background-color: $white;
      color: $gray-700;
      cursor: pointer;
      @include font-style($fs-base, $fw-medium);
      transition: all 0.3s;
      
      &:hover {
        background-color: $gray-100;
      }
      
      &.active {
        background-color: $primary-color;
        color: $white;
        border-color: $primary-color;
      }
    }
  }
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

  .col-action { text-align: right; }
}
</style>
