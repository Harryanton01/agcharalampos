import React from 'react';
import PropTypes from 'prop-types';
import styles from './ethelontiki.module.css';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Action1 from '../../components/newsfeed/volunteer/volunteer1/volunteer1';
import Action7 from '../../components/newsfeed/volunteer/volunteer2/volunteer2';

function Actions() {
  const [expanded, setExpanded] = React.useState('panel1');
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return(
    <div className={styles.actions}>
     <div className={styles.accordion}>
    <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <h4>ΕΝΗΜΕΡΩΣΗ ΠΑΡΑΛΑΒΗΣ ΕΞΟΠΛΙΣΜΟΥ ΕΘΕΛΟΝΤΩΝ</h4>
      </AccordionSummary>
        <AccordionDetails>
          <Action1 />
        </AccordionDetails>
    </Accordion>
    </div>
    <div className={styles.accordion}>
    <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <h4>ΑΝΑΦΟΡΑ ΤΟΥ KorinthosTV ΣΤΗΝ ΠΑΡΑΛΑΒΗ ΕΞΟΠΛΙΣΜΟΥ ΤΩΝ ΕΘΕΛΟΝΤΩΝ</h4>
      </AccordionSummary>
        <AccordionDetails>
          <Action7 />
        </AccordionDetails>
    </Accordion>
    </div>
  </div>
  )
}
Actions.propTypes = {};

Actions.defaultProps = {};

export default Actions;