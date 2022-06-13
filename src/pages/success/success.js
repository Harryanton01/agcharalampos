import React from 'react';
import PropTypes from 'prop-types';
import styles from './success.module.css';
import successimg from '../../images/success.png'

const success = () => (
  <div className={styles.success}>
    <img src = {successimg} alt="επιτυχία" style={{paddingTop:'2em', maxWidth:'30%'}}/>
    <h2>Σας ευχαριστούμε για την υποβολή της αίτησής σας. Θα ενημερωθείτε για την εξέλιξή της μέσω του email σας ή τηλεφωνικά.</h2>
  </div>
);

success.propTypes = {};

success.defaultProps = {};

export default success;
