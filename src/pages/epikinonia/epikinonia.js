import React from "react";
import styles from "./epikinonia.module.css";
import Support from "../../components/stoixeia/support";
import { Divider } from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";

const epikinonia = () => (
  <div className={styles.epikinonia}>
    <h3>ΣΤΟΙΧΕΙΑ ΕΠΙΚΟΙΝΩΝΙΑΣ</h3>
    <p className={styles.stoixeia}>
      <strong>ΤΗΛ. 2741 049258</strong>
    </p>
    <p className={styles.stoixeia}>
      <strong>Τ.Κ. 20003 ΙΣΘΜΙΑ</strong>
    </p>
    <p className={styles.stoixeia}>
      <strong>Email: oagioscharalampos@gmail.com</strong>
    </p>
    <p style={{ fontSize: "24px" }}>
      <a
        href="https://www.facebook.com/%CE%95%CE%BE%CF%89%CF%81%CE%B1%CF%8A%CF%83%CF%84%CE%B9%CE%BA%CF%8C%CF%82-%CE%A0%CE%BF%CE%BB%CE%B9%CF%84%CE%B9%CF%83%CF%84%CE%B9%CE%BA%CF%8C%CF%82-%CE%A3%CF%8D%CE%BB%CE%BB%CE%BF%CE%B3%CE%BF%CF%82-%CE%9F-%CE%86%CE%B3%CE%B9%CE%BF%CF%82-%CE%A7%CE%B1%CF%81%CE%AC%CE%BB%CE%B1%CE%BC%CF%80%CE%BF%CF%82-103212898174544"
        rel="noopener noreferrer"
        target="_blank"
      >
        <FacebookIcon /> ΣΕΛΙΔΑ Facebook
      </a>
    </p>
    <p style={{ fontSize: "24px" }}>
      <a
        href="https://www.instagram.com/agcharalampos/"
        rel="noopener noreferrer"
        target="_blank"
      >
        <InstagramIcon /> ΣΕΛΙΔΑ Instagram
      </a>
    </p>
    <Divider style={{ marginBottom: "2em" }} />
    <Support />
  </div>
);

epikinonia.propTypes = {};

epikinonia.defaultProps = {};

export default epikinonia;
