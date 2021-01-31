import React,{useState} from 'react';
import firebase from '../Firebase/Firebase'



const GetEmails =()=>{

    const [user,setUser]=useState([]);
    const gets=async()=>{
      const db=firebase.firestore();
      const data=await db.collection('User').get();

      setUser(data.docs.map(doc=> doc.data()))
       console.log(user)
    }
    return(
<div style={{width:"100vw"}}>
        <button onClick={gets} style={{width:"100%",height:"50px"}}>Get Email</button>
        <table style={{width:'50%',margin:'0 auto',display:'table'}}>
            <tr style={{justifyContent:'center',textAlign:'center'}}>
                <th>Name</th>
                <th>Email</th>
            </tr>
            <tbody>
        {user.map(item=>{
            return( 
            <tr style={{textAlign:'center'}} key={item.email}>
                <td>{item.userName}</td>
                <td>{item.email}</td>
            </tr> 
            )
        })}
        </tbody> 
        </table>
        </div>
    )
}

export default GetEmails;