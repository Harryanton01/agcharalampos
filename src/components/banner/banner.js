import React from 'react';
import PropTypes from 'prop-types';
import styles from './banner.module.css';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';

const banner = () => (
  <div className={styles.banner}>
    <div class="container">
      <div class="row">
        <div class="col-6 col-md-6 ">
          <p className={styles.stoixeia}><strong>ΤΗΛ. </strong>2741 049258</p>
          <p className={styles.stoixeia}><strong>Τ.Κ. </strong>20003 ΙΣΘΜΙΑ</p>
          <p className={styles.stoixeia}><strong>Email: </strong>oagioscharalampos@gmail.com</p>
        </div>
        <div class="col-6 col-md-6 col-sm-6 d-flex justify-content-center text-center" >
        <a className={styles.logos} style={{color:'#00069c', marginTop:'40px', paddingLeft:'30px', paddingRight:'30px'}} href="https://www.facebook.com/%CE%95%CE%BE%CF%89%CF%81%CE%B1%CF%8A%CF%83%CF%84%CE%B9%CE%BA%CF%8C%CF%82-%CE%A0%CE%BF%CE%BB%CE%B9%CF%84%CE%B9%CF%83%CF%84%CE%B9%CE%BA%CF%8C%CF%82-%CE%A3%CF%8D%CE%BB%CE%BB%CE%BF%CE%B3%CE%BF%CF%82-%CE%9F-%CE%86%CE%B3%CE%B9%CE%BF%CF%82-%CE%A7%CE%B1%CF%81%CE%AC%CE%BB%CE%B1%CE%BC%CF%80%CE%BF%CF%82-103212898174544" rel="noopener noreferrer" target="_blank"><FacebookIcon className={styles.fb}/> </a>
        <a className={styles.logos} style={{color:'#00069c', marginTop:'40px', paddingLeft:'30px', paddingRight:'30px'}} href="https://www.instagram.com/agcharalampos/" rel="noopener noreferrer" target="_blank"><InstagramIcon className={styles.fb}/> </a>
        </div>
      </div>
    </div>
  </div>
);

banner.propTypes = {};

banner.defaultProps = {};

export default banner;
