import { FC, ReactNode } from 'react';

export type FcWrapper = FC<{ children: ReactNode }>;

export interface CounterState {
  value: number;
}
