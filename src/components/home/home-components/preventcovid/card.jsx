import React from 'react'
import "./preventcovid.css"
import Homelogo from "./home.png"

export default function card() {
  return (
    <div className='card-container'>
        <div className='card-img'>
            <img src={Homelogo} alt="" style={{'maxHeight':'60px','margin':'0px 5px'}} />
        </div>
        <div className='card-heading'> Stay at home</div>
        <div className='card-info'>
      <p>Staying home stops virus from spreading</p>
        </div>
    </div>
  )
}
