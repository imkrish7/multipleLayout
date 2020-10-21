import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import styles from "../styles/login.module.scss";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      isLogin: false
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (
      this.state.email === "user@mail.com" &&
      this.state.password === "abc123"
    ) {
      localStorage.setItem("token", "Krishna");
      this.setState({
        isLogin: true
      });
    }
  };

  redirect = () => {
    if (localStorage.getItem("token")) {
      return <Redirect to="/dashboard" />;
    } else {
      return <Redirect to="/login" />;
    }
  };

  render() {
    return (
      <div className={styles.container}>
        {this.redirect()}
        <div className={styles.form_wrapper}>
          <div className={styles.header}>
            <h1 className={styles.header_text}>Login</h1>
          </div>
          <form onSubmit={this.handleSubmit} className={styles.form}>
            <section className={styles.input_wrapper}>
              <label className={styles.label}>Email</label>
              <input
                name="email"
                placeholder="email"
                className={styles.input}
                type="email"
                value={this.state.email}
                onChange={this.handleChange}
              />
            </section>
            <section className={styles.input_wrapper}>
              <label className={styles.label}>Password</label>
              <input
                name="password"
                placeholder="password"
                className={styles.input}
                type="password"
                value={this.state.password}
                onChange={this.handleChange}
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

export default Login;
