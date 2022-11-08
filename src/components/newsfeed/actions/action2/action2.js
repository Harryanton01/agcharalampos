import React from "react";
import styles from "./action2.module.css";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import img1 from "../../../../images/skoup7.PNG";

const action2 = () => (
  <div className={styles.action2}>
    <Card>
      <CardContent>
        <div class="container">
          <div class="row">
            <div class="col-8" style={{ textAlign: "left" }}>
              <p className={styles.details}>
                <strong>ΠΟΛΙΤΙΣΤΙΚΟΣ ΕΞΩΡΑΪΣΤΙΚΟΣ ΣΥΛΛΟΓΟΣ</strong>
              </p>
              <p className={styles.details}>
                <strong>«Ο ΑΓΙΟΣ ΧΑΡΑΛΑΜΠΟΣ»</strong>
              </p>
              <p className={styles.details}>
                <strong>ΚΑΛΑΜΑΚΙ- ΚΟΡΙΝΘΙΑΣ</strong>
              </p>
              <p className={styles.details}>
                Τ.Κ. 20003 ΙΣΘΜΙΑ - ΤΗΛ. 2741 049258
              </p>
              <p className={styles.details}>
                Site:{" "}
                <a href="https://www.agcharalampos.gr">www.agcharalampos.gr</a>
              </p>
              <p className={styles.details}>
                email:{" "}
                <a href="mailto: oagioscharalampos@gmail.com">
                  oagioscharalampos@gmail.com
                </a>
              </p>
              <p className={styles.details}>
                Facebook:{" "}
                <strong>
                  <a href="https://www.facebook.com/%CE%95%CE%BE%CF%89%CF%81%CE%B1%CF%8A%CF%83%CF%84%CE%B9%CE%BA%CF%8C%CF%82-%CE%A0%CE%BF%CE%BB%CE%B9%CF%84%CE%B9%CF%83%CF%84%CE%B9%CE%BA%CF%8C%CF%82-%CE%A3%CF%8D%CE%BB%CE%BB%CE%BF%CE%B3%CE%BF%CF%82-%CE%9F-%CE%86%CE%B3%CE%B9%CE%BF%CF%82-%CE%A7%CE%B1%CF%81%CE%AC%CE%BB%CE%B1%CE%BC%CF%80%CE%BF%CF%82-103212898174544">
                    ΕΞΩΡΑΪΣΤΙΚΟΣ ΠΟΛΙΤΙΣΤΙΚΟΣ ΣΥΛΛΟΓΟΣ ΑΓΙΟΣ ΧΑΡΑΛΑΜΠΟΣ
                  </a>
                </strong>
              </p>
              <p className={styles.details}>
                Instagram:{" "}
                <strong>
                  <a href="https://www.instagram.com/agcharalampos/">
                    agcharalampos
                  </a>
                </strong>
              </p>
            </div>
            <div class="col-4">
              <p className={styles.details}>
                Σάββατο 26 &amp; Κυριακή 27 Σεπτεμβρίου 2020
              </p>
            </div>
          </div>
          <div style={{ paddingTop: "2em" }}></div>
          <div class="row">
            <div class="col">
              <h2 style={{ color: "green", fontWeight: "bold" }}>
                ΕΘΕΛΟΝΤΙΚΗ ΔΡΑΣΗ
              </h2>
              <h2 style={{ color: "green", fontStyle: "italic" }}>Μέρος 2</h2>
              <p className={styles.content}>
                Η δεύτερη «παράνομη χωματερή» της περιοχής μας που καθαρίζεται
                και περιφράσσεται, βρίσκεται στο τέρμα της οδού Αγίου
                Χαραλάμπους, ακριβώς μετά τη γέφυρα και είναι μία από τις
                μεγαλύτερες της περιοχής μας!
              </p>
              <p className={styles.content}>
                Τα συσσωρευμένα και θαμμένα κάτω από το χώμα απορρίμματα χρόνων,
                χρειάστηκαν δύο ημέρες, περίπου 10 ώρες δουλειάς από 12
                εθελοντές, που δούλεψαν με πάρα πολύ όρεξη! Φαίνεται άλλωστε από
                το αποτέλεσμα!
              </p>
              <p className={styles.content}>
                Η βοήθεια του Δήμου ήταν κι εδώ καθοριστική! Χωρίς τον πρώτο
                καθαρισμό των βουνών από μπάζα, χώμα και απορρίμματα, από την
                μπουλντόζα του Δήμου, δεν θα μπορούσαμε να επιτύχουμε αυτό το
                αποτέλεσμα!
              </p>
              <p className={styles.content}>
                Συμμετέχοντες : Αβραμίδου Ελευθερία, Βεζίρης Δημήτρης,
                Βυζανιάρης Παύλος, Γεροχριστοδούλου Βαρβάρα, Ζωγράφος Στέλιος,
                Λαιμός Κωνσταντίνος, Μπαναγκής Βασίλης, Νάκου Κατερίνα, Ξυγκάκη
                Αναστασία, Πανταζοπούλου Γιώτα, Παπαδόπουλος Ορέστης, και
                Πυρομάλλη Άννα{" "}
              </p>

              <img
                src={img1}
                alt="skoupidia"
                className={styles.img}
                style={{ maxWidth: 1000, height: 700 }}
              />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  </div>
);

action2.propTypes = {};

action2.defaultProps = {};

export default action2;
