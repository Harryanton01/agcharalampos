import React from "react";
import styles from "./eggrafi.module.css";
import Newuser from "../../components/stoixeia/newusers";

const eggrafi = () => (
  <div className={styles.eggrafi}>
    <Newuser />
  </div>
);

eggrafi.propTypes = {};

eggrafi.defaultProps = {};

export default eggrafi;
