import React from "react";
import "./home.scss"
import { TopBox } from "../../components/topbox/TopBox"
import { ChartBox } from "../../components/chartBox/ChartBox"
import { chartBoxCustomer, chartBoxLeads, chartBoxRevenue, areaBoxRevenue } from "../../data"
import { PieChartBox } from "../../components/piechartBox/PieChartBox"
import { AreaChartBox } from "../../components/areaChart/AreaChartBox"

export default function Home() {
       return (
      <>
        <div className="home">
          <div className="box box1"><TopBox/></div>
          <div className="box box2"><ChartBox {...chartBoxCustomer}></ChartBox></div>
          <div className="box box3"><ChartBox { ...chartBoxRevenue}/></div>
          <div className="box box4"><PieChartBox {...chartBoxLeads}/></div>
          <div className="box box5"><AreaChartBox {...areaBoxRevenue}/></div>
          </div>
      </>
    )
  }