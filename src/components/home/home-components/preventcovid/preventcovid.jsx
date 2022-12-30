import React from 'react'
import "./preventcovid.css"
import Card from './card'
import Tick from "./tick.png"
export default function preventcovid() {
  return (
    <div className='preventcovidContainer'>
      <div className='box-1'>
        <Card />
        <Card />
      </div>
      <div className='box-2'>
        <Card />
        <Card />
      </div>
      <div className='info-box'>
       <div className='info-box-heading'>
       How To Prevent Coronavirus?
       </div>
       <div className='info-box-info'>
       You are less likely to be infected with COVID-19 during outdoor activities because virus particles do not build up in the air outdoors as much as they do indoors. As the COVID-19 Community Level rises, consider increasing the number of group activities you move outside.
       </div>
       <div className='info-box-checks'><img src={Tick} alt="" style={{'maxHeight':'20px'}}></img>Stay Home</div>
       <div className='info-box-checks'><img src={Tick} alt="" style={{'maxHeight':'20px'}}></img>Get Vaccineted</div>
       <div className='info-box-checks'><img src={Tick} alt="" style={{'maxHeight':'20px'}}></img>Maintain six feet distance</div>
       <div className='info-box-button'>READ MORE ABOUT PREVENTION</div>
      </div>
    </div>
  )
}
