import React from 'react';
import PropTypes from 'prop-types';
import styles from './xorigos.module.css';
import xorigoi from '../../images/xorigoi.jpg';

const xorigos = () => (
  <div className={styles.xorigos}>
    <img src={xorigoi} alt="sponsors" />
  </div>
);

xorigos.propTypes = {};

xorigos.defaultProps = {};

export default xorigos;
