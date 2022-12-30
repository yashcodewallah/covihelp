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
<li>stay at home<img src={Tick} alt='' style={{'maxHeight':'15px'}}></img></li>
<li>stay at home<img src={Tick} alt='' style={{'maxHeight':'15px'}}></img></li>
<li>stay at home<img src={Tick} alt='' style={{'maxHeight':'15px'}}></img></li>
<li>stay at home<img src={Tick} alt='' style={{'maxHeight':'15px'}}></img></li>
<li>stay at home<img src={Tick} alt='' style={{'maxHeight':'15px'}}></img></li>
    </div>
    <div className='shouldDo'>
    <div className='shouldDoheading'>You should do<img src={Cross} alt='' style={{'maxHeight':'15px' ,'marginLeft':'10px'}}></img></div>
<li>stay at home<img src={Cross} alt='' style={{'maxHeight':'15px'}}></img></li>
<li>stay at home<img src={Cross} alt='' style={{'maxHeight':'15px'}}></img></li>
<li>stay at home<img src={Cross} alt='' style={{'maxHeight':'15px'}}></img></li>
<li>stay at home<img src={Cross} alt='' style={{'maxHeight':'15px'}}></img></li>
<li>stay at home<img src={Cross} alt='' style={{'maxHeight':'15px'}}></img></li>
<li>stay at home<img src={Cross} alt='' style={{'maxHeight':'15px'}}></img></li>
    </div>
    <div className='remedy-img'>
        <img src={Doctor} alt="" style={{'maxWidth':'400px'}}></img>
    </div>
   </div>
    </div>
  )
}
