import React from 'react';
import PropTypes from 'prop-types';
import styles from './navbar.module.css';
import Navbar from 'react-bootstrap/Navbar';
import {Nav, NavDropdown} from 'react-bootstrap';
import logo from '../../images/logo.png'
//import {Divider} from '@material-ui/core';

const navbar = () => (
  <div className={styles.navbar}>
      <Navbar variant="dark" expand="lg">
        <Navbar.Brand href="/home"><img alt="logo" src={logo} className={styles.logo}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link className={styles.navLink} href="/home">ΑΡΧΙΚΗ</Nav.Link>
      <NavDropdown className={styles.navLink} title="ΣΧΕΤΙΚΑ ΜΕ ΕΜΑΣ" id="collasible-nav-dropdown">
        <NavDropdown.Item href="/organization">ΟΡΓΑΝΟΓΡΑΜΜΑ</NavDropdown.Item>
        <NavDropdown.Item href="/location">Η ΠΕΡΙΟΧΗ ΜΑΣ</NavDropdown.Item>
        <NavDropdown.Item href="/photo">ΦΩΤΟΓΡΑΦΙΕΣ</NavDropdown.Item>
        <NavDropdown.Item href="/review">ΑΝΑΣΚΟΠΗΣΕΙΣ</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown className={styles.navLink} title="ΝΕΑ, ΔΡΑΣΕΙΣ &amp; ΑΝΑΚΟΙΝΩΣΕΙΣ" id="collasible-nav-dropdown">
        <NavDropdown.Item href="/news">ΝΕΑ</NavDropdown.Item>
        <NavDropdown.Item href="/action">ΔΡΑΣΕΙΣ</NavDropdown.Item>
        <NavDropdown.Item href="/announcements">ΑΝΑΚΟΙΝΩΣΕΙΣ</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown className={styles.navLink} title="ΠΡΟΣΦΟΡΕΣ ΓΙΑ ΤΑ ΜΕΛΗ" id="collasible-nav-dropdown">
        <NavDropdown.Item href="/discounts">ΠΡΟΣΦΟΡΕΣ</NavDropdown.Item>
        <NavDropdown.Item href="/member-announcements">ΝΕΑ & ΕΝΗΜΕΡΩΣΕΙΣ ΜΕΛΩΝ</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown className={styles.navLink} title="ΕΘΕΛΟΝΤΙΚΗ ΟΜΑΔΑ" id="collasible-nav-dropdown">
        <NavDropdown.Item href="/volunteer">ΕΚΔΗΛΩΣΕΙΣ</NavDropdown.Item>
        <NavDropdown.Item href="/volunteer-images">ΦΩΤΟΓΡΑΦΙΕΣ ΕΘΕΛΟΝΤΩΝ</NavDropdown.Item>
        <NavDropdown.Item href="/volunteer-about-us">ΕΛΑ ΜΑΖΙ ΜΑΣ</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown className={styles.navLink} title="ΕΠΙΚΟΙΝΩΝΙΑ" id="collasible-nav-dropdown2">
        <NavDropdown.Item href="/contact">ΦΟΡΜΑ ΕΠΙΚΟΙΝΩΝΙΑΣ</NavDropdown.Item>
        <NavDropdown.Item href="/sign-up">ΕΓΓΡΑΦΗ</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown className={styles.navLink} title="ΧΡΗΣΙΜΑ" id="collasible-nav-dropdown">
      <NavDropdown.Item href="/numbers">ΧΡΗΣΙΜΑ ΤΗΛΕΦΩΝΑ</NavDropdown.Item>
      <NavDropdown.Item href="/websites">ΧΡΗΣΙΜΟΙ ΙΣΤΟΤΟΠΟΙ</NavDropdown.Item>  
      </NavDropdown>
      <NavDropdown className={styles.navLink} title="ΧΟΡΗΓΙΕΣ" id="collasible-nav-dropdown">
      <NavDropdown.Item href="/sponsors">ΧΟΡΗΓΟΙ</NavDropdown.Item>
      <NavDropdown.Item href="/sponsor-announcements">ΕΝΗΜΕΡΩΣΕΙΣ- ΣΤΙΓΜΙΟΤΥΠΑ</NavDropdown.Item>  
      </NavDropdown>
    </Nav>
  </Navbar.Collapse>
</Navbar>
  </div>
);

navbar.propTypes = {};

navbar.defaultProps = {};

export default navbar;
