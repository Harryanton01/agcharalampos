import React from "react";
import styles from "./nea.module.css";
import Newsfeed from "../../components/newsfeed/newsfeed";

const nea = () => (
  <div className={styles.nea}>
    <Newsfeed />
  </div>
);

nea.propTypes = {};

nea.defaultProps = {};

export default nea;
