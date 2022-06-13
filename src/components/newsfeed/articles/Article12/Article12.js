import React from 'react';
import PropTypes from 'prop-types';
import styles from './Article12.module.css';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import img1 from '../../../../images/apokries2.PNG';
const Article12 = () => (
  <div className={styles.Article12}>
    Article12 Component

    <Card>
      <CardContent>
      <img src={img1} alt="skoupidia" className={styles.img} style={{maxWidth:'100%', height:'100%'}}/>
      <br />
        <a href="https://www.loutrakiblog.gr/2021/03/01/kalamaki-korinthias-mia-ethelontiki-protovoylia-poy-axizei-sygcharitiria-foto/ ">Πατήστε εδώ για το άρθρο...</a>
      </CardContent>
    </Card>
  </div>
);

Article12.propTypes = {};

Article12.defaultProps = {};

export default Article12;
