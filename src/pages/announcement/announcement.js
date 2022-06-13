import React from 'react';
import PropTypes from 'prop-types';
import styles from './announcement.module.css';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Article5 from '../../components/newsfeed/articles/article5/article5';
import Action20 from '../../components/newsfeed/actions/Action20/Action20'


function Announcement() {
  const [expanded, setExpanded] = React.useState('panel1');
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return(
    <div className={styles.announcement}>
    <div className={styles.accordion}>
    <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <h4>ΑΝΑΚΟΙΝΩΣΗ</h4>
      </AccordionSummary>
        <AccordionDetails>
          <Action20 />
        </AccordionDetails>
    </Accordion>
    </div>
    <div className={styles.accordion}>
    <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <h4>ΑΝΑΚΟΙΝΩΣΗ</h4>
      </AccordionSummary>
        <AccordionDetails>
          <Article5 />
        </AccordionDetails>
    </Accordion>
    </div>
  </div>
  )
}
Announcement.propTypes = {};

Announcement.defaultProps = {};

export default Announcement;
