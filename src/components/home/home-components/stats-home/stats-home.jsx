import React from 'react'
import "./stats-home.css"
import { Icon } from '@iconify-icon/react';

export default function Card(props) {


  return (
    <div className='stats-box'>
      <div className='purple-text sans-font ' style={{'marginBottom':'10px'}}>Coronavirus Statistic</div>
      <div className='grey-txt' style={{ 'margin': '0 10px' }}>United States Coronavirus update with statistics and graphs: total and new cases, deaths per day, mortality and recovery rates, current active cases, recoveries, trends and timeline.</div>

      <div className='card-box'>
        
        <div className='card'>
          <Icon icon="bxs:virus" height={'60px'} />
          <div className='data-number'>{props.active}</div>
          <div className='card-category'>ACTIVE CASES</div>
        </div>

        <div className='card'>
          <Icon icon="bxs:virus" height={'60px'} />
          <div className='data-number'>{props.death}</div>
          <div className='card-category'>DEATH CASES</div>
        </div>

        <div className='card'>
          <Icon icon="bxs:virus" height={'60px'} />
          <div className='data-number'>{props.recovered}</div>
          <div className='card-category'>RECOVERED CASES</div>
        </div>
        
      </div>
    </div>
  )
}
