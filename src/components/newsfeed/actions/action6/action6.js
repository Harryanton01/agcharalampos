import React from "react";
import styles from "./action6.module.css";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import img1 from "../../../../images/skoup13.PNG";

const action6 = () => (
  <div className={styles.action6}>
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
                Τετάρτη 7 έως Παρασκευή 9 Οκτωβρίου 2020
              </p>
            </div>
          </div>
          <div style={{ paddingTop: "2em" }}></div>
          <div class="row">
            <div class="col">
              <h2 style={{ color: "green", fontWeight: "bold" }}>
                ΕΘΕΛΟΝΤΙΚΗ ΔΡΑΣΗ
              </h2>
              <h2 style={{ color: "green", fontStyle: "italic" }}>Μέρος 6</h2>
              <p className={styles.content}>
                Ολοκληρώθηκε ο καθαρισμός της «χωματερής» στη συμβολή των οδών
                Αγίου Χαραλάμπους και Αγίων Αναργύρων.
              </p>
              <p className={styles.content}>
                Για τον καθαρισμό των συσσωρευμένων μη-οικιακών απορριμμάτων και
                κλαδιών, και εκατέρωθεν του δρόμου, καθώς και την περίφραξή του,
                χρειάστηκαν περίπου 4 ώρες δουλειάς από 8 συνολικά εθελοντές!{" "}
              </p>
              <p className={styles.content}>
                Συμμετέχοντες : Αβραμίδου Ελευθερία, Γεροχριστοδούλου Βαρβάρα,
                Λαιμό Κωνσταντίνο, Μπαναγκής Βασίλης, Νάκου Κατερίνα,
                Πανταζοπούλου Γιώτα, Παραστατίδη Γιώργο και Ρυμική Βούλα.{" "}
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

action6.propTypes = {};

action6.defaultProps = {};

export default action6;
