import ReactDOM from 'react-dom';
import React from 'react';
import style from './auth.module.css';
import { useState } from 'react';
import styles from './auth.module.css';
var _action = "";
var _show = "";
function Auth(props) {
  _action = props.data[0]
  _show = props.data[1]
  const [show,functionUpdate] = useState(_show)

  function closeModal(){
  functionUpdate("none")
  }

  switch (_action) {

    case "Login":
      return (<div className={styles.modal} style={{ display: show}}>
      <div className={styles.modalContent}>
        <h4><b>Please Register or Login</b></h4>
        <p>Login</p>
        <p>Register</p>
        <button onClick={() => closeModal()}>Close</button>
      </div>
    </div>);
      break;

    case "Logout":
      return <h4><b>You are succeful Logout</b></h4>;
      break;

    default:
      return null;
  }
}

export default Auth;