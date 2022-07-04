import ReactDOM from 'react-dom';
import React from 'react';
import Auth from './autentication/auth';
import style from './sfondo.module.css';
import { useState, useEffect } from 'react';
var userAction = "";
var update_value = "";
function Sfondo() {
/*
  const [stato_user,functionUpdate] = useState(userAction)

  const setAuth = (item) =>{
  userAction = item;
  functionUpdate(userAction)
  }


        {unreadMessages.length > 0 &&
              <h2>
                You have {unreadMessages.length} unread messages.
              </h2>
        }



*/


  const [user_action,functionUpdate] = useState(update_value)
  const [active,functionActive] = useState("not")
  const [valore,updateDD] = useState("")

  const evento = (item) =>{
    functionUpdate(item)
    functionActive("ok")
  } 

  const richiesta = (data) => {
    functionUpdate("")
    updateDD(data)
  }

  return (
    <React.Fragment>
        <header className={style.header}>
            <section className={style.left}>
                <div className={style.head_l}>Home</div>
                <div className={style.head_l}>New</div>
                <div className={style.head_l}>Categories</div>
                <div className={style.head_l}>List</div>
            </section>
            <section className={style.right}>
              {valore == "Logout" &&
              (
                <React.Fragment>
                <button onClick={() => evento('Login')} className={style.head_r} id={style.login}>login</button>
                <button disabled className={style.head_r} id={style.logout}>Logout</button>
                </React.Fragment>
              ) 
              }
              {valore == "Login" &&
                <React.Fragment>
                <button disabled className={style.head_r} id={style.login_disabled}>login</button>
                <button onClick={() => evento('Logout')}className={style.head_r} id={style.logout}>Logout</button>
                </React.Fragment>
              }
              
              {(valore !== "Login" && valore !== "Logout") &&
                <React.Fragment>
                <button onClick={() => evento('Login')} className={style.head_r} id={style.login}>login</button>
                <button onClick={() => evento('Logout')}className={style.head_r} id={style.logout}>Logout</button>
                </React.Fragment>
              }

            </section>
        </header>   
        <React.Fragment>
           <Auth 
           data={[user_action]}
           func={richiesta}
           ></Auth>
         </React.Fragment>
    </React.Fragment>
  );
}

export default Sfondo;