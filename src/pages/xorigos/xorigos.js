import React from "react";
import styles from "./xorigos.module.css";
import xorigoi from "../../images/xorigoi2.png";

const xorigos = () => (
  <div className={styles.xorigos}>
    <img src={xorigoi} style={{ minHeight: 700 }} alt="sponsors" />
  </div>
);

xorigos.propTypes = {};

xorigos.defaultProps = {};

export default xorigos;
