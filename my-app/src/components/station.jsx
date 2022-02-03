import React, { Component } from 'react'
import StationList from './stationList'
import '../css/style.css'
import Backarrow from '../images/back-arrow.png'
import Switch from '../images/switch.png'

// Many List Can Be Added Through Stations Array Object

let stations = [
  { name: 'Putin FM', frequency: '66,6' },
  { name: 'Dribble FM', frequency: '101,2' },
  { name: 'Doge FM', frequency: '99,4' },
  { name: 'Ballads FM', frequency: '87,1' },
  { name: 'Maximum FM', frequency: '142,2' },
]

const Station = () => {
  // Used Map Method For Adding FM Name And Frequency From Stations Array Method Automatically

  let mapping = stations.map((elem) => (
    <div key={elem.name}>{<StationList stations={elem} />}</div>
  ))
  return (
    <>
      <div className="main">
        <div className="main-section">
          <section className="fm-heading">
            <a href="#">
              <img src={Backarrow} alt="back-arrow" />
            </a>
            <h1 className="heading">STATIONS</h1>
            <a href="#">
              <img src={Switch} alt="switch" />
            </a>
          </section>
          <section className="fm-list">
            <section className="list-with-details">{mapping}</section>
          </section>
        </div>
        <div className="status-section">
          <span className="current">CURRENTLY PLAYING</span>
          <span className="current-fm">Putin FM</span>
        </div>
      </div>
    </>
  )
}

export default Station
