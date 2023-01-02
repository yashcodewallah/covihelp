import React from 'react'
import { ReactComponent as Doctorillustration } from './doctor.svg';
import "./landing.css"


export default function landing() {
  return (
    <div className='landing'>
    <div className='landing-left '>
      <div className='purple-text' style={{ "fontSize": "20px" }}>Covid 19 Awareness</div>
      <div className='landing-heading purple-text'>STAY SAFE.STAY HOME.</div>
      <div className='grey-txt'>The virus spreads mostly through droplets that people send out when they talk,sneeze,or cough.These usually don't stay in the air for long or go farther than 6 feet.</div>
      <div className='purple-btn'>HOW TO PREVENT</div>
    </div>
    <div className='landing-right'>
      <Doctorillustration className='doctor-illustration' />
    </div>
  </div>
    )
}
