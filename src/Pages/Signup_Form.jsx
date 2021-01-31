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
                 <p><span><strong>To Get&nbsp;Free&nbsp;pdf&nbsp;&nbsp;</strong></span><span style={{color:"#ea9d1c"}}>
                     <strong>
                     E-Book</strong></span> <span><strong>Now</strong></span></p><br></br>

                     <p style={{position:'absolute',top:'60px'}}><span style={{fontSize:'28px'}}>Enter your name and email address</span></p>

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
        <input className="btn" type="submit" value="submit"/>
    </form>
</div>
        </div>
        <div className="footer">
            <div>
                <p style={{fontSize:"24px",color:"white",textDecoration:'underline'}}>SUBMIT TO REVEAL</p>
                <p style={{fontSize:"32px",margin:"0",padding:"0"}}>
How To Get The World's Largest<br></br>
 Collection of <span style={{color:"white"}}> Woodworking  Plans</span>
</p>
            </div>
    
    </div> 
        </div>
    )
}

export default SignUp;