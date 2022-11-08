import React from "react";
import styles from "./Action20.module.css";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import img1 from "../../../../images/action20a.PNG";
import img2 from "../../../../images/action20b.PNG";

const Action20 = () => (
  <div className={styles.Action20}>
    <Card>
      <CardContent>
        <div class="container">
          <div style={{ paddingTop: "2em" }}></div>
          <div class="row">
            <div class="col">
              <img
                src={img1}
                alt=""
                className={styles.img}
                style={{ maxWidth: 1000, height: 1000 }}
              />
              <img
                src={img2}
                alt=""
                className={styles.img}
                style={{ maxWidth: 1000, height: 1000 }}
              />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  </div>
);

Action20.propTypes = {};

Action20.defaultProps = {};

export default Action20;
