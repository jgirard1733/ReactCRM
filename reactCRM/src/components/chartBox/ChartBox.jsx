import "./ChartBox.scss"
import { NavLink } from "react-router-dom"
import { ResponsiveContainer, LineChart, Line, Tooltip } from "recharts"
import React from "react";

const props = {
  color: "", // String
  icon: "", // String
  title: "", // String
  dataKey: "", // String
  number: 0, // number | String
  percentage: 0, // number
  chartData: [] // object[]
};

export function ChartBox(props) {
       return (
      <>
        <div className="chartBox">
          <div className="boxInfo">
            <div className="titel">
              <img src={props.icon} alt=""/>
              <span>{props.title}</span>
            </div>
            <h2>{props.number}</h2>
            <NavLink to="/" style={{color:props.color}}>View All</NavLink>
          </div>
          <div className="chartInfo">
            <div className="chart">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={props.chartData}>
                  <Tooltip contentStyle={{background:"transparent", border:"none"}} labelStyle={{display:"none"}} position={{x: 10, y:60}}/>
                  <Line
                    type="monotone"
                    dataKey={props.dataKey}
                    stroke={props.color}
                    strokeWidth={2}
                    dot={false}
                    />
                </LineChart>
              </ResponsiveContainer>

            </div>
            <div className="text">
              <span className="percentage" style={{ color: props.percentage < 0 ? "tomato" : "limegreen" }}>
                {props.percentage}%
              </span>
              <span className="duration">this month</span>
            </div>
          </div>
        </div>
      </>
    )
  }