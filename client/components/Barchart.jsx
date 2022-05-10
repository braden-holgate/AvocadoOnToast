import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import * as echarts from 'echarts/lib/echarts'
import ReactEChartsCore from 'echarts-for-react/lib/core'
import { BarChart } from 'echarts/charts'
import {
  TitleComponent,
  LegendComponent,
  ToolboxComponent,
  TooltipComponent,
  GridComponent,
} from 'echarts/components'

const time = require('../moneyCalcs/savingsCompoundCalc')
const retire = require('../moneyCalcs/timeToRetirement')

function Barchart() {
  const [years, setYears] = useState()
  const [timesSeries, setTimeSeries] = useState([])
  const financials = useSelector((state) => state.financials)
  const { income, incomePeriod, savings, savingsPeriod, currentSavings } =
    financials

    // mock data
    const [xAxisData, setXAxisData] = useState([])
    const [barData1, setBarData1] = useState([])

  echarts.use([
    BarChart,
    TitleComponent,
    LegendComponent,
    ToolboxComponent,
    TooltipComponent,
    GridComponent,
  ])

  useEffect(() => {
    setYears(
      retire.yearsToRetirement(   // return NaN
        income,
        incomePeriod,
        savings,
        savingsPeriod,
        currentSavings
      )
    )
  }, [financials])

  useEffect(() => {
    const rate = 0.05
    const newTimeSeries = time.savingsTimeSeries(
      years,
      currentSavings,
      rate,
      savings,
      savingsPeriod,
      0
    )
    setTimeSeries(newTimeSeries)
  }, [years])
  
  // useEffect(()=>{
  //     setBarChartData()
  // }, [timesSeries])

  // const setBarChartData = ()=>{
  //   const xAxisData = [];
  //   const yAxisData = []
  //   timesSeries.forEach(item => {
  //     xAxisData.push(`Year-${item.year}`)
  //     yAxisData.push(item.amt)
  //   });

  //   setXAxisData(xAxisData)
  //   setBarData1(yAxisData)
  // }

  /////////mock data begin////////////////////////////
  useEffect(() => {
    const xAxisData = []
    const data1 = []
    for (let i = 0; i < 100; i++) {
      xAxisData.push('Year' + i)
      data1.push((Math.sin(i / 5) * (i / 5 - 10) + i / 6) * 5)
    }
    setXAxisData(xAxisData)
    setBarData1(data1)
  }, [])

  ///////mock data end/////////////////////////

  const getOption = () => ({

    tooltip: {},
    xAxis: {
      data: xAxisData,  // x axis data
      splitLine: {
        show: false,
      },
    },
    yAxis: {},
    series: [
      {
        name: 'bar1',
        type: 'bar',
        data: barData1,  //bar 1 data
        emphasis: {
          focus: 'series',
        },
        itemStyle:{
          color: '#91cc75'
        },
        animationDelay: function (idx) {
          return idx * 10
        },
      },
    ],
    animationEasing: 'elasticOut',
    animationDelayUpdate: function (idx) {
      return idx * 5
    },
  })

  return (
      <section className="hero has-background-light ">
          <ReactEChartsCore
            echarts={echarts}
            option={getOption()}
            notMerge={true}
            lazyUpdate={true}
            theme={'theme_name'}
          />
      </section>
  )
}
export default Barchart
