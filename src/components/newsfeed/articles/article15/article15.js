import React from "react";
import PropTypes from "prop-types";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import img1 from "../../../../images/article15.PNG";
import img2 from "../../../../images/article15b.PNG";

const Article15 = () => (
  <div>
    <Card>
      <CardContent>
        <img
          src={img1}
          alt="skoupidia"
          style={{ maxWidth: "100%", height: "100%" }}
        />
        <br />
        <img
          src={img2}
          alt="skoupidia"
          style={{ maxWidth: "100%", height: "100%" }}
        />
        <br />
        <a href="https://korinthostv.gr/2021/09/04/%ce%b7-%ce%bc%ce%b5%cf%84%ce%b1%ce%bc%ce%bf%cf%81%cf%86%cf%89%cf%83%ce%b7-%cf%84%ce%b7%cf%83-%cf%80%ce%b1%cf%81%ce%b1%ce%bb%ce%b9%ce%b1%cf%83-%ce%b1%ce%b3%ce%b1%cf%80%ce%b7%cf%83-%cf%83%cf%84%ce%bf/?fbclid=IwAR0ex5Y9c8ebFAjOUX8uEiceb1JZAAq9MOADN5XyJMNMF6Wlf8eb4KhyR1k">
          ΔΙΑΒΑΣΤΕ ΠΕΡΙΣΣΟΤΕΡΑ...
        </a>
      </CardContent>
    </Card>
  </div>
);

Article15.propTypes = {};

Article15.defaultProps = {};

export default Article15;
