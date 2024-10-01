import * as React from 'react'
import { ResponsiveContainer, LineChart, Line, Tooltip, XAxis, YAxis, Legend } from "recharts"
import "./SinglePage.scss"


export default function SinglePage(props) {
  let validate = JSON.stringify(props[0])

  console.log('starting')

  if(validate !== undefined)
  {
    let json = props[0]

    let isInfo = json.info
    let isCharts = json.chart
    let isActivities = json.activities
    let activities = []
    let chart = []
    let info = []

    if(isActivities) {
      activities = JSON.parse(isActivities)
    }
    if(isCharts){
      chart = JSON.parse(isCharts)
    }
    if(isInfo){
      info = JSON.parse(isInfo)
    }
  
    return (
      <div className="singlePage">
        <div className="view">
          <div className="info">
            <div className="topInfo">
              {info.img && <img src={info.img} alt="" />}
              <h1>{info.title}</h1>
              <button>Update</button>
            </div>
            <div className='details'>
            {Object.entries(info).filter(([key]) => key != 'img' && key != 'id').map((item) => (
              <div className="item" key={item[0]}>
                <span className="itemTitle">{item[0]}:</span>
                <span className="itemValue">{item[1]}</span>
              </div>
            ))}
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
}