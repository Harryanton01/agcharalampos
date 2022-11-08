import React from "react";
import styles from "./newsfeed.module.css";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Article1 from "./articles/article1/article1";
import Article2 from "./articles/article2/article2";
import Article3 from "./articles/article3/article3";
import Article4 from "./articles/article4/article4";
import Article7 from "./articles/article7/article7";
import Article8 from "./articles/article8/article8";
import Article9 from "./articles/Article9/Article9";
import Article10 from "./articles/Article10/Article10";
import Article11 from "./articles/Article11/Article11";
import Article12 from "./articles/Article12/Article12";
import Article13 from "./articles/Article13/Article13";
import Article14 from "./articles/Article14/Article14";
import Article15 from "./articles/article15/article15";
import Article16 from "./articles/article16/article16";
import Action18 from "./actions/Action18/Action18";
import Action19 from "./actions/Action19/Action19";
import Action28 from "./actions/Action28/Action20";

function Newsfeed() {
  const [expanded, setExpanded] = React.useState("panel1");
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <div className={styles.newsfeed}>
      <div className={styles.accordion}>
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <h4>Τα έργα στον Οικισμό μας</h4>
          </AccordionSummary>
          <AccordionDetails>
            <Action28 />
          </AccordionDetails>
        </Accordion>
      </div>
      <div className={styles.accordion}>
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <h4>
              Ο 1ος Εξωραϊστικός Πολιτιστικός Σύλλογος στην Ελλάδα με Ιδιόκτητο
              Σάρωθρο καθαρισμού δρόμων!
            </h4>
          </AccordionSummary>
          <AccordionDetails>
            <Article16 />
          </AccordionDetails>
        </Accordion>
      </div>
      <div className={styles.accordion}>
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <h4>Η ΜΕΤΑΜΟΡΦΩΣΗ ΤΗΣ ΠΑΡΑΛΙΑΣ ΑΓΑΠΗΣ ΣΤΟ ΚΑΛΑΜΑΚΙ ΚΟΡΙΝΘΙΑΣ</h4>
          </AccordionSummary>
          <AccordionDetails>
            <Article15 />
          </AccordionDetails>
        </Accordion>
      </div>
      <div className={styles.accordion}>
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <h4>Korintos TV - ΠΑΣΧΑ 2021</h4>
          </AccordionSummary>
          <AccordionDetails>
            <Action18 />
          </AccordionDetails>
        </Accordion>
      </div>
      <div className={styles.accordion}>
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <h4>Loutraki Blog - ΠΑΣΧΑ 2021</h4>
          </AccordionSummary>
          <AccordionDetails>
            <Action19 />
          </AccordionDetails>
        </Accordion>
      </div>
      <div className={styles.accordion}>
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <h4>
              -ΑΠΟΚΡΙΕΣ 2021 ΣΤΟΝ ΑΓΙΟ ΧΑΡΑΛΑΜΠΟ – ΕΞΩΡΑΪΣΤΙΚΟΣ ΠΟΛΙΤΙΣΤΙΚΟΣ
              ΣΥΛΛΟΓΟΣ “ΑΓΙΟΣ ΧΑΡΑΛΑΜΠΟΣ”
            </h4>
          </AccordionSummary>
          <AccordionDetails>
            <Article11 />
          </AccordionDetails>
        </Accordion>
      </div>
      <div className={styles.accordion}>
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <h4>
              Καλαμάκι Κορινθίας: Μια εθελοντική πρωτοβουλία που αξίζει
              συγχαρητήρια
            </h4>
          </AccordionSummary>
          <AccordionDetails>
            <Article12 />
          </AccordionDetails>
        </Accordion>
      </div>
      <div className={styles.accordion}>
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <h4>Αναδημοσιεύσεις άρθρου zougla.gr – ΦΕΒΡΟΥΑΡΙΟΣ 2021</h4>
          </AccordionSummary>
          <AccordionDetails>
            <Article13 />
          </AccordionDetails>
        </Accordion>
      </div>
      <div className={styles.accordion}>
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <h4>10 ΦΕΒΡΟΥΑΡΙΟΥ 2021 ΕΟΡΤΑΣΜΟΣ ΑΓΙΟΥ ΧΑΡΑΛΑΜΠΟΥΣ</h4>
          </AccordionSummary>
          <AccordionDetails>
            <Article14 />
          </AccordionDetails>
        </Accordion>
      </div>
      <div className={styles.accordion}>
        <Accordion onChange={handleChange("panel1")}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <h4>
              ΡΕΠΟΡΤΑΖ zougla.gr : Η Περιφέρεια Πελοποννήσου νίπτει τας χείρας
              της για την περιβαλλοντική καταστροφή στην παραλία «Αγάπη»
            </h4>
          </AccordionSummary>
          <AccordionDetails>
            <Article9 />
          </AccordionDetails>
        </Accordion>
      </div>
      <div className={styles.accordion}>
        <Accordion onChange={handleChange("panel1")}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <h4>ΔΙΑΜΑΡΤΥΡΙΑ ΚΑΤΟΙΚΩΝ ΓΙΑ ΤΟ ΛΙΜΑΝΙ ΣΤΟ ΚΑΛΑΜΑΚΙ ΚΟΡΙΝΘΙΑΣ</h4>
          </AccordionSummary>
          <AccordionDetails>
            <Article10 />
          </AccordionDetails>
        </Accordion>
      </div>
      <div className={styles.accordion}>
        <Accordion onChange={handleChange("panel1")}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <h4>
              Ο δραστήριος σύλλογος «Άγιος Χαράλαμπος» Καλαμάκι Ισθμία Κορινθίας
            </h4>
          </AccordionSummary>
          <AccordionDetails>
            <Article7 />
          </AccordionDetails>
        </Accordion>
      </div>
      <div className={styles.accordion}>
        <Accordion onChange={handleChange("panel1")}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <h4>
              Αναφορά στη ΣΥΝΕΧΙΖΟΜΕΝΗ περιβαλλοντική μόλυνση της περιοχής μας -
              ΝΟΕΜΒΡΙΟΣ 2020
            </h4>
          </AccordionSummary>
          <AccordionDetails>
            <Article8 />
          </AccordionDetails>
        </Accordion>
      </div>
      <div className={styles.accordion}>
        <Accordion onChange={handleChange("panel1")}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <h4>ΕΥΧΑΡΙΣΤΗΡΙΑ ΕΠΙΣΤΟΛΗ</h4>
          </AccordionSummary>
          <AccordionDetails>
            <Article4 />
          </AccordionDetails>
        </Accordion>
      </div>
      <div className={styles.accordion}>
        <Accordion onChange={handleChange("panel1")}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <h4>ΕΝΗΜΕΡΩΣΗ: Η ΑΠΟΨΗ ΣΑΣ ΜΑΣ ΕΝΔΙΑΦΕΡΕΙ - 29/08/2020</h4>
          </AccordionSummary>
          <AccordionDetails>
            <Article3 />
          </AccordionDetails>
        </Accordion>
      </div>
      <div className={styles.accordion}>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <h4>
              Αναφορά στην περιβαλλοντική μόλυνση της περιοχής μας - 26/08/2020
            </h4>
          </AccordionSummary>
          <AccordionDetails>
            <Article2 />
          </AccordionDetails>
        </Accordion>
      </div>
      <div className={styles.accordion}>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <h4>Ενημέρωση Συλλόγου - 19/08/2020</h4>
          </AccordionSummary>
          <AccordionDetails>
            <Article1 />
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}
Newsfeed.propTypes = {};

Newsfeed.defaultProps = {};

export default Newsfeed;
