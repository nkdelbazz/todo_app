import ReactDOM from 'react-dom';
import React from 'react';
import { useState , useEffect } from 'react';
import styles from './auth.module.css';
import Authuser from './authuser';

var _action = "";
var _show = "";
var userPassare = "";
function Auth(props) {
  _action = props.data[0]


  /*
  <h4><b>Please Register or Login</b></h4>
  <p>Login</p>  <input name='valore'></input>
  <p>Register</p>   <input name='valore'></input>
  <button onClick={() => richiesta("none")}>conferma</button>


DA FARE : onChange={handlePasswordChange}


  */

  const [userDatabase,callUser] = useState(false)
  const [show,functionUpdate] = useState(_show)
  
  const richiesta = (data) => {
    console.log(data); // LOGS DATA FROM CHILD (My name is Dean Winchester... &)
    console.log("email:" + email + "<br> password:" + password )
    userPassare = [{
      "email":email,
      "password":password
    }]
    callUser(true)

   // functionUpdate("none")
   // props.func(_action)
  }

  const [password, setPassword] = useState('')
  const [errorValPassword,setValidationPassword] = useState(true)

  const [email, setEmail] = useState('')
  const [errorValEmail,setValidationEmail] = useState(true)

  const [invio, setInvio] = useState(true)

  const validation_email = email.length >= 10 && email.includes('@') && email.includes('.');
  var format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  const validation_password = format.test(password) ;

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      if( validation_email && validation_password)
      {
        console.log("input data ok")
        setInvio(false)
      }
      else
      {
        console.log("input data non ok")
        setInvio(true)
      }
    }, 500);
    return () => clearTimeout(timeOutId);
  }, [email, password]) // Only re-run the effect if name or email change






  function getControlEmail(){
    setValidationEmail(validation_email)
  }

  function getControlPassword(){
    setValidationPassword(validation_email)
  }

  if(userDatabase)
    {
      return (<Authuser user={[email,password]}></Authuser>)
    }

  switch (_action) {
    case "Login":
        return (
          <React.Fragment>
            <div className={styles.modal} style={{ display: "block"}}>
              <div className={styles.modalContent} >
              <div style={{ display: "flex",lineHeight:"50px"}} className={styles.form_section}>
                <div style={{ width:"400px"}}>LOGIN</div>
              </div>

              <div style={{ display: "flex",height:"50px",verticalAlign:"middle"}} className={styles.form_section}>
                <div style={{ width:"250px",paddingLeft:"30px"}}>Email</div>
                <div style={{ flexGrow: "1",paddingRight:"30px"}}>
                  <input 
                        onKeyUp  = { e => setEmail(e.target.value) } 
                        onBlur={e => getControlEmail()}
                        style={{ width: "250px",backgroundColor: (!errorValEmail && "rgba(103, 11, 11, 0.208)")}}>
                  </input>
                   {!errorValEmail &&
                    (
                      <span style={{ width:"250px",alignItems:"left",color:"rgba(103, 11, 11, 0.608)"}}>email contains '@' and '.' </span>
                    ) 
                    }
                </div>
              </div>

              <div style={{ display: "flex",height:"50px",verticalAlign:"middle"}} className={styles.form_section}>
                <div style={{ width:"250px",paddingLeft:"30px"}}>Password</div>
                <div style={{ flexGrow: "1",paddingRight:"30px"}}>
                  <input 
                        onKeyUp  = { e => setPassword(e.target.value) }
                        onBlur={e => getControlPassword()}
                        style={{ width: "250px",backgroundColor: (!errorValPassword && "rgba(103, 11, 11, 0.208)")}}>
                  </input>
                  {!errorValPassword &&
                    (
                      <span style={{ width:"250px",alignItems:"left",color:"rgba(103, 11, 11, 0.608)"}}>'Password contains special chars' </span>
                    ) 
                    }
                  </div>
              </div>
              <div style={{ display: "flex",lineHeight:"50px",paddingLeft:"150px",paddingBottom:"5px"}} className={styles.form_section}>
                <button id={styles.button_submit} disabled={invio} onClick={() => richiesta("none")} style={{ width:"100px",backgroundColor:""}} className={styles.submit}>submit</button>
              </div>
              </div>
            </div>
          </React.Fragment>)
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