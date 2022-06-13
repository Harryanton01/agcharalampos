import React from 'react';
import PropTypes from 'prop-types';
import styles from './article1.module.css';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const article1 = () => (
  <div className={styles.article1}>
     <Card>
      <CardContent>
        <div class="container">
          <div class="row">
            <div class="col-md-9 col-8" style={{textAlign:'left'}}>
              <p className={styles.details}><strong>ΠΟΛΙΤΙΣΤΙΚΟΣ ΕΞΩΡΑΪΣΤΙΚΟΣ ΣΥΛΛΟΓΟΣ</strong></p>
              <p className={styles.details}><strong>«Ο ΑΓΙΟΣ ΧΑΡΑΛΑΜΠΟΣ»</strong></p>
              <p className={styles.details}><strong>ΚΑΛΑΜΑΚΙ- ΚΟΡΙΝΘΙΑΣ</strong></p>
              <p className={styles.details}>ΤΗΛ. 2741 049258</p>
              <p className={styles.details}>Τ.Θ. 41</p>
              <p className={styles.details}>Τ.Κ. 20003 ΙΣΘΜΙΑ</p>
            </div>
            <div class="col-md-3 col-4">
              19/08/2020
            </div>
          </div>
          <div class="row">
            <div class="col">
              <h2>ΕΝΗΜΕΡΩΣΗ</h2>
              <p className={styles.content}>Σας γνωστοποιούμε πως σύμφωνα με το  καταστατικό του συλλόγου μας, την Κυριακή 16 Αυγούστου του 2020 πραγματοποιήθηκαν οι αρχαιρεσίες για την εκλογή και ανάδειξη Νέου ΔΣ, η διαδικασία ολοκληρώθηκε το απόγευμα της ίδιας ημέρας. </p>
              <p className={styles.content}>Ευχαριστούμε θερμά όλους όσους συμμετείχαν και συνετέλεσαν  στην ομαλή διεξαγωγή της εκλογικής διαδικασίας και όλους  όσους μας εμπιστεύτηκαν με την ψήφο τους και μας έδωσαν τη δυνατότητα να  ολοκληρώσουμε τη διαδικασία επιτυχώς. Η στήριξη σας και η ενεργή συμμετοχή σας είναι ανεκτίμητη!</p>
              <p className={styles.content}>Αλλά και όλους όσους είναι μέλη του συλλόγου μας αλλά δεν κατάφεραν να παρευρεθούν στην εκλογική διαδικασία και όλους όσους δεν  είχαν την δυνατότητα έως τώρα να γίνουν μέλη του συλλόγου μας , <strong>σας προσκαλούμε και σας ζητούμε να συμμετέχετε εφ’ εξής ενεργά , έτσι ώστε να αποκτήσουμε Δύναμη, Φωνή και Παρουσία</strong>  σαν σύλλογος και σαν κοινωνία, πράγμα αναγκαίο και απολύτως απαραίτητο  για τις προσπάθειες που θα κάνουμε, για την ανάδειξη και την επίλυση, των προβλημάτων που αντιμετωπίζουμε και που ολοένα και περισσότερο γίνονται δυσκολότερα και εντονότερα λόγο των πρωτόγνωρων συνθηκών που όλοι βιώνουμε αλλά κυρίως  λόγο της ιδιομορφίας και της μονιμότητας μας στην περιοχής μας. </p>
              <p className={styles.content}>Εμείς από την πλευρά μας, θα φροντίσουμε έτσι ώστε να ενημερώνεστε σε τακτά χρονικά διαστήματα για τις εξελίξεις των προσπαθειών μας αλλά και για δράσεις ή προσκλήσεις που θα προγραμματίσουμε με σκοπό όχι μόνο την ενημέρωση, αλλά και την ενεργοποίηση όλων μας.  </p>
              <p className={styles.justCenter}><strong>Σ’ αυτή μας την προσπάθεια δεν περισσεύει κανείς!  Είμαστε όλοι μαζί , είμαστε Δυνατοί !</strong></p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-4">
              <p><strong>Ο ΠΡΟΕΔΡΟΣ</strong></p>
              <p>Κωνσταντίνος Λαιμός</p>
            </div>
            <div class="col-md-4"></div>
            <div class="col-md-4">
              <p><strong>Η ΓΡΑΜΜΑΤΕΑΣ</strong></p>
              <p>Ιωάννα  Κασσιμάτη</p>
            </div>
          </div>
        </div>
        
      </CardContent>
    </Card>
  </div>
);

article1.propTypes = {};

article1.defaultProps = {};

export default article1;
