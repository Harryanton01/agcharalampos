import React from "react";
import styles from "./Action16.module.css";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import img1 from "../../../../images/ktv2.PNG";

const action16 = () => (
  <div className={styles.action16}>
    <Card>
      <CardContent>
        <div class="container">
          <div style={{ paddingTop: "2em" }}></div>
          <div class="row">
            <div class="col">
              <img
                src={img1}
                alt="skoupidia"
                className={styles.img}
                style={{ maxWidth: 1000, height: 1000 }}
              />
              <a href="https://korinthostv.gr/2020/12/16/%ce%b4%cf%89%cf%81%ce%b5%ce%b1%ce%bd-%ce%ba%ce%b1%cf%81%cf%84%ce%b1-%cf%85%ce%b3%ce%b5%ce%b9%ce%b1%cf%83-%ce%b3%ce%b9%ce%b1-%cf%8c%ce%bb%ce%b1-%cf%84%ce%b1-%ce%bc%ce%ad%ce%bb%ce%b7-%cf%84%ce%bf%cf%85/">
                https://korinthostv.gr/2020/12/16/%ce%b4%cf%89%cf%81%ce%b5%ce%b1%ce%bd-%ce%ba%ce%b1%cf%81%cf%84%ce%b1-%cf%85%ce%b3%ce%b5%ce%b9%ce%b1%cf%83-%ce%b3%ce%b9%ce%b1-%cf%8c%ce%bb%ce%b1-%cf%84%ce%b1-%ce%bc%ce%ad%ce%bb%ce%b7-%cf%84%ce%bf%cf%85/{" "}
              </a>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  </div>
);

action16.propTypes = {};

action16.defaultProps = {};

export default action16;
