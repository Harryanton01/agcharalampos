import React from 'react';
import PropTypes from 'prop-types';
import styles from './article6.module.css';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const article6 = () => (
  <div className={styles.article6}>
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
            </div>
          </div>
          <div style={{paddingTop:'2em'}}></div>
          <div class="row">
            <div class="col">
              <h2>ΠΡΟΣΚΛΗΣΗ ΣΥΣΤΑΣΗΣ</h2>
              <h2 style={{color:'green'}}>ΕΘΕΛΟΝΤΙΚΗΣ ΟΜΑΔΑΣ ΔΡΑΣΗΣ </h2>
              <p className={styles.content}>Το Δ.Σ. του συλλόγου μας αλλά και όσοι δουλεύουν στα παρασκήνια εθελοντικά και αφιλοκερδώς, καταβάλουμε καθημερινά και συνεχόμενα προσπάθειες, προκειμένου να αναδείξουμε και να επιλύσουμε όσο το δυνατόν, σημαντικά προβλήματα που αφορούν την περιοχή μας. </p>
              <p className={styles.content}>Έχουμε όλοι πάρει πολύ ζεστά το ρόλο μας και υποστηρίζοντας ο ένας τον άλλον κάνουμε μικρά αλλά σταθερά βήματα εμπρός !</p>
              <p className={styles.content} style={{textAlign:'center', fontWeight:'bold'}}>Δεν φτάνουμε όμως μόνο εμείς ! Θέλουμε τη συμπαράσταση όλων σας ! Όλων όσων μπορούν να προσφέρουν λίγο από το χρόνο τους ! </p>
              <p className={styles.content}>Υιοθετώντας το σύνθημα <strong>Είμαστε όλοι μαζί, είμαστε Δυνατοί</strong> , θα προσπαθήσουμε να αποδείξουμε με την Σύσταση μιας <span style={{color:'green', fontWeight:'bold'}}>Εθελοντικής Ομάδας Δράσης</span> , ότι έχουμε καλή διάθεση, έχουμε όραμα, έχουμε όρεξη και μπορούμε να δώσουμε στην περιοχή μας αυτό που της αξίζει! <u>Καθαρούς δρόμους, καθαρούς δημόσιους χώρους, καθαρές παραλίες !</u> </p>
              <p className={styles.content}>Ξεκινώντας από σήμερα και χωρίς να βάλουμε ημερομηνία λήξης, σας καλούμε να δηλώσετε συμμετοχή στην Ομάδα που θα συσταθεί και θα εμπλουτίζεται συνεχώς με νέα μέλη. </p>
              <p className={styles.content}>Επειδή ο χρόνος όλων μας είναι περιορισμένος και οι περισσότεροι από εμάς βρισκόμαστε στον Άγιο Χαράλαμπο κάποια Σαββατοκύριακα, κάποιες γιορτές κι αργίες ή μόνο το καλοκαίρι, οι δράσεις δεν θα είναι αυθαίρετες και με πρωτοβουλία ενός ατόμου. </p>
              <p className={styles.content}>Τα μέλη της ομάδας θα συνεννοούνται με το Σύλλογό μας αλλά και μεταξύ τους, για την ημέρα και ώρα που θα πραγματοποιείτε κάποια δράση και σε ποιο σημείο της περιοχής μας θα γίνεται. </p>
              <p className={styles.content}>Επίσης, η Δράση δεν θα πρέπει να υπερβαίνει σε χρόνο τη 1 ώρα, εκτός αν συνεννοηθούν τα μέλη της ομάδας διαφορετικά. Από τη στιγμή που θα μαζευτούν τουλάχιστον 5 άτομα, η Δράση θα θεωρείτε επίσημη και θα παρακινούμε και όλους τους υπόλοιπους κατοίκους με μήνυμα στο κινητό τους τηλέφωνο ή στο email τους, αλλά και με ανάρτηση στο site του συλλόγου μας και στο Facebook να πάρουν μέρος! Σε κάθε δράση θα συμμετέχουν όποιοι μπορούν !  </p>
              <p className={styles.content}>Για παράδειγμα, η δράση μπορεί να αφορά το βάψιμο κάποιου τοίχου και την αφαίρεση graffiti ή τον καθαρισμό ενός σημείου της περιοχής μας, διοργάνωση κάποιας εκδήλωσης κ.λ.π.  </p>
              <p className={styles.content}>Σας περιμένουμε όλους να δηλώσετε την συμμετοχή σας στο τηλέφωνο του συλλόγου μας, στο site μας επιλέγοντας την Φόρμα Επικοινωνίας ή στην ανάρτηση μας στο Facebook.  </p>
              <p className={styles.content} style={{textAlign:"center", marginBottom:0}}><strong><span style={{fontStyle:"italic", fontSize:"24px"}}>ΚΑΙ</span>   Σ’ αυτή μας την προσπάθεια δεν περισσεύει κανείς !</strong></p>
              <p className={styles.content} style={{textAlign:"center"}}><strong><span style={{fontStyle:"italic", fontSize:"24px"}}>ΜΟΝΟ ΑΝ</span>   Είμαστε όλοι μαζί, είμαστε Δυνατοί !</strong></p>
              <p style={{textAlign:"left"}}><strong>Το Δ.Σ.</strong></p>   
            </div>
          </div>
        </div>
        
      </CardContent>
    </Card>
  </div>
);

article6.propTypes = {};

article6.defaultProps = {};

export default article6;
