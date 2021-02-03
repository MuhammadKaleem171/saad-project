import React from 'react';
import './Landing.styles.css'
import ytube from '../Images/youtube.jpeg';
import e1 from '../Images/e1.jpeg';
import e2 from '../Images/e2.jpeg';
import e3 from '../Images/e3.jpeg';
import index from '../Images/index.jpeg';

import {useState,useEffect} from 'react'


const Landing=()=>{
    const [imageArray,setImageArray]=useState([]);
    const item=[
        {url:index,
    add:'https://www.google.com'},

    {url:e1,
    add:'google.com',
},{
    url:e2,
    add:'google.com',
},{
    url:e3,
    add:'google.com',
}]
    useEffect(() => {
setImageArray(item)
    },[])
    
    let url="https://www.google.com";
return(
    <div className="container1">
        <div className="header1">
            <div className="Sheader">
            <span style={{color:"#2a353c",fontSize:"48px",position:'relative',alignItems:'center',display:'flex'}}>
                <strong>Get Free Pdf E-books Below⬇</strong></span>
            </div>
        </div>

        <div className="Attension">
        <p style={{textaAlign:"center",color:"#ffffff",fontSize:"48px"}}><strong style={{position:'relative',top:'14px'}}>
            <span style={{backgroundColor:"#151b1e"}}>&nbsp;Attention!&nbsp;</span></strong></p>

            <p style={{textAlign:"center",fontSize:"30px"}}><strong>Free Video Reveals</strong>&nbsp;<strong>How To Get </strong>
        <span style={{fontSize:"30px"}}><strong>The World's Largest Collection of&nbsp;</strong>
        <span style={{color:"#ea9d1c",fontWeight:'bold'}}>&nbsp;16,000&nbsp;Woodworking Plans</span></span></p>
        </div>
        <div className="text">
        <div className="text1">
        <p style={{lineHeight:"1", textAlign:"center"}}>
            <span style={{fontSize:"24px"}}>Make 16,000 Projects With Step By Step Plans</span></p>
            <span style={{fontSize:"24px"}}>...even if you don't have a large workshop or expensive tools!</span>
        </div>
        </div>
        <div className="Yimage">
            <div className="Yimage1">
               <a href={url} target="_blank" rel="noopener noreferrer"> 
               <img src={ytube} style={{padding:"5px",height:'515px',width:'100%'}}/>
               </a>
            </div>
        </div>

        <div className="Ebook">
            <span style={{fontSize:'36px',padding:"5px"}}><strong> E-Books</strong></span>
        </div>
        <div className="imgeContainer">
            {imageArray.map(item=>{
                return(
            <div key={item.url} className="imageList" >
                <a href={item.add}>
                    <img src={item.url} style={{width:"100%",height:'100%'}}/>
                </a>
            </div>
                )
            })}

                </div>
                
            
        </div>
)

}
export default Landing;