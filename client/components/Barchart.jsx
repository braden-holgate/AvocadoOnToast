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
  const [timesSeries, setTimeSeries] = useState()
  const financials = useSelector((state) => state.financials)
  const { income, incomePeriod, savings, savingsPeriod, currentSavings } =
    financials


    const [a, setA] = useState([])
    const [b, setB] = useState([])
    const [c, setC] = useState([])

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
      retire.yearsToRetirement(
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
  
  useEffect(() => {
    const xAxisData = []
    const data1 = []
    const data2 = []
    for (var i = 0; i < 100; i++) {
      xAxisData.push('A' + i)
      data1.push((Math.sin(i / 5) * (i / 5 - 10) + i / 6) * 5)
      data2.push((Math.cos(i / 5) * (i / 5 - 10) + i / 6) * 5)
    }
    setA(xAxisData)
    setB(data1)
    setC(data2)
  }, [])

  const getOption = () => ({
    title: {
      text: 'Bar Animation Delay',
    },
    legend: {
      data: ['bar', 'bar2'],
    },
    tooltip: {},
    xAxis: {
      data: a,
      splitLine: {
        show: false,
      },
    },
    yAxis: {},
    series: [
      {
        name: 'bar',
        type: 'bar',
        data: b,
        emphasis: {
          focus: 'series',
        },
        animationDelay: function (idx) {
          return idx * 10
        },
      },
      {
        name: 'bar2',
        type: 'bar',
        data: c,
        emphasis: {
          focus: 'series',
        },
        animationDelay: function (idx) {
          return idx * 10 + 100
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
