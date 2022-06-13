import React from 'react';
import PropTypes from 'prop-types';
import styles from './volunteer2.module.css';
import img1 from '../../../../images/korinthostv.PNG';

const volunteer2 = () => (
  <div className={styles.volunteer2}>
    <img src={img1} alt="skoupidia" className={styles.img} style={{maxWidth:1000, height:700}}/>
    <a href="https://korinthostv.gr/2020/11/09/%ce%b5%ce%b8%ce%b5%ce%bb%ce%bf%ce%bd%cf%84%ce%b9%ce%ba%ce%ae-%ce%bf%ce%bc%ce%ac%ce%b4%ce%b1-%ce%b4%cf%81%ce%ac%cf%83%ce%b7%cf%82-%ce%ac%ce%b3%ce%b9%ce%bf%cf%82-%cf%87%ce%b1%cf%81%ce%ac%ce%bb/">https://korinthostv.gr/2020/11/09/%ce%b5%ce%b8%ce%b5%ce%bb%ce%bf%ce%bd%cf%84%ce%b9%ce%ba%ce%ae-%ce%bf%ce%bc%ce%ac%ce%b4%ce%b1-%ce%b4%cf%81%ce%ac%cf%83%ce%b7%cf%82-%ce%ac%ce%b3%ce%b9%ce%bf%cf%82-%cf%87%ce%b1%cf%81%ce%ac%ce%bb/</a>
  </div>
);

volunteer2.propTypes = {};

volunteer2.defaultProps = {};

export default volunteer2;
