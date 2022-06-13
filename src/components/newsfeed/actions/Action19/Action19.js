import React from 'react';
import PropTypes from 'prop-types';
import styles from './Action19.module.css';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import img1 from '../../../../images/action19.PNG';

const Action19 = () => (
  <div className={styles.Action19}>
    <Card>
      <CardContent>
        <div class="container">
          <div style={{paddingTop:'2em'}}></div>
          <div class="row">
            <div class="col">
        
              <a href="https://www.loutrakiblog.gr/2021/04/22/pascha-agios-charalampos-kalamaki/"><img src={img1} alt="" className={styles.img} style={{maxWidth:1000, height:1000}}/></a>
          
            </div>
          </div>
        </div>
        
      </CardContent>
    </Card>
  </div>
);

Action19.propTypes = {};

Action19.defaultProps = {};

export default Action19;