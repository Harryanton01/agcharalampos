import React from 'react';
import PropTypes from 'prop-types';
import styles from './selides.module.css';

const selides = () => (
  <div className={styles.selides}>
    <h2>ΧΡΗΣΙΜΟΙ ΙΣΤΟΤΟΠΟΙ</h2>
    <p>  <a rel="noopener noreferrer" href="http://new.loutraki-agioitheodoroi.gr/" target="_blank">Δήμος Λουτρακίου – Περαχώρας – Αγ. Θεοδώρων</a></p>
    <p>  <a rel="noopener noreferrer" href="https://www.wwf.gr/" target="_blank">WWF Ελλάς</a></p>
  </div>
);

selides.propTypes = {};

selides.defaultProps = {};

export default selides;
