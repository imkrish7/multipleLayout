import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import DefaultHeader from "./DefaultHeader";
import DefaultFooter from "./DefaultFooter";
import styles from "../../styles/defaultlayout.module.scss";
class DefaultLayout extends Component {
  componentDidMount() {
    console.log(this.props);
  }
  render() {
    return (
      <div className={styles.container}>
        <DefaultHeader />
        <main className={styles.main}>{this.props.children}</main>
        <DefaultFooter />
      </div>
    );
  }
}

export default DefaultLayout;
