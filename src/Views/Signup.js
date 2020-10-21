import React, { Component } from "react";
import styles from "../styles/login.module.scss";

class Signup extends Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.form_wrapper}>
          <div className={styles.header}>
            <h1 className={styles.header_text}>Sign Up</h1>
          </div>
          <form className={styles.form}>
            <section className={styles.input_wrapper}>
              <label className={styles.label}>Email</label>
              <input
                placeholder="email"
                className={styles.input}
                type="email"
              />
            </section>
            <section className={styles.input_wrapper}>
              <label className={styles.label}>Password</label>
              <input
                placeholder="password"
                className={styles.input}
                type="password"
              />
            </section>
            <section className={styles.btn_wrapper}>
              <button className={styles.login_btn}>Submit</button>
            </section>
          </form>
        </div>
      </div>
    );
  }
}

export default Signup;
