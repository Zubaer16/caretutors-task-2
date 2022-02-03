import React, { Component } from 'react'
import Minus from '../images/minus.png'
import Fm from '../images/fm.png'
import Plus from '../images/plus.png'

const StationList = (stations) => {
  return (
    <>
      <div className="fm-hr-pic">
        <div className="fm-detail-pic">
          <a href="#" className="plus">
            <img className="detail-img" src={Plus} alt="plus" />
          </a>
          <img src={Fm} alt="fm" />
          <a href="#" className="minus">
            <img className="detail-img" src={Minus} alt="minus" />
          </a>
        </div>
        <div
          onClick={(e) => {
            // Used Plain JavaScript For Changing The Dom

            let click = e.currentTarget.firstElementChild.firstElementChild
            let change = e.currentTarget.parentElement.firstElementChild
            let statuss = document.getElementsByClassName('status-section')[0]
            let forClick = document.getElementsByClassName('fm-with-hr')
            let forChange = document.getElementsByClassName('fm-detail-pic')

            if (!change.style.display || change.style.display === 'none') {
              change.style.display = 'flex'
              statuss.style.visibility = 'visible'
              document.getElementsByClassName('current-fm')[0].innerHTML =
                click.innerText
              for (let i = 0; i < forClick.length; i++) {
                if (
                  forClick[i].querySelector('.fm-name').innerHTML ===
                  click.innerText
                ) {
                  continue
                } else {
                  forChange[i].style.display = 'none'
                }
              }
            } else {
              change.style.display = 'none'
              statuss.style.visibility = 'hidden'
            }
          }}
          className="fm-with-hr"
        >
          <a href="#" className="fm-and-frequnecy">
            <span className="fm-name">{stations.stations.name}</span>
            <span className="fm-frequency">{stations.stations.frequency}</span>
          </a>
          <hr />
        </div>
      </div>
    </>
  )
}
export default StationList
