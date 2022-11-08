import React from "react";
import styles from "./review.module.css";
import anaskopisi from "../../images/anaskopisi.mp4";
import Syllogos from "../../images/syllogos.mp4";

const review = () => (
  <div className={styles.review}>
    <video width="80%" height="100%" controls>
      <source src={anaskopisi} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <video width="80%" height="100%" controls>
      <source src={Syllogos} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
);

review.propTypes = {};

review.defaultProps = {};

export default review;
