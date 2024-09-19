import "./AreaChartBox.scss"
import { ResponsiveContainer, AreaChart, Area, Tooltip, CartesianGrid, XAxis, YAxis } from "recharts"
import React from "react";

const props = {
  name: "", // String
  books: 0, // number | String
  clothes: 0, // number | String
  electronic: 0, // number | String
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
              dataKey="electronic"
              stackId="1"
              stroke="#8884d8"
              fill="#8884d8"
            />
            <Area
              type="monotone"
              dataKey="clothes"
              stackId="1"
              stroke="#82ca9d"
              fill="#82ca9d"
            />
            <Area
              type="monotone"
              dataKey="books"
              stackId="1"
              stroke="#ffc658"
              fill="#ffc658"
            />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    </>
    )
  }