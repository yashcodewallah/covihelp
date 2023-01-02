import React from 'react'
import "./remedyBox.css"
import Tick from "./tick.png"
import Cross from "./cross.png";
import Doctor from "./docImage.jpg";

export default function remedyBox() {
  return (
    <div className='remedyBoxContainer'>
   <div className='heading'>How To Protect Yourself?</div>
   <div className='heading-info'>Avoiding contact with people who have COVID-19, whether or not they feel sick, can reduce your risk of catching the virus from them.</div>
   <div className='remedysubBox'>
    <div className='shouldDo'>
<div className='shouldDoheading'>You should do<img src={Tick} alt='' style={{'maxHeight':'15px' ,'marginLeft':'10px'}}></img></div>
<li>stay at home<img src={Tick} alt='' style={{'maxHeight':'15px'}}></img></li>
<li>wear mask<img src={Tick} alt='' style={{'maxHeight':'15px'}}></img></li>
<li>use sanitizer<img src={Tick} alt='' style={{'maxHeight':'15px'}}></img></li>
<li>Disinfect your home<img src={Tick} alt='' style={{'maxHeight':'15px'}}></img></li>
<li>Wash your hands<img src={Tick} alt='' style={{'maxHeight':'15px'}}></img></li>
<li>Frequent self isolation<img src={Tick} alt='' style={{'maxHeight':'15px'}}></img></li>
    </div>
    <div className='shouldDo'>
    <div className='shouldDoheading'>You should do<img src={Cross} alt='' style={{'maxHeight':'15px' ,'marginLeft':'10px'}}></img></div>
<li>Avoid infected people<img src={Cross} alt='' style={{'maxHeight':'15px'}}></img></li>
<li>Avoid handshaking<img src={Cross} alt='' style={{'maxHeight':'15px'}}></img></li>
<li>Avoid going to public spaces<img src={Cross} alt='' style={{'maxHeight':'15px'}}></img></li>
<li>Avoid touching your face<img src={Cross} alt='' style={{'maxHeight':'15px'}}></img></li>
<li>Avoid going close to senior citizens<img src={Cross} alt='' style={{'maxHeight':'15px'}}></img></li>
<li>Avoid touching surfaces in public<img src={Cross} alt='' style={{'maxHeight':'15px'}}></img></li>
    </div>
    <div className='remedy-img'>
        <img src={Doctor} alt="" style={{'maxWidth':'350px'}}></img>
    </div>
   </div>
    </div>
  )
}
