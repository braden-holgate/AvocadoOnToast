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
  // const [timesSeries, setTimeSeries] = useState([])
  const financials = useSelector((state) => state.financials)
  const { income, incomePeriod, savings, savingsPeriod, currentSavings } = financials
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
      retire.yearsToRetirement(
        income,
        incomePeriod,
        savings,
        savingsPeriod,
        currentSavings,
        0
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
    setBarChartData(newTimeSeries)
  }, [years])
  
  const setBarChartData = (timeSeries)=>{
    const xAxisData = [];
    const yAxisData = []
    timeSeries.forEach(item => {
      xAxisData.push(`Year- ${item.year}`)
      yAxisData.push((item.amt/1000))
    });

    setXAxisData(xAxisData)
    setBarData1(yAxisData)
  }

  /////////mock data begin////////////////////////////
  // useEffect(() => {
  //   const xAxisData = []
  //   const data1 = []
  //   for (let i = 0; i < 100; i++) {
  //     xAxisData.push('Year' + i)
  //     data1.push((Math.sin(i / 5) * (i / 5 - 10) + i / 6) * 5)
  //   }
  //   setXAxisData(xAxisData)
  //   setBarData1(data1)
  // }, [])

  ///////mock data end/////////////////////////

  const getOption = () => ({
    title: {
      text: "Compounded Wealth",
      subtext: "Your savings growing exponentially",
      left: "center",
      bottom: "80%",
      textStyle: {
        fontSize: 25
      },
      subtextStyle: {
        fontSize: 15
      }
    },
    tooltip: {},
    xAxis: {
      data: xAxisData,  // x axis data
      splitLine: {
        show: false,
      },
    },
    yAxis: [{
      type: "value",
      name: "$1000's",
      nameLocation: "middle",
      nameGap: 35,
      nameTextStyle: {
        verticalAlign: "middle"
      },
      nameRotate: 0
    }],
    series: [
      {
        name: 'Wealth 1000\'s',
        type: 'bar',
        data: barData1,
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
