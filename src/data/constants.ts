import { ChartData, CounterState } from './types';

// TODO: remove last symb url
export const BASE_URL = 'http://82.202.204.94/tmp/test.php';

export const DEFAULT_STATE: CounterState = {
  value: 0,
};

export const TOAST_TIMEOUT = 1500;

export const RESP_MOCK: ChartData = {
  project: 'DMS 2.0 MOCK',
  period: '02.09.2022-31.12.2022',
  chart: {
    id: 1,
    title: 'Marketing Launch',
    period_start: '2022-09-02',
    period_end: '2022-09-08',
    sub: [
      {
        id: 2,
        title: 'Banners for social networks',
        period_start: '2022-09-02',
        period_end: '2022-09-07',
        sub: [
          {
            id: 3,
            title: 'Choosing a platform for ads',
            period_start: '2022-09-02',
            period_end: '2022-09-06',
            sub: [
              {
                id: 4,
                title: 'Custom issue level #4',
                period_start: '2022-09-03',
                period_end: '2022-09-05',
                sub: [
                  {
                    id: 5,
                    title: 'Custom issue level #5',
                    period_start: '2022-09-04',
                    period_end: '2022-09-05',
                  },
                  {
                    id: 6,
                    title: 'Custom task',
                    period_start: '2022-09-05',
                    period_end: '2022-09-05',
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
};

export default RESP_MOCK;

export const RESP_MOCK2: ChartData = {
  project: 'DMS 2.0 MOCK',
  period: '02.09.2022-31.12.2022',
  chart: {
    id: 1,
    title: 'Marketing Launch',
    period_start: '2022-09-02',
    period_end: '2022-09-08',
    sub: [
      {
        id: 2,
        title: 'Banners for social networks',
        period_start: '2022-09-02',
        period_end: '2022-09-07',
        sub: [
          {
            id: 3,
            title: 'Choosing a platform for ads',
            period_start: '2022-09-02',
            period_end: '2022-09-06',
            sub: [
              {
                id: 9,
                title: 'Custom issue level #4 2',
                period_start: '2022-09-02',
                period_end: '2022-09-07',
              },
              {
                id: 4,
                title: 'Custom issue level #4',
                period_start: '2022-09-03',
                period_end: '2022-09-05',
                sub: [
                  {
                    id: 5,
                    title: 'Custom issue level #5',
                    period_start: '2022-09-04',
                    period_end: '2022-09-05',
                  },
                  {
                    id: 6,
                    title: 'Custom task',
                    period_start: '2022-09-05',
                    period_end: '2022-09-05',
                  },
                ],
              },
            ],
          },
          {
            id: 8,
            title: 'tEST l3',
            period_start: '2022-09-02',
            period_end: '2022-09-07',
          },
        ],
      },
      {
        id: 7,
        title: 'tEST LEV2 2',
        period_start: '2022-09-02',
        period_end: '2022-09-07',
      },
    ],
  },
};

export const RESP_MOCK3: ChartData = {
  project: 'DMS 2.0 MOCK 3',
  period: '02.09.2022-31.12.2022',
  chart: {
    id: 1,
    title: 'Marketing Launch',
    period_start: '2022-09-02',
    period_end: '2022-09-08',
    sub: [
      {
        id: 2,
        title: 'Banners for social networks',
        period_start: '2022-09-02',
        period_end: '2022-09-07',
        sub: [
          {
            id: 3,
            title: 'Choosing a platform for ads',
            period_start: '2022-09-02',
            period_end: '2022-09-06',
            sub: [
              {
                id: 4,
                title: 'Custom issue level #4',
                period_start: '2022-09-03',
                period_end: '2022-09-05',
                sub: [
                  {
                    id: 5,
                    title: 'Custom issue level #5',
                    period_start: '2022-09-04',
                    period_end: '2022-09-05',
                  },
                  {
                    id: 6,
                    title: 'Custom task',
                    period_start: '2022-09-05',
                    period_end: '2022-09-05',
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
};
