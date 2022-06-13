import React from 'react';
import PropTypes from 'prop-types';
import styles from './action3.module.css';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import img1 from '../../../../images/skoup8.PNG';

const action3 = () => (
  <div className={styles.action3}>
    <Card>
      <CardContent>
        <div class="container">
          <div class="row">
            <div class="col-8" style={{textAlign:'left'}}>
              <p className={styles.details}><strong>ΠΟΛΙΤΙΣΤΙΚΟΣ ΕΞΩΡΑΪΣΤΙΚΟΣ ΣΥΛΛΟΓΟΣ</strong></p>
              <p className={styles.details}><strong>«Ο ΑΓΙΟΣ ΧΑΡΑΛΑΜΠΟΣ»</strong></p>
              <p className={styles.details}><strong>ΚΑΛΑΜΑΚΙ- ΚΟΡΙΝΘΙΑΣ</strong></p>
              <p className={styles.details}>Τ.Κ. 20003 ΙΣΘΜΙΑ - ΤΗΛ. 2741 049258</p>
              <p className={styles.details}>Site: <a href="https://www.agcharalampos.gr">www.agcharalampos.gr</a></p>
              <p className={styles.details}>email: <a href = "mailto: oagioscharalampos@gmail.com">oagioscharalampos@gmail.com</a></p>
              <p className={styles.details}>Facebook: <strong><a href="https://www.facebook.com/%CE%95%CE%BE%CF%89%CF%81%CE%B1%CF%8A%CF%83%CF%84%CE%B9%CE%BA%CF%8C%CF%82-%CE%A0%CE%BF%CE%BB%CE%B9%CF%84%CE%B9%CF%83%CF%84%CE%B9%CE%BA%CF%8C%CF%82-%CE%A3%CF%8D%CE%BB%CE%BB%CE%BF%CE%B3%CE%BF%CF%82-%CE%9F-%CE%86%CE%B3%CE%B9%CE%BF%CF%82-%CE%A7%CE%B1%CF%81%CE%AC%CE%BB%CE%B1%CE%BC%CF%80%CE%BF%CF%82-103212898174544">ΕΞΩΡΑΪΣΤΙΚΟΣ ΠΟΛΙΤΙΣΤΙΚΟΣ ΣΥΛΛΟΓΟΣ ΑΓΙΟΣ ΧΑΡΑΛΑΜΠΟΣ</a></strong></p>
              <p className={styles.details}>Instagram: <strong><a href="https://www.instagram.com/agcharalampos/">agcharalampos</a></strong></p>

            </div>
            <div class="col-4">
              <p className={styles.details}>Πέμπτη 1 Οκτωβρίου 2020 έως Κυριακή 4 Οκτωβρίου 2020</p>
            </div>
          </div>
          <div style={{paddingTop:'2em'}}></div>
          <div class="row">
            <div class="col">
              <h2 style={{color:'green', fontWeight:'bold'}}>ΕΘΕΛΟΝΤΙΚΗ ΔΡΑΣΗ</h2>
              <h2 style={{color:'green', fontStyle:'italic'}}>Μέρος 3</h2>
              <p className={styles.content}>Η τρίτη  «παράνομη χωματερή» της περιοχής μας που καθαρίζεται και περιφράσσεται, βρίσκεται επί της οδού Αγάπης, και είναι ίσως η δεύτερη μεγαλύτερη της περιοχής μας!</p>
              <p className={styles.content}>Κι εδώ συσσωρευμένα και θαμμένα κάτω από το χώμα απορρίμματα χρόνων και περίπου 10 ώρες δουλειάς από 14 εθελοντές, που δούλεψαν με πάρα πολύ όρεξη και καθάρισαν όλη την οδό μέχρι την παιδική χαρά! </p>
              <p className={styles.content}>Η βοήθεια του Δήμου ήταν κι εδώ καθοριστική! Ο πρώτος καθαρισμός των βουνών από μη-οικιακά απορρίμματα και κλαδιά, έγινε από την μπουλντόζα του Δήμου και στη συνέχεια οι εθελοντές μας ολοκλήρωσαν τον καθαρισμό και την περίφραξη του χώρου, με την ελπίδα να μη δούμε ποτέ ξανά τέτοιες εικόνες!</p>
              <p className={styles.content}>Συμμετέχοντες :	Αβραμίδου Ελευθερία, Βακιρτζή Φωτεινή, Βακιρτζής Χρόνης, Γεροχριστοδούλου Βαρβάρα, Κέμος Νίκος, Λαιμός Κωνσταντίνος, Μπαναγκής Βασίλης, Μύριλλας Χρήστος, Νάκου Κατερίνα, Ξυγκάκη Αναστασία, Πανταζοπούλου Γιώτα, Παραστατίδης Γιώργος, Πυρομάλλη Άννα και Ρυμήκη Βούλα </p>

              <img src={img1} alt="skoupidia" className={styles.img} style={{maxWidth:1000, height:700}}/>
            </div>
          </div>
        </div>
        
      </CardContent>
    </Card>
  </div>
);

action3.propTypes = {};

action3.defaultProps = {};

export default action3;