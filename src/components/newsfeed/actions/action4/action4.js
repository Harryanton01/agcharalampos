import React from 'react';
import PropTypes from 'prop-types';
import styles from './action4.module.css';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import img1 from '../../../../images/skoup9.PNG';

const action4 = () => (
  <div className={styles.action4}>
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
              <p className={styles.details}>Παρασκευή 2 & Σάββατο 3 Οκτωβρίου 2020</p>
            </div>
          </div>
          <div style={{paddingTop:'2em'}}></div>
          <div class="row">
            <div class="col">
              <h2 style={{color:'green', fontWeight:'bold'}}>ΕΘΕΛΟΝΤΙΚΗ ΔΡΑΣΗ</h2>
              <h2 style={{color:'green', fontStyle:'italic'}}>Μέρος 4</h2>
              <p className={styles.content}>Καθαρίστηκε μια ακόμη  «παράνομη χωματερή» της περιοχής μας που  βρισκόταν επί της οδού Μεγάλου Αλεξάνδρου πριν τη γέφυρα.</p>
              <p className={styles.content}>Για τον καθαρισμό των συσσωρευμένων  μη- οικιακών απορριμμάτων, όχι μόνο της «χωματερής» αλλά και  εκατέρωθεν της οδού, χρειάστηκαν  περίπου 4 ώρες δουλειάς από 15 συνολικά εθελοντές! Έτσι, διαπιστώσαμε και στην πράξη, ότι όσο περισσότεροι είμαστε τόσο πιο γρήγορα τελειώνουμε! </p>
              <p className={styles.content}>Η βοήθεια του Δήμου πάντα απαραίτητη και καθοριστική! Ο πρώτος καθαρισμός των βουνών από μη-οικιακά απορρίμματα και κλαδιά έγινε κι εδώ από την μπουλντόζα του Δήμου και στη συνέχεια οι εθελοντές μας ολοκλήρωσαν τον καθαρισμό του χώρου. </p>
              <p className={styles.content}>Ας ελπίσουμε ότι οι περίοικοι αλλά και όσοι συνήθιζαν να απορρίπτουν εκεί κάθε είδους μη-οικιακών απορριμμάτων, να σεβαστούν τον κόπο της Εθελοντικής Ομάδας Δράσης και να διατηρήσουν το χώρο καθαρό. Άλλωστε διατρέχουν μεγάλο να επιβληθούν πρόστιμα σε όσους συλληφθούν να απορρίπτουν. </p>
              <p className={styles.content}>Συμμετέχοντες :	Αβραμίδου Ελευθερία, Βακιρτζής Χρόνης, Βεζίρης Δημήτρης, Λαιμός Κωνσταντίνος, Λεμονής Σπύρος, Λίτσα Ρούλα, Μπαναγκής Βασίλης, Νάκου Κατερίνα, Ξυγκάκη Αναστασία, Πανταζοπούλου Γιώτα, Ρυμήκη Βούλα, ο Δημήτρης και οι ανώνυμοι ήρωες Γ., Ε., και Μ. </p>

              <img src={img1} alt="skoupidia" className={styles.img} style={{maxWidth:1000, height:700}}/>
            </div>
          </div>
        </div>
        
      </CardContent>
    </Card>
  </div>
);

action4.propTypes = {};

action4.defaultProps = {};

export default action4;