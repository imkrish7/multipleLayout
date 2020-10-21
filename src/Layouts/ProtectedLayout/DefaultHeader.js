import React, { Component } from "react";
import { Link } from "react-router-dom";
import styles from "../../styles/defaultHeader.module.scss";

class DefaultHeader extends Component {
  logout = () => {
    localStorage.clear();
    window.location.href = "/login";
  };
  render() {
    return (
      <header className={styles.header}>
        <div>
          <h1>Logo</h1>
        </div>
        <nav className={styles.nav}>
          <button onClick={this.logout} className={styles.btn}>
            Signout
          </button>
          <Link to="/dashboard" className={styles.btn}>
            Dashboard
          </Link>
          <Link to="/profile" className={styles.btn}>
            Profile
          </Link>
        </nav>
      </header>
    );
  }
}

export default DefaultHeader;
