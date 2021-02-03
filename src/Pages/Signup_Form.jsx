import React,{useState} from 'react';
import './Signup.styles.css';
import index from '../Images/index.jpeg'
import firebase from '../Firebase/Firebase'

import { useHistory } from "react-router-dom";
const SignUp=()=>{
    const history = useHistory();
    const [userName,setuserName]=useState('');
    const [email,setEmail]=useState('');

const handle=(e)=>{
    e.preventDefault()
    console.log(userName,email);
    const db=firebase.firestore();
    db.settings({
        timestampsInSnapshots: true
      });
      const userRef = db.collection("User").add({
        userName: userName,
        email: email
      });  
      setEmail('');
      setuserName('');
history.push('/Landing')
console.log('hello')
}
    return (
        <div className="container">
             <div className="header">

                 <p><span>To Get&nbsp;Free&nbsp;pdf&nbsp;</span><span style={{color:"#ea9d1c"}}>
                     <strong>
                     E-Book</strong></span> <span>&nbsp;Now</span></p><br></br>

                     <p className="p2"><span className="line2">Enter your name and email address</span></p>
                     
</div>
        <div className="mainContainer">
           
<div className="leftImage">
    <img src={index} alt="Logo"/>
</div>
<div className="form">
    <form  onSubmit={handle}  target="_blank" action="http://google.com">
        <span>Name</span>
        <input type="text" value={userName} onChange={e=> setuserName(e.target.value)}/>
        <span>Email</span>
        <input type="text" value={email} onChange={e=>setEmail(e.target.value)}/>
        <input className="btn" type="submit" value="GET FREE E-BOOK"/>
    </form>
</div>
        </div>
        <div className="footer">
            <div>
                <b>
                <p style={{fontSize:"24px",color:"white",textDecoration:'underline',position:'relative',top:"-6px"}}>SUBMIT TO REVEAL</p>
                </b>
                <b>
                <p className="fline">
How To Get The World's Largest<br></br>
 Collection of <span style={{color:"white"}}> Woodworking  Plans</span>
</p>
</b>
            </div>
    
    </div> 
        </div>
    )
}

export default SignUp;