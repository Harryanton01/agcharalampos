import React from "react";
import { Form, Button } from "react-bootstrap";
import firebase from "firebase";
import { Redirect } from "react-router-dom";

class User extends React.Component {
  constructor() {
    super();
    this.state = {
      firstname: "",
      lastname: "",
      address: "",
      mobilenumber: "",
      email: "",
      subject: "",
      message: "",
      redirect: false,
      validated: false,
    };
  }
  updateInput = (e) => {
    this.setState({
      [e.currentTarget.id]: e.currentTarget.value,
    });
  };
  handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      this.setState({
        ...this.state,
        validated: true,
      });
      event.preventDefault();
      event.stopPropagation();
    }
    if (form.checkValidity() === true) {
      event.preventDefault();

      const db = firebase.firestore();
      db.collection("mail").add({
        to: "oagioscharalampos@gmail.com",
        message: {
          subject: this.state.subject,
          html:
            "<strong>ΟΝΟΜΑ</strong>: " +
            this.state.firstname +
            "<br>" +
            "<strong>ΕΠΩΝΥΜΟ</strong>: " +
            this.state.lastname +
            "<br>" +
            "<strong>ΔΙΕΥΘΗΝΣΗ</strong>: " +
            this.state.address +
            "<br>" +
            "<strong>ΚΙΝΗΤΟ ΤΗΛ.</strong>: " +
            this.state.mobilenumber +
            "<br>" +
            "<strong>EMAIL</strong>: " +
            this.state.email +
            "<br>" +
            "<strong>ΜΥΝΗΜΑ</strong>: " +
            this.state.message +
            "<br>",
        },
      });
      this.setState({
        ...this.state,
        validated: true,
        redirect: true,
      });
    }
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to="/success" />;
    }
    return (
      <div
        style={{
          paddingLeft: "15%",
          paddingRight: "15%",
          textAlign: "center",
          paddingBottom: "2em",
        }}
      >
        <h2>Φόρμα Επικοινωνίας</h2>
        <Form
          noValidate
          validated={this.state.validated}
          onSubmit={this.handleSubmit}
        >
          <Form.Group controlId="firstname">
            <Form.Label>ΟΝΟΜΑ</Form.Label>
            <Form.Text className="text-muted">* Υποχρεωτικό πεδίο...</Form.Text>
            <Form.Control
              type="text"
              placeholder=""
              required
              onChange={this.updateInput}
            />
            <Form.Control.Feedback type="invalid">
              Παρακαλώ εισάγετε το όνομά σας...
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="lastname">
            <Form.Label>ΕΠΩΝΥΜΟ</Form.Label>
            <Form.Text className="text-muted">* Υποχρεωτικό πεδίο...</Form.Text>
            <Form.Control
              type="text"
              placeholder=""
              required
              onChange={this.updateInput}
            />
            <Form.Control.Feedback type="invalid">
              Παρακαλώ εισάγετε το επώνυμό σας...
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="address">
            <Form.Label>ΔΙΕΥΘΥΝΣΗ</Form.Label>
            <Form.Control
              type="text"
              placeholder=""
              onChange={this.updateInput}
            />
          </Form.Group>
          <Form.Group controlId="mobilenumber">
            <Form.Label>ΚΙΝΗΤΟ ΤΗΛ.</Form.Label>
            <Form.Text className="text-muted">* Υποχρεωτικό πεδίο...</Form.Text>
            <Form.Control
              type="number"
              placeholder=""
              required
              onChange={this.updateInput}
            />
            <Form.Control.Feedback type="invalid">
              Παρακαλώ εισάγετε ένα τηλέφωνο επικοινωνίας...
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="email">
            <Form.Label>EMAIL</Form.Label>
            <Form.Control
              type="email"
              placeholder=""
              onChange={this.updateInput}
            />
          </Form.Group>
          <Form.Group controlId="subject">
            <Form.Label>θΕΜΑ</Form.Label>
            <Form.Text className="text-muted">* Υποχρεωτικό πεδίο...</Form.Text>
            <Form.Control
              type="text"
              placeholder=""
              required
              onChange={this.updateInput}
            />
            <Form.Control.Feedback type="invalid">
              Παρακαλώ εισάγετε το θέμα σας με λίγα λόγια...
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="message">
            <Form.Label>ΜΥΝΗΜΑ</Form.Label>
            <Form.Text className="text-muted">* Υποχρεωτικό πεδίο...</Form.Text>
            <Form.Control
              as="textarea"
              rows="4"
              placeholder="Τα σχόλιά σου..."
              required
              onChange={this.updateInput}
            />
            <Form.Control.Feedback type="invalid">
              Παρακαλώ εισάγετε τα σχόλιά σας...
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="formBasicCheckbox">
            <Form.Check
              required
              type="checkbox"
              label="Αποδέχομαι την επεξεργασία των προσωπικών μου στοιχείων για τις ανάγκες του συλλόγου"
            />
          </Form.Group>
          <Form.Text className="text-muted">* Υποχρεωτικό πεδίο...</Form.Text>
          <Button variant="primary" type="submit">
            ΑΠΟΣΤΟΛΗ
          </Button>
        </Form>
      </div>
    );
  }
}
export default User;
