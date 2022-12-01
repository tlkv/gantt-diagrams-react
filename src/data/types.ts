import { FC, ReactNode } from 'react';

export type FcWrapper = FC<{ children: ReactNode }>;

export interface CounterState {
  value: number;
}

export interface ChartTask {
  id: number;
  title: string;
  period_start: string;
  period_end: string;
  level?: number;
  open?: boolean;
  subtasks?: number;
  sub?: ChartTask[];
}

export interface ChartData {
  project: string;
  period: string;
  dateStart?: string;
  daysAmount?: number;
  chart: ChartTask;
}
