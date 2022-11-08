import React from "react";
import styles from "./article7.module.css";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import img1 from "../../../../images/skoup11.PNG";
import img2 from "../../../../images/skoup12.PNG";

const article7 = () => (
  <div className={styles.article6}>
    <Card>
      <CardContent>
        <div class="container">
          <div style={{ paddingTop: "2em" }}></div>
          <div class="row">
            <div class="col">
              <h2>
                Ο δραστήριος σύλλογος «Άγιος Χαράλαμπος» Καλαμάκι Ισθμία
                Κορινθίας
              </h2>
              <h2 style={{ color: "red" }}>korinthosTV</h2>
              <img
                src={img2}
                alt="skoupidia"
                className={styles.img}
                style={{ maxWidth: 400, height: 250 }}
              />
              <p className={styles.content}>
                Το Νέο Δ.Σ. του Εξωραϊστικού Πολιτιστικού Συλλόγου «Άγιος
                Χαράλαμπος» που ανέλαβε μετά τις αρχαιρεσίες της 16ης Αυγούστου
                2020 , έδειξε από την αρχή πως η ανάπτυξη και ο εκσυγχρονισμός
                της περιοχής είναι προτεραιότητά του!
              </p>
              <p className={styles.content}>
                Με στόχο την προαγωγή των κοινών συμφερόντων των μελών, την
                ποιοτική αναβάθμιση και διασφάλιση της ζωής των κατοίκων, την
                προστασία και ανάδειξη του θαλάσσιου και φυσικού περιβάλλοντος
                της περιοχής, τέθηκαν στην υπηρεσία των κατοίκων μέσα κοινωνικής
                δικτύωσης όπως Ιστοσελίδα, Facebook και Instagram που θα
                ενισχύσουν την ταχύτερη ενημέρωση για τα προβλήματα της περιοχής
                μας, αλλά και την ανάπτυξη στενότερων δεσμών αλληλεγγύης και
                αλληλοβοήθειας.
              </p>
              <p className={styles.content}>
                Η άμεση σύσταση Εθελοντικής Ομάδας Δράσης, έδωσε ήδη τα πρώτα
                δείγματα δουλειάς και συνεχίζει δυναμικά και με πολύ όρεξη το
                έργο της, δίνοντας προτεραιότητα στην καθαριότητα και το
                κλείσιμο των «άτυπων χωματερών» που δημιούργησαν όχι μόνο οι
                ίδιοι οι κάτοικοι αλλά και επισκέπτες άλλων περιοχών, κάνοντας
                τα σκουπίδια ενός, σκουπίδια όλων μας!
              </p>
              <p className={styles.content}>
                Έτσι, με σύνθημα <br />
                «Σ αυτή μας την προσπάθεια δεν περισσεύει κανείς ! Είμαστε όλοι
                μαζί, είμαστε δυνατοί !» ξεκίνησε μια νέα εποχή στον οικισμό του
                Αγίου Χαραλάμπους.
              </p>

              <p className={styles.content}>
                Γνωρίζοντας ότι η περιοχή μας είναι μικτή και σ’ αυτήν
                συνυπάρχουν οικίες , μόνιμες κι εξοχικές, αλλά και επιχειρήσεις,
                πορευόμαστε με την ευχή να δημιουργήσουμε έναν ανθρώπινο
                οικισμό, καθαρό και απαλλαγμένο από κάθε είδους περιβαλλοντικής
                μόλυνσης , που θα συμβιώνει αρμονικά , τηρώντας εκατέρωθεν
                κανόνες αλληλοσεβασμού και πληρώντας τους όρους και τις
                προϋποθέσεις μιας ομαλής συμβίωσης!
              </p>
              <a href="https://korinthostv.gr/2020/10/19/%ce%bf-%ce%b4%cf%81%ce%b1%cf%83%cf%84%ce%ae%cf%81%ce%b9%ce%bf%cf%82-%cf%83%cf%8d%ce%bb%ce%bb%ce%bf%ce%b3%ce%bf%cf%82-%ce%ac%ce%b3%ce%b9%ce%bf%cf%82-%cf%87%ce%b1%cf%81%ce%ac%ce%bb%ce%b1%ce%bc/">
                https://korinthostv.gr/2020/10/19/%ce%bf-%ce%b4%cf%81%ce%b1%cf%83%cf%84%ce%ae%cf%81%ce%b9%ce%bf%cf%82-%cf%83%cf%8d%ce%bb%ce%bb%ce%bf%ce%b3%ce%bf%cf%82-%ce%ac%ce%b3%ce%b9%ce%bf%cf%82-%cf%87%ce%b1%cf%81%ce%ac%ce%bb%ce%b1%ce%bc/
              </a>
            </div>
          </div>
          <div class="row" style={{ paddingBottom: "2em" }}>
            <div class="col">
              <img
                src={img1}
                alt="skoupidia"
                className={styles.img}
                style={{ maxWidth: 1200, height: 950 }}
              />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  </div>
);

article7.propTypes = {};

article7.defaultProps = {};

export default article7;
