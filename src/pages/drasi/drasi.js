import React from "react";
import styles from "./drasi.module.css";
import { Divider } from "@material-ui/core";

const drasi = () => (
  <div className={styles.drasi}>
    <h2>Οργανόγραμμα</h2>
    <h4>ΠΡΑΚΤΙΚΟ ΣΥΣΤΑΣΗΣ ΣΕ ΣΩΜΑ ΔΙΟΙΚΗΤΙΚΟΥ ΣΥΜΒΟΥΛΙΟΥ</h4>
    <div className={styles.justify}>
      <p>
        Στις 16/08/2020 ημέρα Κυριακή και ώρα 19:00 στα γραφεία του Συλλόγου μας
        πραγματοποιήθηκε συνεδρίαση για την σύνθεση του Δ.Σ. σε σώμα.
      </p>
      <p>Παρόντες ήταν, με σειρά ψήφων που έλαβαν, οι:</p>
      <p>
        κος Λαιμός Κωνσταντίνος, κα Καλαϊτζίδου-Κοσμίδη Σοφία, κα Κασιμάτη
        Ιωάννα, κα Τζώρτζη Βασιλική, κος Κέμος Νικόλαος, κα Ξυγκάκη Αναστασία
        κος Μπαναγκής Βασίλης.{" "}
      </p>
      <p>Ύστερα από ψηφοφορία εκλέχθηκαν :</p>
      <p>
        <strong>Για το Διοικητικό Συμβούλιο </strong>
      </p>
      <div class="container">
        <div class="row">
          <div class="col-md-3">
            <p>
              <strong>Πρόεδρος</strong>
            </p>
          </div>
          <div class="col-md-9">
            <p>Ο κος Λαιμός Κωνσταντίνος</p>
          </div>
        </div>
        <div class="row">
          <div class="col-md-3">
            <p>
              <strong>Αντιπρόεδρος</strong>
            </p>
          </div>
          <div class="col-md-9">
            <p>Η κα Καλαϊτζίδου-Κοσμίδη Σοφία</p>
          </div>
        </div>
        <div class="row">
          <div class="col-md-3">
            <p>
              <strong>Γεν. Γραμματέας</strong>
            </p>
          </div>
          <div class="col-md-9">
            <p>Η κα Κασιμάτη Ιωάννα</p>
          </div>
        </div>
        <div class="row">
          <div class="col-md-3">
            <p>
              <strong>Ταμίας</strong>
            </p>
          </div>
          <div class="col-md-9">
            <p>Η κα Τζώρτζη Βασιλική</p>
          </div>
        </div>
        <div class="row" style={{ paddingTop: "2em" }}>
          <div class="col-md-3">
            <p>
              <strong>Τακτικά Μέλη:</strong>
            </p>
          </div>
          <div class="col-md-9">
            <p>Ο κος Κέμος Νικόλαος</p>
            <p>Ο κος Μπαναγκής Βασίλης</p>
            <p>Η κα Ξυγκάκη Αναστασία</p>
          </div>
        </div>
        <div className={styles.padTop}>
          <p>
            Για την <strong>Εξελεγκτική Επιτροπή</strong> εκλέχθηκαν οι:
          </p>
          <p>κος Βεζίρης Δημήτρης</p>
          <p>κος Κόσσιβας Αντρέας</p>
          <p>κος Παπαντώνης Νικόλαος</p>
        </div>
      </div>
    </div>
    <Divider />
    <div className={styles.padTop} style={{ paddingBottom: "2em" }}>
      <h4>
        <strong>Σκοποί του Συλλόγου</strong>(άρθρο 2 καταστατικού)
      </h4>
      <div className={styles.skopos}>
        <p>Ο σύλλογος μας έχει σκοπούς:</p>
        <ul>
          <li>Την προαγωγή των κοινών συμφερόντων των μελλών του.</li>
          <li>Την ποιοτική αναβάθμιση και διασφάλιση της Ζωής των κατοίκων.</li>
          <li>
            Την ανάπτυξη στενότερων δεσμών αλληλεγγύης και αλληλοβοήθειας των
            μελλών του.
          </li>
          <li>
            Την προστασία και ανάδειξη του Θαλάσσιου και φυσικού περιβάλλοντος
            της περιοχής.
          </li>
          <li>
            Την δραστηριοποίηση του προς κάθε εξωραϊστική και πολιτιστική
            εξέλιξη της περιοχής.
          </li>
        </ul>
      </div>
      <p>
        <strong>
          <a
            href="https://firebasestorage.googleapis.com/v0/b/agcharalampos-ef2e0.appspot.com/o/%CE%9A%CE%91%CE%A4%CE%91%CE%A3%CE%A4%CE%91%CE%A4%CE%99%CE%9A%CE%9F%20%CE%A3%CE%A5%CE%9B%CE%9B%CE%9F%CE%93%CE%9F%CE%A5.pdf?alt=media&token=3248daf3-9e65-4546-9b42-c9611984b5c6"
            target="_blank"
            rel="noopener noreferrer"
          >
            Για το καταστατικό του συλλόγου παρακαλώ πατήστε εδώ
          </a>
        </strong>
      </p>
    </div>
  </div>
);

drasi.propTypes = {};

drasi.defaultProps = {};

export default drasi;
