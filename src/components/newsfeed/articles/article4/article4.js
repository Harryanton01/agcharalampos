import React from 'react';
import PropTypes from 'prop-types';
import styles from './article4.module.css';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const article4 = () => (
  <div className={styles.article4}>
    <Card>
      <CardContent>
        <div class="container">
          <div class="row">
            <div class="col" style={{textAlign:'left'}}>
              <p className={styles.details}><strong>ΠΟΛΙΤΙΣΤΙΚΟΣ ΕΞΩΡΑΪΣΤΙΚΟΣ ΣΥΛΛΟΓΟΣ</strong></p>
              <p className={styles.details}><strong>«Ο ΑΓΙΟΣ ΧΑΡΑΛΑΜΠΟΣ»</strong></p>
              <p className={styles.details}><strong>ΚΑΛΑΜΑΚΙ- ΚΟΡΙΝΘΙΑΣ</strong></p>
              <p className={styles.details}>Τ.Κ. 20003 ΙΣΘΜΙΑ - ΤΗΛ. 2741 049258</p>
              <p className={styles.details}>Site: <a href="https://www.agcharalampos.gr">www.agcharalampos.gr</a></p>
              <p className={styles.details}>email: <a href = "mailto: oagioscharalampos@gmail.com">oagioscharalampos@gmail.com</a></p>
              <p className={styles.details}>Facebook: <strong><a href="https://www.facebook.com/%CE%95%CE%BE%CF%89%CF%81%CE%B1%CF%8A%CF%83%CF%84%CE%B9%CE%BA%CF%8C%CF%82-%CE%A0%CE%BF%CE%BB%CE%B9%CF%84%CE%B9%CF%83%CF%84%CE%B9%CE%BA%CF%8C%CF%82-%CE%A3%CF%8D%CE%BB%CE%BB%CE%BF%CE%B3%CE%BF%CF%82-%CE%9F-%CE%86%CE%B3%CE%B9%CE%BF%CF%82-%CE%A7%CE%B1%CF%81%CE%AC%CE%BB%CE%B1%CE%BC%CF%80%CE%BF%CF%82-103212898174544">ΕΞΩΡΑΪΣΤΙΚΟΣ ΠΟΛΙΤΙΣΤΙΚΟΣ ΣΥΛΛΟΓΟΣ ΑΓΙΟΣ ΧΑΡΑΛΑΜΠΟΣ</a></strong></p>
              
            </div>
          </div>
          <div style={{paddingTop:'2em'}}></div>
          <div class="row">
            <div class="col">
              <h2>ΕΥΧΑΡΙΣΤΗΡΙΑ ΕΠΙΣΤΟΛΗ</h2>
              <p className={styles.content}>Ήταν ιδιαίτερη χαρά για όλους εμάς, κατοίκους αλλά και επισκέπτες της περιοχής, η εξεύρεση και υλοποίηση μεθόδων επικοινωνίας μεταξύ μας, χρησιμοποιώντας την τεχνολογία και τα μέσα κοινωνικής δικτύωσης.</p>
              <p className={styles.content}>Έτσι, εκσυγχρονίζοντας το σύλλογό μας, προσφέρουμε σε όλους τη δυνατότητα άμεσης και ουσιαστικής επαφής.</p>
              <p className={styles.content}>Σε αυτή μας την προσπάθεια, υπήρξαν συμπολίτες μας αλλά και φίλοι της περιοχής μας που προσφέρθηκαν να βοηθήσουν αφιλοκερδώς !</p>
              <p className={styles.content}>Θα θέλαμε λοιπόν, να εκφράσουμε τις θερμές μας ευχαριστίες στην οικογένεια Μιχαήλ Αντωνιάδη για την εθελοντική συμμετοχή τους στην κατασκευή της ιστοσελίδας του συλλόγου μας.</p>
              <p className={styles.content}>Ιδιαίτερες ευχαριστίες στον κο Χάρη Αντωνιάδη που εκτός από την προσφορά των  πολύτιμων γνώσεων του,  συνεχίζει ακούραστα την υποστήριξή και τη συνεχή βελτίωση της .</p>
              <p className={styles.content}>Επίσης, ένα μεγάλο ευχαριστώ στην κα Αλεξάνδρα Κέμου που μας παραχώρησε την τεχνογνωσία και την υποστήριξη για την ηλεκτρονική καταγραφή των μελών του συλλόγου μας αλλά και σε όλους όσους ανέλαβαν την δημιουργία του Facebook και συνεχίζουν την ενημέρωσή του .</p>
              <p className={styles.content}>Όμως θα θέλαμε να ευχαριστήσουμε και όλους εσάς, που αγκαλιάσατε τις ενέργειές μας και μας υποστηρίζετε με τις απόψεις σας και τις προτάσεις σας, με αποτέλεσμα συνεχώς να βελτιωνόμαστε .</p>
<p><strong>Σ’ αυτή μας την προσπάθεια δεν περισσεύει κανείς!  Είμαστε όλοι μαζί , είμαστε Δυνατοί !</strong></p>
            </div>
          </div>
        </div>
        
      </CardContent>
    </Card>
  </div>
);

article4.propTypes = {};

article4.defaultProps = {};

export default article4;
