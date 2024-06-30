import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';

export default function BasicLineChart() {
  return (
    <LineChart
      xAxis={[{ data: [1, 2, 3, 5, 8, 10,12,14,16,18,19,20,22,24,26,27,28,30,32,34,36,38,40,42,44,46,48,50] }]}
      series={[
        {
          data: [2, 5.5, 2, 8.5, 1.5, 5,10,4,2,1.5,4,5,2,4,5,1,2.4,2.3,8,2.5,2,1,8,10,9,10],
        },
      ]}
      width={1800}
      height={300}
    />
  );
}
