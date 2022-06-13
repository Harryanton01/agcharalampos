import React from 'react';
import PropTypes from 'prop-types';
import styles from './enimerosi.module.css';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Metropolitan from '../../images/metropolitan.PNG';

const enimerosi = () => (
  <div className={styles.article1}>
     <Card>
      <CardContent>
        <div class="container">
          <div class="row">
            <div class="col-md-6 col-6" style={{textAlign:'left'}}>
            <p className={styles.details}><strong>ΠΟΛΙΤΙΣΤΙΚΟΣ ΕΞΩΡΑΪΣΤΙΚΟΣ ΣΥΛΛΟΓΟΣ</strong></p>
              <p className={styles.details}><strong>«Ο ΑΓΙΟΣ ΧΑΡΑΛΑΜΠΟΣ»</strong></p>
              <p className={styles.details}><strong>ΚΑΛΑΜΑΚΙ- ΚΟΡΙΝΘΙΑΣ</strong></p>
              <p className={styles.details}>Τ.Κ. 20003 ΙΣΘΜΙΑ - ΤΗΛ. 2741 049258</p>
              <p className={styles.details}>Site: <a href="https://www.agcharalampos.gr">www.agcharalampos.gr</a></p>
              <p className={styles.details}>email: <a href = "mailto: oagioscharalampos@gmail.com">oagioscharalampos@gmail.com</a></p>
              <p className={styles.details}>Facebook: <strong><a href="https://www.facebook.com/%CE%95%CE%BE%CF%89%CF%81%CE%B1%CF%8A%CF%83%CF%84%CE%B9%CE%BA%CF%8C%CF%82-%CE%A0%CE%BF%CE%BB%CE%B9%CF%84%CE%B9%CF%83%CF%84%CE%B9%CE%BA%CF%8C%CF%82-%CE%A3%CF%8D%CE%BB%CE%BB%CE%BF%CE%B3%CE%BF%CF%82-%CE%9F-%CE%86%CE%B3%CE%B9%CE%BF%CF%82-%CE%A7%CE%B1%CF%81%CE%AC%CE%BB%CE%B1%CE%BC%CF%80%CE%BF%CF%82-103212898174544">ΕΞΩΡΑΪΣΤΙΚΟΣ ΠΟΛΙΤΙΣΤΙΚΟΣ ΣΥΛΛΟΓΟΣ ΑΓΙΟΣ ΧΑΡΑΛΑΜΠΟΣ</a></strong></p>
              <p className={styles.details}>Instagram: <strong><a href="https://www.instagram.com/agcharalampos/">agcharalampos</a></strong></p>

            </div>
            <div class="col-md-6 col-6">
              <img src={Metropolitan} alt="metropolitan"/>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <h2 style={{color: "#337cf2"}}>ΜΟΝΑΔΙΚΕΣ ΠΡΟΣΦΟΡΕΣ ΥΓΕΙΑΣ
ΓΙΑ ΤΑ ΜΕΛΗ ΤΟΥ ΣΥΛΛΟΓΟΥ ΜΑΣ
</h2>
              <p className={styles.content}>Το Δ.Σ. του συλλόγου μας είναι στην ευχάριστη θέση να σας ενημερώσει ότι σε συνεργασία με 
 </p>
              <p><strong>Metropolitan Hospital & Metropolitan General </strong></p>
              <p className={styles.content}>εξασφάλισε μοναδικά προνόμια, προσφορές και εκπτώσεις
για τους κατόχους της <span style={{color: "#337cf2"}}>Κάρτας Μέλους</span> του συλλόγου μας!
</p>
              <p className={styles.justCenter} style={{color: "#337cf2"}}> <strong>ΓΙΑ ΤΑ ΜΕΛΗ ΜΑΣ</strong></p>
              <p>Επικοινωνήστε μαζί μας για την επικαιροποίηση  των στοιχείων σας
προκειμένου να παραλάβετε την <span style={{color: 'red'}}></span>ΔΩΡΕΑΝ Κάρτα Υγείας σας
</p>
<p>Επίσης,</p>
              <p style={{color: "#337cf2"}}><strong>ΓΙΑ ΟΣΟΥΣ ΕΠΙΘΥΜΟΥΝ ΝΑ ΓΙΝΟΥΝ ΜΕΛΗ ΜΑΣ</strong></p>
              <p>
Εγγραφείτε σήμερα  στον σύλλογό μας και απολαύστε μοναδικές προσφορές και προνόμια!
</p>
              <p>Βρείτε στο site μας , στην ενότητα ΕΠΙΚΟΙΝΩΝΙΑ,  <a href="https://agcharalampos.gr/sign-up">την Αίτηση Εγγραφής Νέου μέλους</a> ή καλέστε μας για να προγραμματίσουμε ραντεβού  στα γραφεία του συλλόγου μας</p>
              <p style={{color: "#337cf2"}}><strong>ΓΙΑ ΤΟΥΣ ΕΠΑΓΓΕΛΜΑΤΙΕΣ ΠΟΥ ΕΠΙΘΥΜΟΥΝ ΝΑ ΠΡΟΣΦΕΡΟΥΝ
</strong></p>
<p>Εάν διατηρείτε κατάστημα ή επιχείρηση
κι επιθυμείτε να συμμετέχετε προσφέροντας εκπτώσεις ή άλλες παροχές,
συμπληρώστε την Φόρμα Επικοινωνίας που θα βρείτε στην ενότητα ΕΠΙΚΟΙΝΩΝΙΑ στο site μας και θα επικοινωνήσουμε μαζί σας.
</p>
<h2 style={{color: "#337cf2"}}>Ελάτε μαζί μας και βγείτε κερδισμένοι !
</h2>
            </div>
          </div>
          <div class="row">
            <div class="col-md-4">
              <p><strong>Ο ΠΡΟΕΔΡΟΣ</strong></p>
              <p>Κωνσταντίνος Λαιμός</p>
            </div>
            <div class="col-md-4"></div>
            <div class="col-md-4">
          
            </div>
          </div>
        </div>
        
      </CardContent>
    </Card>
  </div>
);

enimerosi.propTypes = {};

enimerosi.defaultProps = {};

export default enimerosi;
