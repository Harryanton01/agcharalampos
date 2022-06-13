import React from 'react';
import PropTypes from 'prop-types';
import styles from './stoixeia.module.css';
import Stoixeia from '../../components/stoixeia/stoixeia'

const stoixeia = () => (
  <div className={styles.stoixeia}>
    <Stoixeia />
  </div>
);

stoixeia.propTypes = {};

stoixeia.defaultProps = {};

export default stoixeia;
