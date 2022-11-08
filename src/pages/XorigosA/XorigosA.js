import React from "react";
import PropTypes from "prop-types";
import styles from "./XorigosA.module.css";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Action9 from "../../components/newsfeed/actions/Action9/Action9";
import Action10 from "../../components/newsfeed/actions/Action10/Action10";
import Action11 from "../../components/newsfeed/actions/Action11/Action11";
import Action15 from "../../components/newsfeed/actions/Action15/Action15";
import Action16 from "../../components/newsfeed/actions/Action16/Action16";
import Action17 from "../../components/newsfeed/actions/Action17/Action17";
import Action27 from "../../components/newsfeed/actions/Action27/Action20";

function Actions() {
  const [expanded, setExpanded] = React.useState("panel1");
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <div className={styles.actions}>
      <div className={styles.accordion}>
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <h4>Ευχαριστήρια επιστολή - ΜΥΛΟΙ ΣΟΓΙΑΣ</h4>
          </AccordionSummary>
          <AccordionDetails>
            <Action27 />
          </AccordionDetails>
        </Accordion>
      </div>
      <div className={styles.accordion}>
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <h4>Ευχαριστήρια Επιστολή ΔΗΜΗΤΡΙΑΚΗ ΑΕ - Πασχαλινός Διάκοσμος</h4>
          </AccordionSummary>
          <AccordionDetails>
            <Action17 />
          </AccordionDetails>
        </Accordion>
      </div>
      <div className={styles.accordion}>
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <h4>ΕΥΧΑΡΙΣΤΗΡΙΑ ΕΠΙΣΤΟΛΗ MOTOR OIL - korinthosTV</h4>
          </AccordionSummary>
          <AccordionDetails>
            <Action15 />
          </AccordionDetails>
        </Accordion>
      </div>
      <div className={styles.accordion}>
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <h4>ΔΩΡΕΑΝ ΚΑΡΤΑ ΥΓΕΙΑΣ για όλα τα Μέλη του Συλλόγου </h4>
          </AccordionSummary>
          <AccordionDetails>
            <Action16 />
          </AccordionDetails>
        </Accordion>
      </div>
      <div className={styles.accordion}>
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <h4>ΕΥΧΑΡΙΣΤΗΡΙΑ ΕΠΙΣΤΟΛΗ MOTOR OIL</h4>
          </AccordionSummary>
          <AccordionDetails>
            <Action9 />
          </AccordionDetails>
        </Accordion>
      </div>
      <div className={styles.accordion}>
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <h4>ΕΥΧΑΡΙΣΤΗΡΙΑ ΕΠΙΣΤΟΛΗ METROPOLITAN</h4>
          </AccordionSummary>
          <AccordionDetails>
            <Action10 />
          </AccordionDetails>
        </Accordion>
      </div>
      <div className={styles.accordion}>
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <h4>ΕΥΧΑΡΙΣΤΗΡΙΑ ΕΠΙΣΤΟΛΗ ΔΗΜΗΤΡΙΑΚΗ Α.Ε.</h4>
          </AccordionSummary>
          <AccordionDetails>
            <Action11 />
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}
Actions.propTypes = {};

Actions.defaultProps = {};

export default Actions;
