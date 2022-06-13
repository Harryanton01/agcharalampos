import React from 'react';
import PropTypes from 'prop-types';
import styles from './Article11.module.css';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import img1 from '../../../../images/apokries1.PNG';
const Article11 = () => (
  <div className={styles.Article11}>

    <Card>
      <CardContent>
      <img src={img1} alt="skoupidia" className={styles.img} style={{maxWidth:'100%', height:'100%'}}/>
      <br />
        <a href="https://korinthostv.gr/2021/03/01/%ce%b1%cf%80%ce%bf%ce%ba%cf%81%ce%b9%ce%b5%cf%83-2021-%cf%83%cf%84%ce%bf%ce%bd-%ce%b1%ce%b3%ce%b9%ce%bf-%cf%87%ce%b1%cf%81%ce%b1%ce%bb%ce%b1%ce%bc%cf%80%ce%bf-%ce%b5%ce%be%cf%89%cf%81%ce%b1%cf%8a/?fbclid=IwAR2kXYC2tBa8s5vWLvN0uG_fzb5PLUvkiUrBtH50rblFNIV_wgyELvpExeA ">Πατήστε εδώ για το άρθρο...</a>
      </CardContent>
    </Card>
  </div>
);

Article11.propTypes = {};

Article11.defaultProps = {};

export default Article11;
