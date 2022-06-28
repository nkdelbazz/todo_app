import ReactDOM from 'react-dom';
import React from 'react';
import style from './sfondo.module.css';
function Sfondo() {
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
                <div className={style.head_r} id={style.login}>login</div>
                <div className={style.head_r} id={style.logout}>Logout</div>
            </section>
        </header>

    </React.Fragment>
  );
}

export default Sfondo;