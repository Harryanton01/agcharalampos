import React from 'react';
import PropTypes from 'prop-types';
import styles from './Article9.module.css';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import img1 from '../../../../images/reportaz.PNG';
import img2 from '../../../../images/skoup12.PNG';

const article9 = () => (
  <div className={styles.article6}>
    <Card>
      <CardContent>
        <div class="container">
          <div style={{paddingTop:'2em'}}></div>
          <div class="row" >
            <div class="col">
            <p className={styles.content}>ΡΕΠΟΡΤΑΖ zougla.gr</p>
              <h2>Η Περιφέρεια Πελοποννήσου νίπτει τας χείρας της για την περιβαλλοντική καταστροφή στην παραλία «Αγάπη»</h2>
              <p className={styles.content}>Πρώτη καταχώρηση: Τετάρτη, 24 Φεβρουαρίου 2021, 16:51</p>
              <img src={img1} alt="skoupidia" className={styles.img} style={{maxWidth:400, height:250}}/>
              <p className={styles.content}><strong>Ρεπορτάζ: Σωτήρης Σκουλούδης
</strong></p>
              <p className={styles.content}>«Κανένα πρόβλημα» δεν βρίσκουν οι Αρχές στην εκτεταμένη περιβαλλοντική καταστροφή που συντελείται, σύμφωνα με τους κατοίκους, στην περιοχή της παραλίας «Αγάπη», στα Ίσθμια Κορινθίας κοντά στο Λουτράκι, όπου λειτουργούν διάφορες βιομηχανικές μονάδες. </p>
              <p className={styles.content}>Έπειτα από τις σφοδρές αντιδράσεις των κατοίκων, οι οποίοι διαπιστώνουν πολύ σοβαρά προβλήματα από διάφορες εργασίες φορτοεκφόρτωσης τοξικών υλικών σε γη, αέρα και θάλασσα, και την ανάδειξη του ζητήματος από το zougla.gr <a href="https://www.zougla.gr/greece/article/i-periferia-peloponisou-nipti-tas-xiras-tis-gia-tin-perivalontiki-katastrofi-stin-paralia-agapi">(δείτε το ρεπορτάζ εδώ)</a>, η Περιφέρεια Πελοποννήσου προέβη σε αυτοψία στην περιοχή και επιτήρηση των εργασιών συγκεκριμένης εταιρείας που καταγγέλλουν οι κάτοικοι.</p>
              <p className={styles.content}>Το πόρισμα των ελεγκτών είναι το ακόλουθο <a href="https://www.zougla.gr/greece/article/i-periferia-peloponisou-nipti-tas-xiras-tis-gia-tin-perivalontiki-katastrofi-stin-paralia-agapi">(κάντε κλικ εδώ για να διαβάσετε ολόκληρη την απάντηση)</a>.
</p>

<h3><a href="https://www.zougla.gr/greece/article/i-periferia-peloponisou-nipti-tas-xiras-tis-gia-tin-perivalontiki-katastrofi-stin-paralia-agapi">Η Περιφέρεια Πελοποννήσου νίπτει τας χείρας της για την περιβαλλοντική καταστροφή στην παραλία «Αγάπη»</a></h3>
              
        
            </div>
          </div>
        </div>
        
      </CardContent>
    </Card>
  </div>
);

article9.propTypes = {};

article9.defaultProps = {};

export default article9;
