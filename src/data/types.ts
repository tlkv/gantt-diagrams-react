import { FC, ReactNode } from 'react';

export type FcWrapper = FC<{ children: ReactNode }>;

export interface CounterState {
  value: number;
}

export interface Chart {
  id: number;
  title: string;
  period_start: string;
  period_end: string;
  sub?: Chart[];
}

export interface ChartData {
  project: string;
  period: string;
  chart: Chart;
}
