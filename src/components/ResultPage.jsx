import React from 'react'
import  { BasicLineChartDesktop } from './Chart'
import BasicLineChart from './Chart'
import { BarChart } from '@mui/x-charts/BarChart';

const ResultPage = () => {
  return (
    <div>
 <div className="bg-slate-400 h-36 flex items-center justify-center">
            <div className=" flex flex-col ">

              <h3 className='text-2xl capitalize '>Cold, Paris <span>37°C</span></h3>
              <h3 className='text-xl capitalize'>Very cold Temperature right now</h3>
            </div>
          </div>
          <div className='flex sm:flex-row flex-col justify-between my-10'>
          <div>
            <MixedBarChart />
          </div>
          <div>
          <MixedBarChart />

          </div>
          </div>
          <div className='sm:flex hidden'>
          <BasicLineChart />
          </div>
          <div className='sm:hidden flex'>
          <BasicLineChartDesktop />
          </div>

 
    </div>
  )
}



const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const amtData = [2400, 2210, 2290, 2000, 2181, 2500, 2100];

const xLabels = [
  'Page A',
  'Page B',
  'Page C',
  'Page D',
  'Page E',
  'Page F',
  'Page G',
];

export  function MixedBarChart() {
  return (
    <BarChart
      width={400}
      height={300}
      series={[
        { data: pData, label: 'pv', stack: 'stack1' },
        { data: amtData, label: 'amt' },
        { data: uData, label: 'uv', stack: 'stack1' },
      ]}
      xAxis={[{ data: xLabels, scaleType: 'band' }]}
    />
  );
}


export default ResultPage