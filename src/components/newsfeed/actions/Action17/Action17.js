import React from 'react';
import PropTypes from 'prop-types';
import styles from './Action17.module.css';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import img1 from '../../../../images/action17.PNG';

const Action17 = () => (
  <div className={styles.Action17}>
    <Card>
      <CardContent>
        <div class="container">
          <div style={{paddingTop:'2em'}}></div>
          <div class="row">
            <div class="col">
        
              <img src={img1} alt="" className={styles.img} style={{maxWidth:1000, height:1000}}/>
          
            </div>
          </div>
        </div>
        
      </CardContent>
    </Card>
  </div>
);

Action17.propTypes = {};

Action17.defaultProps = {};

export default Action17;