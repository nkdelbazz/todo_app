import ReactDOM from 'react-dom';
import React from 'react';
import { useState , useEffect } from 'react';

const user = [
  {email: "nkdelbazz113@gmail.com", password:"Metrjam113.113"},
  {email: "admin@admin.com", password:"adminpassword!"}
]
var utente = "";

function Authuser(props) {
  utente = props.user; 
  console.log("controllo database")
  user.forEach(element => {
    if(element.email === utente[0] && element.password === utente[1]){
    //  alert("utente autenticato per " + element.email)
    console.log("ok")
    }
    else{
      //alert("non in database per "+utente.email)
      console.log("non in database"+utente[0])
    }
  });
  return(
    <div>cioa</div>
    
  )
}

export default Authuser;