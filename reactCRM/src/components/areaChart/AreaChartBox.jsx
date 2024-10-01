import "./AreaChartBox.scss"
import { ResponsiveContainer, AreaChart, Area, Tooltip, CartesianGrid, XAxis, YAxis } from "recharts"
import React from "react";

const props = {
  name: "", // String
  life: 0, // number | String
  annunity: 0, // number | String
  auto: 0, // number | String
};

export function AreaChartBox(props) {
  return (
    <>
       <div className="areaChartBox">
            <h2>{props.heading}</h2>
            <div className="chart">
                <ResponsiveContainer width="99%" height={300}>
                    <AreaChart
                        data={props.chartData}
                        width={"90%"}
                        height={400}
                        margin={{top: 10, right: 30, left: 0, bottom:0 }}
                        >
                        <CartesianGrid strokeDasharray="3 3"/>
                        <XAxis dataKey="name"/>
                        <YAxis/>
                        <Tooltip/>
                        <Area
              type="monotone"
              dataKey="auto"
              stackId="1"
              stroke="#00C49F"
              fill="#00C49F"
            />
            <Area
              type="monotone"
              dataKey="annunity"
              stackId="1"
              stroke="#ffc658"
              fill="#ffc658"
            />
            <Area
              type="monotone"
              dataKey="life"
              stackId="1"
              stroke="#FF8042"
              fill="#FF8042"
            />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    </>
    )
  }