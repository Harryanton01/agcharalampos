import React from "react";
import styles from "./volunteer1.module.css";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import img1 from "../../../../images/volunteer1.PNG";
import { lightBlue } from "@material-ui/core/colors";

const action8 = () => (
  <div className={styles.action8}>
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
            <div class="col-4"></div>
          </div>
          <div style={{ paddingTop: "2em" }}></div>
          <div class="row">
            <div class="col">
              <h2 style={{ fontWeight: "bold" }}>ΕΘΕΛΟΝΤΙΚΗ ΔΡΑΣΗ</h2>
              <p className={styles.content}>
                Την Κυριακή 1 Νοεμβρίου 2020 , στην όμορφη παραλία Αγάπης, η
                Εθελοντική Ομάδα Δράσης της περιοχής μας παρέλαβε την Επίσημη
                Ενδυμασία της, προσφορά του προέδρου του Συλλόγου μας
                Κωνσταντίνου Λαιμού!
              </p>
              <p className={styles.content}>
                Το σύνθημα της Εθελοντικής Ομάδας Δράσης
                <span style={{ color: lightBlue }}>
                  «Είμαστε όλοι μαζί, είμαστε δυνατοί !»
                </span>{" "}
                , αποτυπώθηκε σε μια πολύχρωμη ροζέτα, ενώ δεν θα μπορούσε να
                λείπει το σχετικό κοινωνικό μήνυμα που έχει αποτυπωθεί και στις
                Κάρτες Μέλους του συλλόγου μας και αποτελεί πλέον αναπόσπαστο
                κομμάτι της Επίσημης Ενδυμασίας των Εθελοντών μας!
              </p>
              <p className={styles.content}>
                Ακολούθησε ατομική φωτογράφιση των παρευρισκομένων Εθελοντών ,
                αλλά και ομαδική, τηρώντας τις απαραίτητες αποστάσεις,
                προκειμένου να στείλουν το δικό τους μήνυμα, σε μια εποχή που
                λόγω covid19 οι αποστάσεις μεταξύ μας για να μείνουμε ασφαλείς
                επιβάλλονται !
              </p>
              <p className={styles.content}>
                Στην παραλαβή του εξοπλισμού τους παρευρέθηκαν οι Εθελοντές που
                κατά κύριο λόγο διαμένουν στον οικισμό μας. Για όλους τους
                υπόλοιπους που απουσίαζαν, θα προγραμματιστεί στο μέλλον νέα
                εκδήλωση για την παραλαβή του εξοπλισμού τους και συμπληρωματική
                φωτογράφηση.
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

action8.propTypes = {};

action8.defaultProps = {};

export default action8;
