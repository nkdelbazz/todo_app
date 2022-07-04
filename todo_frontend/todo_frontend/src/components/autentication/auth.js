import ReactDOM from 'react-dom';
import React from 'react';
import { useState , useEffect } from 'react';
import styles from './auth.module.css';

var _action = "";
var _show = "";

function Auth(props) {
  _action = props.data[0]


  /*
  <h4><b>Please Register or Login</b></h4>
  <p>Login</p>  <input name='valore'></input>
  <p>Register</p>   <input name='valore'></input>
  <button onClick={() => richiesta("none")}>conferma</button>


DA FARE : onChange={handlePasswordChange}


  */


  const [show,functionUpdate] = useState(_show)
  
  const richiesta = (data) => {
    console.log(data); // LOGS DATA FROM CHILD (My name is Dean Winchester... &)
    functionUpdate("none")
    props.func(_action)
  }

  useEffect(() => {
    alert("You have do this times");
  });


  switch (_action) {
    case "Login":
        return (
          <React.Fragment>
            <div className={styles.modal} style={{ display: "block"}}>
              <div className={styles.modalContent} >
              <div style={{ display: "flex",lineHeight:"50px"}} className={styles.form_section}>
                <div style={{ width:"400px"}}>LOGIN</div>
              </div>
              <div style={{ display: "flex",lineHeight:"50px"}} className={styles.form_section}>
                <div style={{ width:"250px",paddingLeft:"30px"}}>Email</div>
                <div style={{ flexGrow: "1",paddingRight:"30px"}}><input style={{ width: "250px"}}></input></div>
              </div>
              <div style={{ display: "flex",lineHeight:"50px"}} className={styles.form_section}>
                <div style={{ width:"250px",paddingLeft:"30px"}}>Password</div>
                <div style={{ flexGrow: "1",paddingRight:"30px"}}><input style={{ width: "250px"}}></input></div>
              </div>
              <div style={{ display: "flex",lineHeight:"50px"}} className={styles.form_section}>
                <div onClick={() => richiesta("none")} style={{ width:"400px"}} className={styles.submit}>submit</div>
              </div>
              </div>
            </div>
          </React.Fragment>); 
      break;

    case "Logout":
      //setTimeout(richiesta("none"), 5000);
      return(
        <React.Fragment>
        <div className={styles.modal} style={{ display: "block"}} onClick={() => richiesta("none")}>
          <h4><b>You are succeful Logout</b></h4>
        </div>
      </React.Fragment>
      ); 
      break;

    default:
      return null;
  }
}

export default Auth;