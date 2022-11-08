import React from "react";
import styles from "./elamazimas.module.css";
import Article6 from "../../components/newsfeed/articles/article6/article6";

const elamazimas = () => (
  <div className={styles.elamazimas}>
    <Article6 />
  </div>
);

elamazimas.propTypes = {};

elamazimas.defaultProps = {};

export default elamazimas;
