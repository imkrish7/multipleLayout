import React, { Component } from "react";
import { Link } from "react-router-dom";
import styles from "../../styles/defaultHeader.module.scss";

class DefaultHeader extends Component {
  render() {
    return (
      <header className={styles.header}>
        <div>
          <h1>Logo</h1>
        </div>
        <nav className={styles.nav}>
          <Link className={styles.btn} to="/">
            Login
          </Link>
          <Link className={styles.btn} to="/signup">
            SignUp
          </Link>
        </nav>
      </header>
    );
  }
}

export default DefaultHeader;
