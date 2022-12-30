import React from 'react'
import Doctor1 from "./doctor1.jpg"
import Doctor2 from "./doctor2.jpg"
import Doctor3 from "./doctor3.jpg"
import Admin from "./admin.png"
import Comment from "./comment.png"
import "./news.css"

function Card({element}){
    return(
         <div className='news-card-container'>
         <img src={element.img_src}  style={{'maxHeight':'180px'}} alt=" "/>
         <div className='info'>
           <div className='info-block1'>
           <div><img src={Admin} alt='' style={{'maxHeight':'20px'}}></img><span>admin</span></div>
           <div><img src={Comment} alt='' style={{'maxHeight':'20px'}}></img><span>comments</span></div>
           </div>
           <div className='info-block-2'>
           <h4 style={{'color':'purple','fontFamily':'roboto','fontWeight':'500','width':'250px','fontStyle':'italic','cursor':'pointer'}}>How coronavirus is very cotiguous</h4>
           </div>
          </div>
          </div>
          );
}




export default function news() {
  
    const card_arr=[
        {
            index:1,
            img_src:Doctor1
        },
        {
            index:2,
            img_src:Doctor2
        },
        {
            index:3,
            img_src:Doctor3
        }
    ]



    return (
    <div className='news-container'>
        <div className='news-heading'>
            <div style={{'color':'#9252B6','fontFamily':'roboto','fontSize':'30px','fontWeight':'800','marginBottom':'30px'}}>News And Articles</div>
            <div style={{'color':'grey','fontFamily':'sans-serif',}}>COVID-19 is caused by infection with a coronavirus named SARS-CoV-2, and flu is caused by infection with influenza viruses</div>
        </div>
        <div className='news-cards-container'>
        {card_arr.map(element=>{
        return <Card element={element} key={element.index} />
        })}           
        </div>
    </div>
  )
}
