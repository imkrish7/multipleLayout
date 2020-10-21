import React, { Component } from "react";
import styles from "../../styles/defaultfooter.module.scss";

class DefaultFooter extends Component {
  render() {
    return (
      <footer className={styles.footer}>
        <h1>Footer</h1>
      </footer>
    );
  }
}

export default DefaultFooter;
