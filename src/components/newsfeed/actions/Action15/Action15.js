import React from 'react';
import PropTypes from 'prop-types';
import styles from './Action15.module.css';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import img1 from '../../../../images/ktv.PNG';

const action15 = () => (
  <div className={styles.action15}>
    <Card>
      <CardContent>
        <div class="container">
          <div style={{paddingTop:'2em'}}></div>
          <div class="row">
            <div class="col">
        
              <img src={img1} alt="skoupidia" className={styles.img} style={{maxWidth:1000, height:1000}}/>
              <a href="https://korinthostv.gr/2020/11/25/%ce%b5%cf%85%cf%87%ce%b1%cf%81%ce%b9%cf%83%cf%84%ce%bf%cf%8d%ce%bd-%ce%b8%ce%b5%cf%81%ce%bc%ce%ac-%cf%84%ce%b7%ce%bd-%ce%b5%cf%84%ce%b1%ce%b9%cf%81%ce%b5%ce%af%ce%b1-motor-oil-%ce%b3%ce%b9%ce%b1/ ">https://korinthostv.gr/2020/11/25/%ce%b5%cf%85%cf%87%ce%b1%cf%81%ce%b9%cf%83%cf%84%ce%bf%cf%8d%ce%bd-%ce%b8%ce%b5%cf%81%ce%bc%ce%ac-%cf%84%ce%b7%ce%bd-%ce%b5%cf%84%ce%b1%ce%b9%cf%81%ce%b5%ce%af%ce%b1-motor-oil-%ce%b3%ce%b9%ce%b1/ </a>
            </div>
          </div>
        </div>
        
      </CardContent>
    </Card>
  </div>
);

action15.propTypes = {};

action15.defaultProps = {};

export default action15;