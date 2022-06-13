import React from 'react';
import PropTypes from 'prop-types';
import styles from './nea.module.css';
import Newsfeed from '../../components/newsfeed/newsfeed';

const nea = () => (
  <div className={styles.nea}>
    <Newsfeed />
  </div>
);

nea.propTypes = {};

nea.defaultProps = {};

export default nea;
