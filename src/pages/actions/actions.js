import React from 'react';
import PropTypes from 'prop-types';
import styles from './actions.module.css';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Action1 from '../../components/newsfeed/actions/action1/action1';
import Action2 from '../../components/newsfeed/actions/action2/action2';
import Action3 from '../../components/newsfeed/actions/action3/action3';
import Action4 from '../../components/newsfeed/actions/action4/action4';
import Action5 from '../../components/newsfeed/actions/action5/action5';
import Action6 from '../../components/newsfeed/actions/action6/action6';
import Action7 from '../../components/newsfeed/actions/action7/action7';
import Action8 from '../../components/newsfeed/actions/action8/action8';
import Action12 from '../../components/newsfeed/actions/Action12/Action12';
import Action13 from '../../components/newsfeed/actions/Action13/Action13';
import Action14 from '../../components/newsfeed/actions/Action14/Action14';


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
        <h4>ΕΘΕΛΟΝΤΙΚΗ ΔΡΑΣΗ Μέρος 11</h4>
      </AccordionSummary>
        <AccordionDetails>
          <Action14 />
        </AccordionDetails>
    </Accordion>
    </div>
    <div className={styles.accordion}>
    <Accordion onChange={handleChange('panel1')}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <h4>ΕΘΕΛΟΝΤΙΚΗ ΔΡΑΣΗ Μέρος 10</h4>
      </AccordionSummary>
        <AccordionDetails>
          <Action13 />
        </AccordionDetails>
    </Accordion>
    </div>
    <div className={styles.accordion}>
    <Accordion onChange={handleChange('panel1')}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <h4>ΕΘΕΛΟΝΤΙΚΗ ΔΡΑΣΗ Μέρος 9</h4>
      </AccordionSummary>
        <AccordionDetails>
          <Action12 />
        </AccordionDetails>
    </Accordion>
    </div>
     <div className={styles.accordion}>
    <Accordion onChange={handleChange('panel1')}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <h4>ΕΘΕΛΟΝΤΙΚΗ ΔΡΑΣΗ Μέρος 8</h4>
      </AccordionSummary>
        <AccordionDetails>
          <Action8 />
        </AccordionDetails>
    </Accordion>
    </div>
    <div className={styles.accordion}>
    <Accordion  onChange={handleChange('panel1')}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <h4>ΕΘΕΛΟΝΤΙΚΗ ΔΡΑΣΗ Μέρος 7</h4>
      </AccordionSummary>
        <AccordionDetails>
          <Action7 />
        </AccordionDetails>
    </Accordion>
    </div>
    <div className={styles.accordion}>
    <Accordion  onChange={handleChange('panel1')}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <h4>ΕΘΕΛΟΝΤΙΚΗ ΔΡΑΣΗ Μέρος 6</h4>
      </AccordionSummary>
        <AccordionDetails>
          <Action6 />
        </AccordionDetails>
    </Accordion>
    </div>
    <div className={styles.accordion}>
    <Accordion  onChange={handleChange('panel1')}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <h4>ΕΘΕΛΟΝΤΙΚΗ ΔΡΑΣΗ Μέρος 5</h4>
      </AccordionSummary>
        <AccordionDetails>
          <Action5 />
        </AccordionDetails>
    </Accordion>
    </div>
    <div className={styles.accordion}>
    <Accordion onChange={handleChange('panel1')}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <h4>ΕΘΕΛΟΝΤΙΚΗ ΔΡΑΣΗ Μέρος 4</h4>
      </AccordionSummary>
        <AccordionDetails>
          <Action4 />
        </AccordionDetails>
    </Accordion>
    </div>
    <div className={styles.accordion}>
    <Accordion onChange={handleChange('panel1')}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <h4>ΕΘΕΛΟΝΤΙΚΗ ΔΡΑΣΗ Μέρος 3</h4>
      </AccordionSummary>
        <AccordionDetails>
          <Action3 />
        </AccordionDetails>
    </Accordion>
    </div>
    <div className={styles.accordion}>
    <Accordion onChange={handleChange('panel1')}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <h4>ΕΘΕΛΟΝΤΙΚΗ ΔΡΑΣΗ Μέρος 2</h4>
      </AccordionSummary>
        <AccordionDetails>
          <Action2 />
        </AccordionDetails>
    </Accordion>
    </div>
    <div className={styles.accordion}>
    <Accordion onChange={handleChange('panel1')}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <h4>ΕΘΕΛΟΝΤΙΚΗ ΔΡΑΣΗ Μέρος 1</h4>
      </AccordionSummary>
        <AccordionDetails>
          <Action1 />
        </AccordionDetails>
    </Accordion>
    </div>
  </div>
  )
}
Actions.propTypes = {};

Actions.defaultProps = {};

export default Actions;