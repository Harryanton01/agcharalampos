import React from 'react';
import PropTypes from 'prop-types';
import styles from './Action10.module.css';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import img1 from '../../../../images/skoup15.PNG';

const Action10 = () => (
  <div className={styles.Action10}>
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
              <p className={styles.details}>ΝΟΕΜΒΡΙΟΣ  2020</p>
            </div>
          </div>
          <div style={{paddingTop:'2em'}}></div>
          <div class="row">
            <div class="col">
              <h2>ΕΥΧΑΡΙΣΤΗΡΙΑ ΕΠΙΣΤΟΛΗ</h2>
              <p className={styles.content}>
              Ο πρόεδρος του συλλόγου μας κ. Κωνσταντίνος Λαιμός,  είχε την τιμή και την χαρά να συναντήσει τον κ. Δημήτρη Κανελλόπουλο, διευθυντή της Motor Oil, να συζητήσει μαζί του και να του παρουσιάσει το όραμά του συλλόγου μας, που δεν είναι άλλο από το  να αναπτύξει και να εκσυγχρονίσει τον οικισμό του Αγίου Χαραλάμπους Ισθμίων Κορινθίας, βελτιώνοντας τις συνθήκες ζωής των κατοίκων του. 
</p>
              <p className={styles.content}>Ο κ. Βαλμάς, μετά την μακράς διάρκειας συνομιλίας τους, κατανόησε  πλήρως την αποφασιστικότητα του συλλόγου μας να προσφέρει στους κατοίκους της περιοχής μας όσο το δυνατόν ποιοτικότερες συνθήκες ζωής, και αξιολογώντας τα έως τώρα αποτελέσματα του έργου μας, προχώρησε σε μία συγκλονιστική προσφορά!
  </p>
              <p className={styles.content} style={{color:'red'}}>ΔΩΡΕΑΝ ΚΑΡΤΑ ΥΓΕΙΑΣ 
για όλα τα Μέλη του Συλλόγου μας και τα εξαρτώμενα πρόσωπά τους 
στα Ιδιωτικά Νοσηλευτικά Ιδρύματα
 Metropolitan Hospital & Metropolitan General, 
που περιλαμβάνει αξιόλογες εκπτώσεις και μοναδικές προσφορές, καλύπτοντας όλο το φάσμα των ιατρικών επισκέψεων και εξετάσεων!

 </p>
 <p className={styles.content}>
 Γι’ αυτήν  την τεράστια κοινωνική προσφορά,  ο σύλλογός μας  
<span style={{color:'red'}}> κατατάσσει τα  Metropolitan Hospital & Metropolitan General στους 
ΑΣΗΜΕΝΙΟΥΣ ΧΟΡΗΓΟΥΣ ! </span>
 </p>

 <p className={styles.content}>Ο πρόεδρός μας και το Δ.Σ. του συλλόγου μας, 
εκπροσωπώντας  τους κατοίκους της περιοχής μας, 
Ευχαριστούν Θερμά. 

<span style={{color:'red'}}> Τα Metropolitan Hospital & Metropolitan General, </span>
και  ειδικότερα τον εκπρόσωπό τους<span style={{color:'red'}}> κ. Δημήτρη Βαλμά,  </span>
για την ευγενική προσφορά, την αμέριστη υποστήριξη,  
και την αναγνώριση της προσπάθειας που καταβάλουμε, δείχνοντας έμπρακτα την κοινωνική τους ευαισθησία για τον κοινό μας πλέον στόχο!

 </p>
 <p style={{textAlign: 'left'}}>
Για το Δ.Σ.
<br />
Ο πρόεδρος 
<br />
Κωνσταντίνος Λαιμός
</p>
          
            </div>
          </div>
        </div>
        
      </CardContent>
    </Card>
  </div>
);

Action10.propTypes = {};

Action10.defaultProps = {};

export default Action10;