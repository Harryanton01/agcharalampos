import React from 'react';
import PropTypes from 'prop-types';
import styles from './stoixeia.module.css';
import User from './users';

const stoixeia = () => (
  <div className={styles.stoixeia}>
    <User />
  </div>
);

stoixeia.propTypes = {};

stoixeia.defaultProps = {};

export default stoixeia;
