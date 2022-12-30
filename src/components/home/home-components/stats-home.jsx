import React ,{ useState }from 'react'
import "../home.css"
import { Icon } from '@iconify-icon/react';
import axios from 'axios';
export default function Card() {

  const [active, setActive] = useState("loading");
const [death,setDeath]= useState("loading");
const [recovered,setRecovered]= useState("loading");


  const options = {
    method: 'GET',
    url: 'https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/country-report-iso-based/India/ind',
    headers: {
      'X-RapidAPI-Key': '1d66893269mshea92921aa55aa31p1b73b8jsn831c5a571d80',
      'X-RapidAPI-Host': 'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com'
    }
  };
  
  axios.request(options).then(function (response) {
    const data=response.data;
    setActive(data[0].ActiveCases)
    setRecovered(data[0].TotalRecovered)
    setDeath(data[0].TotalDeaths)
  }).catch(function (error) {
    console.error(error);
  });
  return (
    <div className='stats-box'>
      <div className='purple-text sans-font ' style={{'marginBottom':'10px'}}>Coronavirus Statistic</div>
      <div className='grey-txt' style={{ 'margin': '0 10px' }}>United States Coronavirus update with statistics and graphs: total and new cases, deaths per day, mortality and recovery rates, current active cases, recoveries, trends and timeline.</div>

      <div className='card-box'>
        
        <div className='card'>
          <Icon icon="bxs:virus" height={'60px'} />
          <div className='data-number'>{active}</div>
          <div className='card-category'>ACTIVE CASES</div>
        </div>

        <div className='card'>
          <Icon icon="bxs:virus" height={'60px'} />
          <div className='data-number'>{death}</div>
          <div className='card-category'>DEATH CASES</div>
        </div>

        <div className='card'>
          <Icon icon="bxs:virus" height={'60px'} />
          <div className='data-number'>{recovered}</div>
          <div className='card-category'>RECOVERED CASES</div>
        </div>
        
      </div>
    </div>
  )
}
