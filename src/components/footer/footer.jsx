import React from 'react'
import { Link } from 'react-router-dom';
import './footer.css'
import InstagramLogo from './instagram.png'
import FacebookLogo from './facebook.png'
import TwitterLogo from './twitter.png'
import YoutubeLogo from './youtube.png'

const InstagramLogin=(prop)=>{
  window.location.href = `https://www.${prop}.com/`;
}


export default function footer() {
  return (
    <div className='footer-container'>
        <div className='footer-left footer-section'>
            <div className='section-heading'>About</div>
            <div className='grey-text' >COVID-19 is caused by infection with a coronavirus named SARS-CoV-2, and flu is caused by infection with influenza viruses</div>
        
        <div className='site-logo-container'>
          <img src={InstagramLogo} alt="" onClick={(e)=>{
            e.preventDefault();
            InstagramLogin('instagram');
            }} style={{'maxHeight':'40px','cursor':'pointer'}}/>
          <img src={FacebookLogo} alt="" onClick={(e)=>{
            e.preventDefault();
            InstagramLogin('facebook')}} style={{'maxHeight':'40px','cursor':'pointer'}}/>
          <img src={TwitterLogo} alt="" onClick={(e)=>{
            e.preventDefault();
            InstagramLogin('twitter')}} style={{'maxHeight':'40px','cursor':'pointer'}}/>
          <img src={YoutubeLogo} alt="" onClick={(e)=>{
            e.preventDefault();
            InstagramLogin('youtube')}} style={{'maxHeight':'40px','cursor':'pointer'}}/>
        </div>
        
        </div>
        <div className='footer-right'>
        <div className='quick footer-section'>
        <div className='section-heading'>Quick Links</div>
        <Link to='/symptoms'>Symptoms</Link>
        <a href='/'>Prevention</a>
        <a href='/'>FAQs</a>
        <a href='/'>About Coronavirus</a>
        <a href='/contact'>Contact Us</a>
        </div>
        <div className='helpful footer-section'>
        <div className='section-heading'>Helpful Links</div>
        <a href='/'>Healthcare Professional</a>
        <a href='/'>LGU Facilities</a>
        <a href='/'>Protect Your Family</a>
        <a href='/'>World Health</a>
        </div>
        <div className='resources footer-section'>
        <div className='section-heading'>Resources</div>
        <a href='https://covid19.who.int/'>WHO website</a>
        <a href='https://www.cdc.gov/coronavirus/2019-ncov/index.html'>CDC Website</a>
        <a href='https://www.mohfw.gov.in/'>Government Website</a>
        <a href='https://doh.wa.gov/emergencies/covid-19'>DOH Website</a>
        </div>
    </div>
    </div>
  )
}
