import React from "react";
import PropTypes from "prop-types";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import img1 from "../../../../images/article16.PNG";
const Article16 = () => (
  <div>
    <Card>
      <CardContent>
        <img
          src={img1}
          alt="skoupidia"
          style={{ maxWidth: "100%", height: "100%" }}
        />
        <br />
        <a href="https://korinthostv.gr/2021/11/27/%ce%bf-1%ce%bf%cf%82-%ce%b5%ce%be%cf%89%cf%81%ce%b1%cf%8a%cf%83%cf%84%ce%b9%ce%ba%cf%8c%cf%82-%cf%80%ce%bf%ce%bb%ce%b9%cf%84%ce%b9%cf%83%cf%84%ce%b9%ce%ba%cf%8c%cf%82-%cf%83%cf%8d%ce%bb%ce%bb%ce%bf/">
          ΔΙΑΒΑΣΤΕ ΠΕΡΙΣΣΟΤΕΡΑ...
        </a>
      </CardContent>
    </Card>
  </div>
);

Article16.propTypes = {};

Article16.defaultProps = {};

export default Article16;
