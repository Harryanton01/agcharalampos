import React from "react";
import styles from "./Action12.module.css";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import img1 from "../../../../images/skoup16.PNG";

const Action12 = () => (
  <div className={styles.Action12}>
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
                Σάββατο 17, Κυριακή 18 & Σάββατο 24 & 31 Οκτωβρίου 2020
              </p>
            </div>
          </div>
          <div style={{ paddingTop: "2em" }}></div>
          <div class="row">
            <div class="col">
              <h2 style={{ color: "green", fontWeight: "bold" }}>
                ΕΘΕΛΟΝΤΙΚΗ ΔΡΑΣΗ
              </h2>
              <h2 style={{ color: "green", fontStyle: "italic" }}>Μέρος 9</h2>
              <p className={styles.content}>
                Ο καθαρισμός της οδού Αγίων Αναργύρων, από την οδό Αγίου
                Χαραλάμπους έως και το γραφείο του συλλόγου μας, διήρκησε 4
                ημέρες, συνολικά 10 ώρες και απασχόλησε 12 εθελοντές.
              </p>
              <p className={styles.content}>
                Η βλάστηση εκατέρωθεν της οδού ήταν ανεξέλεγκτη και τα
                αγριόχορτα είχαν καταλάβει το οδόστρωμα και είχαν μετατρέψει το
                δρόμο όπου βρίσκεται το γραφείο του συλλόγου μας σε ζούγκλα, ενώ
                ανάμεσά τους υπήρχαν διάσπαρτα μη οικιακά απορρίμματα.
              </p>
              <p className={styles.content}>
                Συμμετέχοντες : Αβραμίδου Ελευθερία Βακιρτζής Χρόνης,
                Κωνσταντίνου Ιωάννα, Λαιμός Κωνσταντίνος, Νάκου Κατερίνα,
                Ξυγκάκη Αναστασία, Πανταζοπούλου Γιώτα, Πρίφτη Βιολέτα, Πρίφτης
                Αχιλλέας, Ρυμική Βούλα, ο Άγγελος και ο Δήμος.
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

Action12.propTypes = {};

Action12.defaultProps = {};

export default Action12;
