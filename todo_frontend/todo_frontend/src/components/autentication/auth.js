import ReactDOM from 'react-dom';
import React from 'react';
import style from './auth.module.css';

function Auth(props) {
  return (
    <React.Fragment>
    <div>{props.data}</div>
    </React.Fragment>
  );
}

export default Auth;