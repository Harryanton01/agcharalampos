import React from 'react';
import {Form, Button} from 'react-bootstrap';
import firebase from 'firebase';
import { Redirect } from 'react-router-dom';

class User extends React.Component {
 
    constructor() {
        super();
        this.state = {
         firstname:"",
         lastname:"",
         fathersname:"",
         address:"",
         number: "",
         mobilenumber: "",
         email: "",
         afm: "",
         redirect: false,
         validated: false
        };
      }
      updateInput = e => {
        this.setState({
          [e.currentTarget.id]: e.currentTarget.value
        });
      }
      handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
          this.setState({
            ...this.state,
            validated:true
           });
          event.preventDefault();
          event.stopPropagation();
        }
        if(form.checkValidity() === true){
          event.preventDefault();

          const db = firebase.firestore()
          const mailRef = db.collection('mail').add({
            to: 'oagioscharalampos@gmail.com',
            message:{
                subject: 'ΑΙΤΗΣΗ ΝΕΟΥ ΜΕΛΟΥΣ',
                html: '<strong>ΟΝΟΜΑ</strong>: '+this.state.firstname+ '<br>'+
                '<strong>ΕΠΩΝΥΜΟ</strong>: '+this.state.lastname+'<br>'+
                '<strong>ΠΑΤΡΩΝΥΜΟ</strong>: '+this.state.fathersname+'<br>'+
                '<strong>ΔΙΕΥΘΗΝΣΗ</strong>: '+this.state.address+'<br>'+
                '<strong>ΤΗΛ.</strong>: '+this.state.number+'<br>'+
                '<strong>ΚΙΝΗΤΟ ΤΗΛ.</strong>: '+this.state.mobilenumber+'<br>'+
                '<strong>EMAIL</strong>: '+this.state.email+'<br>'+
                '<strong>ΑΦΜ</strong>: '+this.state.afm+'<br>',
            }
          });
          this.setState({
            ...this.state,
            validated: true,
            redirect: true
            });
        };
      }
   
  render() {
      if(this.state.redirect){
          return <Redirect to="/success" />
      }
    return (
        <div style={{paddingLeft:'15%', paddingRight:'15%', textAlign:'center', paddingBottom:'2em'}}>
            <h2>Αίτηση Εγγραφής Νέου Μέλους</h2>
            <Form noValidate validated={this.state.validated} onSubmit={this.handleSubmit}>
  <Form.Group controlId="firstname">
    <Form.Label>ΟΝΟΜΑ</Form.Label>
    <Form.Text className="text-muted">
      * Υποχρεωτικό πεδίο...
    </Form.Text>
    <Form.Control type="text" placeholder="" required onChange={this.updateInput} />
    <Form.Control.Feedback type="invalid">
      Παρακαλώ εισάγετε το όνομά σας...
    </Form.Control.Feedback>
  </Form.Group>
  <Form.Group controlId="lastname">
    <Form.Label>ΕΠΩΝΥΜΟ</Form.Label>
    <Form.Text className="text-muted">
      * Υποχρεωτικό πεδίο...
    </Form.Text>
    <Form.Control type="text" placeholder="" required onChange={this.updateInput}/>
    <Form.Control.Feedback type="invalid">
      Παρακαλώ εισάγετε το επώνυμό σας...
    </Form.Control.Feedback>
  </Form.Group>
  <Form.Group controlId="fathersname">
    <Form.Label>ΠΑΤΡΩΝΥΜΟ</Form.Label>
    <Form.Text className="text-muted">
      * Υποχρεωτικό πεδίο...
    </Form.Text>
    <Form.Control type="text" placeholder="" required onChange={this.updateInput}/>
    <Form.Control.Feedback type="invalid">
      Παρακαλώ εισάγετε το πατρώνυμό σας...
    </Form.Control.Feedback>
  </Form.Group>
  <Form.Group controlId="address">
    <Form.Label>ΔΙΕΥΘΥΝΣΗ</Form.Label>
    <Form.Text className="text-muted">
      * Υποχρεωτικό πεδίο...
    </Form.Text>
    <Form.Control type="text" placeholder="" required onChange={this.updateInput}/>
    <Form.Control.Feedback type="invalid">
      Παρακαλώ εισάγετε την διέυθυνσή σας...
    </Form.Control.Feedback>
  </Form.Group>
  <Form.Group controlId="number">
    <Form.Label>ΣΤΑΘΕΡΟ ΤΗΛ.</Form.Label>
    <Form.Control type="number" placeholder="" onChange={this.updateInput}/>
  </Form.Group>
  <Form.Group controlId="mobilenumber">
    <Form.Label>ΚΙΝΗΤΟ ΤΗΛ.</Form.Label>
    <Form.Text className="text-muted">
      * Υποχρεωτικό πεδίο...
    </Form.Text>
    <Form.Control type="number" placeholder="" required onChange={this.updateInput}/>
    <Form.Control.Feedback type="invalid">
      Παρακαλώ εισάγετε ένα τηλέφωνο επικοινωνίας...
    </Form.Control.Feedback>
  </Form.Group>
  <Form.Group controlId="email">
    <Form.Label>EMAIL</Form.Label>
    <Form.Control type="email" placeholder="" onChange={this.updateInput}/>
  </Form.Group>
  <Form.Group controlId="afm">
    <Form.Label>ΑΦΜ</Form.Label>
    <Form.Text className="text-muted">
      * Υποχρεωτικό πεδίο...
    </Form.Text>
    <Form.Control type="number" placeholder="" required onChange={this.updateInput}/>
    <Form.Control.Feedback type="invalid">
      Παρακαλώ εισάγετε τον ΑΦΜ σας...
    </Form.Control.Feedback>
    
  </Form.Group>
 
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check required type="checkbox" label="Συμφωνώ ρητά με τους όρους του καταστατικού και την επεξεργασία των προσωπικων μου δεδομένων" />
    <Form.Text className="text-muted">
      * Υποχρεωτικό πεδίο...
    </Form.Text>
  </Form.Group>
  <p><i>Κόστος εγγραφής νέου μέλους : €15,00 – Ετήσια συνδρομή μελών : €20,00 </i></p>
  <p> ALPHA BANK IΒΑΝ : GR3201406090609002001000175</p>
  <Button variant="primary" type="submit">
    ΑΠΟΣΤΟΛΗ
  </Button>
</Form>
        </div>
        );
      }
   }
export default User;