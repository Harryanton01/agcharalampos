import React from 'react';
import PropTypes from 'prop-types';
import styles from './Article10.module.css';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import img1 from '../../../../images/article10.PNG';
const Article10 = () => (
  <div className={styles.Article10}>
    <Card>
      <CardContent>
      <img src={img1} alt="skoupidia" className={styles.img} style={{maxWidth:'100%', height:'100%'}}/>
      <br />
        <a href="https://korinthostv.gr/2020/12/15/%ce%b4%ce%b9%ce%b1%ce%bc%ce%b1%cf%81%cf%84%cf%85%cf%81%ce%af%ce%b1-%ce%ba%ce%b1%cf%84%ce%bf%ce%af%ce%ba%cf%89%ce%bd-%ce%b3%ce%b9%ce%b1-%cf%84%ce%bf-%ce%bb%ce%b9%ce%bc%ce%ac%ce%bd%ce%b9-%cf%83%cf%84/ ">Πατήστε εδώ για το άρθρο...</a>
      </CardContent>
    </Card>
  </div>
);

Article10.propTypes = {};

Article10.defaultProps = {};

export default Article10;
