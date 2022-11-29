import { ChartData } from './types';

export const RESP_MOCK: ChartData = {
  project: 'DMS 2.0',
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

export const MOCK_DATA_5Y: ChartData = {
  project: 'DMS 2.0 MOCK 3',
  period: '12.12.2017-31.12.2022',
  chart: {
    id: 1,
    title: 'Marketing Launch',
    period_start: '2017-12-22',
    period_end: '2020-09-08',
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
                    sub: [
                      {
                        id: 51,
                        title: 'Custom issue level #5',
                        period_start: '2022-09-04',
                        period_end: '2022-09-05',
                        sub: [
                          {
                            id: 581,
                            title: 'Custom issue level #5',
                            period_start: '2022-09-04',
                            period_end: '2022-09-05',
                            sub: [
                              {
                                id: 5891,
                                title: 'Custom issue level #6',
                                period_start: '2022-09-04',
                                period_end: '2022-09-05',
                                sub: [
                                  {
                                    id: 516,
                                    title: 'Custom issue level #7',
                                    period_start: '2022-09-04',
                                    period_end: '2022-09-05',
                                    sub: [
                                      {
                                        id: 521,
                                        title: 'Custom issue lev #8',
                                        period_start: '2022-09-04',
                                        period_end: '2022-09-05',
                                        sub: [
                                          {
                                            id: 51858,
                                            title: 'Custom lev 9',
                                            period_start: '2022-09-04',
                                            period_end: '2022-09-05',
                                            sub: [
                                              {
                                                id: 55651,
                                                title: 'Level #10',
                                                period_start: '2022-09-04',
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
                            ],
                          },
                        ],
                      },
                    ],
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
