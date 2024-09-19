import "./PieChartBox.scss"
import { ResponsiveContainer, PieChart, Pie, Tooltip, Cell } from "recharts"
import React from "react";

const props = {
  name: "", // String
  value: 0, // number | String
  color: "", // String
};

export function PieChartBox(props) {
    return (
    <>
       <div className="pieChartBox">
            <h2>Leads by Source</h2>
            <div className="chart">
                <ResponsiveContainer width="99%" height={300}>
                    <PieChart>
                        <Tooltip contentStyle={{ background: "white", borderRadius: "5px" }}/>
                        <Pie
                        data={props.chartData}
                        innerRadius={"70%"}
                        outerRadius={"90%"}
                        paddingAngle={5}
                        dataKey="value"
                        >
                            {props.chartData.map((item) => (
                                <Cell key={item.name} fill={item.color} />
                            ))}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
            </div>
            <div className="options">
                {props.chartData.map((item) => (
                <div className="option" key={item.name}>
                    <div className="title">
                    <div className="dot" style={{ backgroundColor: item.color }} />
                    <span>{item.name}</span>
                    </div>
                    <span>{item.value}</span>
                </div>
                ))}
            </div>
        </div>
    </>
    )
  }