import React from "react";
import styles from "./arxiki.module.css";
import Dialog from "./dialog";
import { Divider } from "@material-ui/core";
import Weather from "../../components/weather/App";
import Novoville from "../../images/novoville.jpg";
import Prosfores from "../../images/prosfores.PNG";
import Nyc from "../../images/nyc.PNG";
import Metropolitan from "../../images/metropolitan.PNG";
import Joana from "../../images/joana.PNG";
import Papa from "../../images/papa.PNG";
import Kafalidis from "../../images/kafalidis.PNG";

const arxiki = () => (
  <div className={styles.arxiki}>
    <div className={"container"}>
      <div className={"row"}>
        <div className={"col-lg-9"}>
          <Dialog open={true} />
          <div className={styles.padtop}></div>
          <h2>Καλώς ορίσατε στον ιστότοπο του Συλλόγου μας</h2>
          <h2>«ΑΓΙΟΣ ΧΑΡΑΛΑΜΠΟΣ»</h2>
          <p>
            Είμαστε ένας εξωραϊστικός πολιτιστικός σύλλογος που ιδρύθηκε το 1980
            από μία ομάδα κατοίκων της περιοχής μας και αισίως συνεχίζουμε μέχρι
            σήμερα.
          </p>
          <p>
            Στις σελίδες του ιστότοπού μας μπορείτε να δείτε την ιστορία, το
            σκοπό αλλά και το καταστατικό του συλλόγου μας, μπορείτε να δείτε τα
            μέλη μας, να επικοινωνήσετε μαζί μας, να ενημερωθείτε σχετικά με τον
            σύλλογο μας μέσα από τα νέα μας αλλά και για την περιοχή μας, μέσα
            από άρθρα που σταδιακά θα διανθίσουν την ιστοσελίδα μας, τόσο για
            τους κατοίκους- παραθεριστές όσο και για τον οποιονδήποτε
            ενδιαφερόμενο για την περιοχή μας.
          </p>
          <p>
            Σήμερα, περισσότερο παρά ποτέ, είναι αναγκαία η ένωση ατόμων σε
            ομάδα, σε κοινή προσπάθεια επίτευξης στόχων με βαθύτερο σκοπό την
            αμοιβαία προάσπιση και προαγωγή των συμφερόντων των κατοίκων της
            περιοχής μας και που ευνοούν το κοινωνικό σύνολο γενικότερα. Για το
            λόγο αυτό και χάρη στην ιστορία του συλλόγου, το βασικό νόημα είναι
            πιο σύγχρονο από ποτέ, η διαχρονικότητά του δε αναμφισβήτητη, η
            ανάγκη της από κοινού προσπάθειας στην επίτευξη συλλογικών στόχων
            που υπηρετούν τις πανανθρώπινες αξίες.
          </p>
          <p>
            Θα χαρούμε ιδιαίτερα να έρθετε σε επικοινωνία μαζί μας προκειμένου
            να μας εκφράσετε τις απόψεις σας, τις απορίες αλλά και τις προτάσεις
            σας για οποιοδήποτε θέμα που αφορά το σύλλογό μας.
          </p>
          <Divider />
          <div className={styles.padtop}></div>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/fJMnqKc_s9s"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <div className={styles.padtop}></div>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/2XRs59gNnNo"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <div className={styles.padtop}></div>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/wj83oG2I6g8"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <div className={styles.padtop}></div>
          <div className={styles.newsFeed}>
            <img src={Prosfores} alt="Metropolitan" />
          </div>
          <div className={styles.padtop}></div>
          <Divider />
          <div className={styles.padtop}></div>
          <div className={styles.newsFeed}></div>
        </div>
        <div className={"col-lg-3"}>
          <Weather />
          <br />
          <a
            href="https://www.novoville.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={Novoville}
              style={{ maxWidth: "250px" }}
              alt="Novoville"
            />
          </a>
          <Divider />
          <a
            href="https://www.metropolitan-hospital.gr/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={Metropolitan}
              style={{ maxWidth: "250px" }}
              alt="Metropolitan"
            />
          </a>
          <Divider />
          <a
            href="https://newyorkcollection.gr/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Nyc} style={{ maxWidth: "250px" }} alt="NYC" />
          </a>
          <Divider />
          <a
            href="https://www.joannas.gr"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Joana} style={{ maxWidth: "250px" }} alt="Joana" />
          </a>
          <Divider />
          <a
            href="https://www.vrisko.gr/details/bfbj7e352bak761ibjc4cidfd1be6431"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={Papa}
              style={{ maxWidth: "250px", paddingTop: "10px" }}
              alt="Papa"
            />
          </a>
          <Divider />
          <a
            href="http://www.kafalidis.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={Kafalidis}
              style={{ maxWidth: "250px", paddingTop: "10px" }}
              alt="Papa"
            />
          </a>
        </div>
      </div>
    </div>
  </div>
);
arxiki.propTypes = {};

arxiki.defaultProps = {};

export default arxiki;
