import React from 'react';
import{ChartComponent, SeriesCollectionDirective,SeriesDirective,Inject, Legend, Category, StackingColumnSeries,Tooltip} from '@syncfusion/ej2-react-charts';
import { stackedCustomSeries,stackedPrimaryXAxis, stackedPrimaryYAxis } from '../../data/dummy';
export default function Stacked({width,height}) {
  return (
    <ChartComponent 
      width={width}
      height={height}
      id='stacked-chart'
      primaryXAxis={stackedPrimaryXAxis}
      primaryYAxis={stackedPrimaryYAxis}
      chartArea= {{ border: { width: 0 } }}
      tooltip={{ enable: true,  }}
      legendSettings={{background:'white'}}
    >
      <Inject services={[Legend,Category, StackingColumnSeries, Tooltip]} />
      <SeriesCollectionDirective >
          {stackedCustomSeries.map((data, index) =><SeriesDirective key={index} {...data} /> )}
       </SeriesCollectionDirective>
    </ChartComponent>
  )
}
