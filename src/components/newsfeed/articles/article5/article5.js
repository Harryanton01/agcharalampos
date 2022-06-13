import React from 'react';
import PropTypes from 'prop-types';
import styles from './article5.module.css';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import img1 from '../../../../images/skoup1.jpg';
import img2 from '../../../../images/skoup2.jpg';
import img3 from '../../../../images/skoup3.jpg';
import img4 from '../../../../images/skoup4.jpg';
import img5 from '../../../../images/skoup5.jpg';

const article5 = () => (
  <div className={styles.article5}>
    <Card>
      <CardContent>
        <div class="container">
          <div class="row">
            <div class="col-md-9 col-8" style={{textAlign:'left'}}>
              <p className={styles.details}><strong>ΠΟΛΙΤΙΣΤΙΚΟΣ ΕΞΩΡΑΪΣΤΙΚΟΣ ΣΥΛΛΟΓΟΣ</strong></p>
              <p className={styles.details}><strong>«Ο ΑΓΙΟΣ ΧΑΡΑΛΑΜΠΟΣ»</strong></p>
              <p className={styles.details}><strong>ΚΑΛΑΜΑΚΙ- ΚΟΡΙΝΘΙΑΣ</strong></p>
              <p className={styles.details}>Τ.Κ. 20003 ΙΣΘΜΙΑ - ΤΗΛ. 2741 049258</p>
              <p className={styles.details}>Site: <a href="https://www.agcharalampos.gr">www.agcharalampos.gr</a></p>
            </div>
            <div class="col-md-3 col-4">
              <p className={styles.details}>Καλαμάκι 20/09/2020</p>
            </div>
          </div>
          <div style={{paddingTop:'2em'}}></div>
          <div class="row">
            <div class="col">
              <h2>Α Ν Α Κ Ο Ι Ν Ω Σ Η</h2>
              <p className={styles.content}>Αγαπητοί κάτοικοι της περιοχής μας, </p>
              <p className={styles.content} style={{textAlign:"center"}}><strong>Ο όγκος των σκουπιδιών, οικιακών και μη, αυξάνεται ανεξέλεγκτα!</strong></p>
              <p className={styles.content}>Ειδικά τα ΜΗ οικιακά απορρίμματα που συσσωρεύονται παντού δημιουργούν εστίες μόλυνσης! (μπάζα, χόρτα, μεγάλα αντικείμενα κλπ.) Υπάρχουν διαμαρτυρίες ότι εθεάθησαν τρωκτικά και κατσαρίδες γύρω τους. Τελικά, αυτά θα καταλήξουν στις αυλές μας και στα σπίτια μας!</p>
              <p className={styles.content}>Δυστυχώς, στο πρόβλημα αυτό συντελούμε όλοι μας! Είτε οι ίδιοι καθαρίζοντας τα οικόπεδά μας, είτε αναθέτοντας τον καθαρισμό σε κάποιον τρίτο. Κι έπειτα, τα «ξεφορτωνόμαστε» απορρίπτοντάς τα σε κοινόχρηστους χώρους, παραπλεύρως οδών, έξω από κάδους οικιακών απορριμμάτων, αδιαφορώντας για την συσσώρευση και <strong>δημιουργώντας τελικά πρόβλημα σε όλους μας!</strong> Έχουν γίνει επανειλημμένα παρατηρήσεις και είναι γνωστοί όχι μόνο αυτοί που έχουν εντοπιστεί να απορρίπτουν, αλλά και άλλοι που γνωρίζουμε όλοι μας ότι ασχολούνται με καθαρισμούς οικοπέδων. Απορρίπτουν ανεξέλεγκτα εκτός κάδων!</p>
              <p className={styles.content} style={{textAlign:"center"}}><strong>Έτσι, τα σκουπίδια του ενός γίνονται σκουπίδια όλων μας!</strong></p>
              <p className={styles.content}>Η συνεχιζόμενη και χωρίς όριο συσσώρευση <strong>δημιουργεί πρόβλημα στην αποκομιδή!</strong>  Δεν προλαβαίνουμε να ειδοποιήσουμε σαν Σύλλογος το Δήμο για να καθαριστεί ένας χώρος και την επόμενη ημέρα ξεκινάει και πάλι η συσσώρευση τους!</p>
              <p className={styles.content} style={{textAlign:"center", marginBottom:0}}><strong>Από το Δήμο το δήλωσαν ξεκάθαρα!</strong></p>
              <p className={styles.content} style={{textAlign:"center"}}><strong>Θα σταματήσει η αποκομιδή και θα καταλογίζονται πρόστιμα στους παραβάτες !</strong></p>

              
              <p className={styles.content}><strong>Δημιουργεί πρόβλημα στους περιοίκους!</strong> Δεν φταίνε οι γείτονες μου για τον παλιό καναπέ που θέλησα να ξεφορτωθώ! Ούτε για τα μπάζα που έβγαλα από το γκρέμισμα των παρτεριών μου! Ούτε για τις παλιές μοκέτες που αντικατέστησα! (Καταγγελίες για πραγματικά περιστατικά!!) Έχουμε καταντήσει μια τεράστια χωματερή και είναι ντροπή για τον οικισμό μας να παρουσιάζει τέτοια εικόνα στους δημόσιους χώρους του, όταν τα σπίτια μας και τα οικόπεδά μας είναι καθαρά!</p>
              <p className={styles.content} style={{textAlign:"center", marginBottom:0}}><strong>Είναι γνωστό ότι απαγορεύεται από τη νομοθεσία η ρίψη ΜΗ οικιακών απορριμμάτων σε όλους τους δημόσιους χώρους! ΔΕΝ μας αξίζει αυτή η εικόνα !</strong></p>
              <p className={styles.content} style={{textAlign:"center"}}><strong>Ότι δεν μπαίνει μέσα στον κάδο, ΔΕΝ πρέπει  να απορρίπτετε εκτός !</strong></p>
              <p className={styles.content}><strong>Ειδοποιήστε και συνεννοηθείτε</strong> με τους γείτονές σας για τον από κοινού καθαρισμό των οικοπέδων σας και  ενοικιάσετε μαζί έναν μεγάλο κάδο έτσι ώστε να μοιραστείτε τα έξοδα. <strong>Ειδοποιήστε</strong> το σύλλογο να σας υποδείξει αν υπάρχει και που, ή πότε θα υπάρξει διαθέσιμος μεγάλος κάδος μη οικιακών απορριμμάτων, (Τηλ: 2741 049258) ή να δηλώσουμε για εσάς την αποκομιδή τους στο NOVOVILLE</p>
              <p className={styles.content}>Ο Σύλλογός μας ήδη αναζητάει λύσεις και κάνει ενέργειες για τον πολλαπλασιασμό των μεγάλων κάδων για την εξυπηρέτηση όλων μας αλλά και την περίφραξη σημείων που κακώς θεωρούνται οι «χωματερές» της περιοχής μας. Και όπως καταλαβαίνετε όλοι, το κόστος είναι πολύ μεγάλο! Το μικρό μας απόθεμα και τα 20 ευρώ που δίνουμε, όσοι μπορούμε, ως συνδρομή δεν θα επαρκούν για πολύ! </p>
              <p className={styles.content}>Ας κάνουμε μια προσπάθεια όλοι μαζί να εξαλείψουμε την αυθαίρετη απόρριψη απορριμμάτων! Γίνεται κι εσείς ένας από αυτούς που <strong>ΔΕΝ</strong> θα απορρίψουν και που θα κάνουν παράκληση σε όσους δουν να συνεχίζουν να  απορρίπτουν, να <strong>σταματήσουν</strong> να το κάνουν!</p>
              <p className={styles.content} style={{textAlign:"center", marginBottom:0}}><strong><span style={{fontStyle:"italic", fontSize:"24px"}}>ΚΑΙ</span>   Σ’ αυτή μας την προσπάθεια δεν περισσεύει κανείς !</strong></p>
              <p className={styles.content} style={{textAlign:"center"}}><strong><span style={{fontStyle:"italic", fontSize:"24px"}}>ΜΟΝΟ ΑΝ</span>   Είμαστε όλοι μαζί, είμαστε Δυνατοί !</strong></p>
              <p style={{textAlign:"left"}}><strong>Το Δ.Σ.</strong></p>
            </div>
          </div>
          <div class="row" style={{paddingBottom:"2em"}}>
            <div class="col-md-6">
              <img src={img1} alt="skoupidia" className={styles.img} style={{maxWidth:400, height:250}}/>
            </div>
            <div class="col-md-6">
              <img src={img2} alt="skoupidia" className={styles.img} style={{maxWidth:400, height:250}}/>
            </div>
          </div>
          <div class="row" style={{paddingBottom:"2em"}}>
            <div class="col">
              <img src={img3} alt="skoupidia" className={styles.img} style={{maxWidth:700, height:400}}/>
            </div>
          </div>
          <div class="row" style={{paddingBottom:"2em"}}>
            <div class="col">
              <img src={img4} alt="skoupidia" className={styles.img} style={{maxWidth:700, height:400}}/>
            </div>
          </div>
          <div class="row" style={{paddingBottom:"2em"}}>
            <div class="col">
              <img src={img5} alt="skoupidia" className={styles.img} style={{maxWidth:700, height:400}}/>
            </div>
          </div>
        </div>
        
      </CardContent>
    </Card>
  </div>
);

article5.propTypes = {};

article5.defaultProps = {};

export default article5;
