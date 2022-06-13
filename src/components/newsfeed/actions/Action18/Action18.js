import React from 'react';
import PropTypes from 'prop-types';
import styles from './Action18.module.css';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import img1 from '../../../../images/action18.PNG';

const Action18 = () => (
  <div className={styles.Action18}>
    <Card>
      <CardContent>
        <div class="container">
          <div style={{paddingTop:'2em'}}></div>
          <div class="row">
            <div class="col">
        
              <a href="https://korinthostv.gr/2021/04/22/%CE%B5%CF%85%CF%87%CE%B1%CF%81%CE%B9%CF%83%CF%84%CE%AF%CE%B5%CF%82-%CF%84%CE%BF%CF%85-%CE%B5%CE%BE%CF%89%CF%81%CE%B1%CF%8A%CF%83%CF%84%CE%B9%CE%BA%CE%BF%CF%8D-%CF%80%CE%BF%CE%BB%CE%B9%CF%84%CE%B9/?fbclid=IwAR3kOjB_5nEosDmG2vjtnfmmffqFKMYd3LS2cS5GufScpM4Pgq9tTaTUGAc "><img src={img1} alt="" className={styles.img} style={{maxWidth:1000, height:1000}}/></a>
          
            </div>
          </div>
        </div>
        
      </CardContent>
    </Card>
  </div>
);

Action18.propTypes = {};

Action18.defaultProps = {};

export default Action18;