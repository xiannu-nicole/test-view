export interface Patient {
  id: string;
  name: string;
  triageLevel: number;
  arrivalTime: string;
  chiefComplaint: string;
  status?: 'initial' | 'examining' | 'reportReady' | 'waiting' | 'done';
  statusLabel?: string;
  waitTime?: number;
  progress?: {
    label: string;
    value: number;
  }[];
}

export interface SidebarItem {
  id: string;
  label: string;
  icon: string;
  path: string;
}

export interface Statistics {
  label: string;
  count: number;
}
