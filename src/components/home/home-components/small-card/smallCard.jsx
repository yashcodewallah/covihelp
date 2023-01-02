import React from 'react'
import Virusicon from './virusicon.png';
import Security from './security.png';
import Treatment from './treatment.png';
import Doctor from './doctor.png';
import Tick from './tick.png'
import "./small-card.css"


const Sorethroat = (key) => {
    return <div className='grey-txt tick-row' key={key} ><img src={Tick} alt='' height={"15px"}></img>sore throat</div>
}

const arr = [1, 2, 3];

export default function smallCard() {
    return (
        <div className='small-card-container'>
            <div className='small-card'>
                <div className='small-card-img' style={{ 'marginTop': '10px' }}><img src={Virusicon} alt='' height={"50px"} /></div>
                <div className='small-card-right'>
                    <div className='small-card-heading purple-text' >SYMPTOMS</div>
                    <div className='small-card-detail'>
    
                    {arr.map((element) => {
                        return <Sorethroat key={element} />;
                    })}
                    </div>
                </div>
            </div>

            <div className='small-card'>
                <div className='small-card-img' style={{ 'marginTop': '10px' }}><img src={Doctor} alt='' height={"50px"} /></div>
                <div className='small-card-right'>
                    <div className='small-card-heading purple-text' >PROTECTION</div>
                    <div className='small-card-detail' >
                    {arr.map((element) => {
                        return <Sorethroat key={element} />;
                    })}
                    </div>
                </div>
            </div>

            <div className='small-card'>
                <div className='small-card-img' style={{ 'marginTop': '10px' }}><img src={Security} alt='' height={"50px"} /></div>
                <div className='small-card-right'>
                     <div className='small-card-heading purple-text' >SECURITY</div>
                     <div className='small-card-detail' >
                     {arr.map((element) => {
                         return <Sorethroat key={element} />;
                    })}
                    </div>
                </div>
            </div>

            <div className='small-card'>
                <div className='small-card-img' style={{ 'marginTop': '10px' }}><img src={Treatment} alt='' height={"50px"} /></div>
                <div className='small-card-right'>
                    <div className='small-card-heading purple-text'>TREATMENT</div>
                    <div className='small-card-detail' >
                    {arr.map((element)=>{
                     return <Sorethroat key={element} />;
                    })}
                    </div> 
                </div>
            </div>
        </div>
    )
}
