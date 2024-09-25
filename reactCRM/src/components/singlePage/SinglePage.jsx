import * as React from 'react'
import { ResponsiveContainer, LineChart, Line, Tooltip, XAxis, YAxis, Legend } from "recharts"
import "./SinglePage.scss"

const props = {
    id:0,
    img: '',
    title: '',
    username: '',
    chart:{
        dataKeys: { name: '', color: ''},
        data: []
    },
    activities: {time: '', text: '' }

}
export default function SinglePage(props) {
  let json = JSON.stringify(props[0])
  let isInfo = null
  let isCharts = null
  let isActivities = null
  let activities = {time: '', text: '' }
  let chart = null

  if(json !== undefined)
  {
    props = JSON.parse(json)
    isInfo = props.info
    isCharts = props.chart
    isActivities = props.activities
    if(isActivities) {
      activities = JSON.parse(props.activities)
    }
    if(isCharts){
      chart = JSON.parse(props.chart)
    }
  }
    return (
        <div className="singlePage">
          <div className="view">
            <div className="info">
              <div className="topInfo">
                {props.img && <img src={props.img} alt="" />}
                <h1>{props.firstName + " " + props.lastName}</h1>
                <button>Update</button>
              </div>
              <div className="details">
                  <div className="item">
                    <span className="itemTitle">Username:</span>
                    <span className="itemValue">{props.username}</span>
                  </div>
              </div>
            </div>
            <hr />
            {isCharts && (
              <div className="chart">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    width={500}
                    height={300}
                    data={chart.data}
                    margin={{
                      top: 5,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
                  >
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    {chart.dataKeys.map((dataKey) => (
                      <Line
                        type="monotone"
                        dataKey={dataKey.name}
                        stroke={dataKey.color}
                      />
                    ))}
                  </LineChart>
                </ResponsiveContainer>
              </div>
            )}
          </div>
          <div className="activities">
        <h2>Latest Activities</h2>
        {isActivities && (
          <ul>
            {activities.map((activity) => (
              <li key={activity[0]}>
                <div>
                  <p>{activity.text}</p>
                  <time>{activity.time}</time>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
      )
    }