import { ChartData } from './types';

const RESP_MOCK: ChartData = {
  project: 'DMS 2.0 DEF',
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
  period: '10.10.2022-31.12.2022',
  chart: {
    id: 1,
    title: 'Marketing Launch test',
    period_start: '2022-11-02',
    period_end: '2022-11-08',
    sub: [
      {
        id: 2,
        title: 'Banners for social networks',
        period_start: '2022-11-02',
        period_end: '2022-11-17',
        sub: [
          {
            id: 3,
            title: 'Choosing a platform for ads',
            period_start: '2022-11-02',
            period_end: '2022-11-06',
            sub: [
              {
                id: 9,
                title: 'Custom issue level #4 2',
                period_start: '2022-11-02',
                period_end: '2022-11-07',
              },
              {
                id: 4,
                title: 'Custom issue level #4',
                period_start: '2022-11-03',
                period_end: '2022-11-05',
                sub: [
                  {
                    id: 5,
                    title: 'Custom issue level #5',
                    period_start: '2022-11-04',
                    period_end: '2022-11-05',
                  },
                  {
                    id: 6,
                    title: 'Custom task',
                    period_start: '2022-11-05',
                    period_end: '2022-11-05',
                  },
                ],
              },
            ],
          },
          {
            id: 8,
            title: 'l3',
            period_start: '2022-11-02',
            period_end: '2022-11-07',
            sub: [
              {
                id: 11,
                title: 'Custom issue level #4',
                period_start: '2022-11-04',
                period_end: '2022-11-05',
              },
              {
                id: 16,
                title: 'Custom task l4',
                period_start: '2022-11-05',
                period_end: '2022-11-05',
              },
            ],
          },
        ],
      },
      {
        id: 7,
        title: 'LEV2',
        period_start: '2022-10-12',
        period_end: '2022-11-07',
      },
    ],
  },
};

export const MOCK_DATA_5Y: ChartData = {
  project: 'DMS 2.0 MOCK 3',
  period: '19.12.2017-31.12.2022',
  chart: {
    id: 1,
    title: 'Marketing Launch',
    period_start: '2017-12-22',
    period_end: '2022-11-28',
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
            period_start: '2022-06-02',
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
                    sub: [
                      {
                        id: 6581,
                        title: 'Custom issue level #6',
                        period_start: '2022-09-01',
                        period_end: '2022-09-05',
                        sub: [
                          {
                            id: 56891,
                            title: ' level #7',
                            period_start: '2022-09-04',
                            period_end: '2022-09-05',
                            sub: [
                              {
                                id: 6516,
                                title: 'level #8',
                                period_start: '2022-09-04',
                                period_end: '2022-09-05',
                                sub: [
                                  {
                                    id: 6521,
                                    title: 'lev #9',
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
                  {
                    id: 6,
                    title: 'Custom task',
                    period_start: '2022-09-05',
                    period_end: '2022-10-05',
                    sub: [
                      {
                        id: 51,
                        title: 'Custom issue level #6',
                        period_start: '2022-09-04',
                        period_end: '2022-09-05',
                        sub: [
                          {
                            id: 581,
                            title: 'Custom issue level #7',
                            period_start: '2022-09-04',
                            period_end: '2022-09-05',
                            sub: [
                              {
                                id: 5891,
                                title: ' level #8',
                                period_start: '2022-09-04',
                                period_end: '2022-09-05',
                                sub: [
                                  {
                                    id: 516,
                                    title: 'level #9',
                                    period_start: '2022-09-04',
                                    period_end: '2022-09-05',
                                    sub: [
                                      {
                                        id: 521,
                                        title: 'lev #10',
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
      {
        id: 5591,
        title: 'Marketing Launch 2',
        period_start: '2017-12-22',
        period_end: '2021-09-08',
      },
      {
        id: 55911,
        title: 'Marketing Launch 3',
        period_start: '2020-12-22',
        period_end: '2021-09-08',
      },
      {
        id: 8811,
        title: 'Marketing Launch new',
        period_start: '2020-12-22',
        period_end: '2021-09-08',
      },
      {
        id: 55961,
        title: 'Task 2',
        period_start: '2017-12-22',
        period_end: '2021-09-08',
      },
      {
        id: 566911,
        title: 'Task 3',
        period_start: '2020-12-22',
        period_end: '2021-09-08',
      },
      {
        id: 8611,
        title: 'Task new',
        period_start: '2020-12-22',
        period_end: '2021-09-08',
      },
    ],
  },
};
