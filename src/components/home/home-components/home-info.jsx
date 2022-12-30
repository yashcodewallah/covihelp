import React from 'react'
import Doctor1 from '../resources/doctor1.png'
import Doctor2 from '../resources/doctor2.png'
import "../home.css"

export default function homeinfo() {
  return (
    <div className='home-info-container'>
    <div className='home-info-1'>
      <div className='info-image'><img src={Doctor1} style={{ 'maxHeight': '300px' }} alt="" /></div>
      <div className='info-text-right purple-text'>
        <h1 className='info-heading'>What is Coronavirus?</h1>
        <div className='info-detail'>Coronaviruses are a large family of viruses known to cause illness ranging from the common cold to more severe diseases such as Middle East Respiratory Syndrome (MERS), Severe Acute Respiratory Syn…</div>
        <li className='info-points'>SARS-CoV-2</li>
        <li className='info-points'>SARS-CoV</li>
        <li className='info-points'>MERS-CoV</li>
        <div className='purple-btn'>HOW TO LEARN</div>
      </div>
    </div>

    <div className='home-info-2'>
    <div className='info-image'><img src={Doctor2} style={{ 'maxHeight': '280px' }} alt="" /></div>
      <div className='info-text-left purple-text'>
        <div className='info-heading'>Why is it Dangerous?</div>
        <div className='info-detail'>Coronaviruses are a large family of viruses known to cause illness ranging from the common cold to more severe diseases such as Middle East Respiratory Syndrome (MERS), Severe Acute Respiratory Syn…</div>
        <li className='info-points'>SARS-CoV-2</li>
        <li className='info-points'>SARS-CoV</li>
        <li className='info-points'>MERS-CoV</li>
        <div className='purple-btn'>HOW TO LEARN</div>
      </div>
    </div>
  </div>
    )
}
