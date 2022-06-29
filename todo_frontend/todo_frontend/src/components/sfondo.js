import ReactDOM from 'react-dom';
import React from 'react';
import Auth from './autentication/auth';
import style from './sfondo.module.css';
import { useState } from 'react';
var userAction = "";
var update_value = "";
function Sfondo() {
/*
  const [stato_user,functionUpdate] = useState(userAction)

  const setAuth = (item) =>{
  userAction = item;
  functionUpdate(userAction)
  }
*/
  const [contatore,functionUpdate] = useState(update_value)
  const evento = (item) =>{
    functionUpdate(item)
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
                <button onClick={() => evento('Login')} className={style.head_r} id={style.login}>login</button>
                <button onClick={() => evento('Logout')}className={style.head_r} id={style.logout}>Logout</button>
            </section>
        </header>
<div>{contatore}</div>
        
<button onClick={evento}> </button>
    </React.Fragment>
  );
}

export default Sfondo;