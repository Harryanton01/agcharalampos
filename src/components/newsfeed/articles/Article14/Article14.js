import React from 'react';
import PropTypes from 'prop-types';
import styles from './Article14.module.css';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import img1 from '../../../../images/eortasmos.PNG';
const Article14 = () => (
  <div className={styles.Article14}>
    Article14 Component

    <Card>
      <CardContent>
      <img src={img1} alt="skoupidia" className={styles.img} style={{maxWidth:'100%', height:'100%'}}/>
      <br />
      </CardContent>
    </Card>
  </div>
);

Article14.propTypes = {};

Article14.defaultProps = {};

export default Article14;
