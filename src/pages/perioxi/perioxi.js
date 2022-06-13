import React from 'react';
import PropTypes from 'prop-types';
import styles from './perioxi.module.css';
import GoogleMapReact from 'google-map-react';
import AddLocationIcon from '@material-ui/icons/AddLocation';

const AnyReactComponent = () => {
  return(
    <div>
      Μοναστήρι Άγιος Χαράλαμπος
      <AddLocationIcon />
    </div>
  )
};
class Perioxi extends React.Component{
  constructor(props){
    super(props);
    this.state={
    center:{
        lat: 37.9322417,
        lng: 23.0337205
      },
      zoom: 15
    }
  }
  componentWillReceiveProps(nextProps) {
    if(this.props !== nextProps){
      this.setState({
        center:{
          lat: 37.9322417,
          lng: 23.0337205
        },
        zoom: 15
      });
    }
  }
  _onChange = ({ center, zoom }) => {
    this.setState({
      center,
      zoom,
    });
  }

  render(){
    return(
      <div className={styles.perioxi}>
    <h2 className={styles.paddingTop}>Η περιοχή μας</h2>
    <p>Ο Άγιος Χαράλαμπος ανήκει στον δήμο Λουτρακίου – Αγίων Θεοδώρων, της Περιφερακής  Ενότητας Κορινθίας, που βρίσκεται στην Περιφέρεια Πελοποννήσου. (Δημοτική Κοινότητα Ισθμίας – Δημοτική Ενότητα Λουτρακίου – Περαχώρας).</p>
    <p>Κατά τη διοικητική διαίρεση της Ελλάδας με το σχέδιο «Καποδίστριας», μέχρι το 2010, ο Άγιος Χαράλαμπος ανήκε στο Τοπικό Διαμέρισμα Ισθμίας, του πρώην Δήμου Λουτρακίου – Περαχώρας του Νομού Κορινθίας.</p>
    <p> Η επίσημη ονομασία είναι «Ο Άγιος Χαράλαμπος». Έδρα του δήμου είναι το Λουτράκι και ανήκει στο γεωγραφικό διαμέρισμα Πελοποννήσου.</p>
    <p>Στην περιοχή βρίσκεται το Ησυχαστήριο του Αγίου Χαραλάμπους Καλαμακίου, το οποίο ιδρύθηκε μετά τους καταστροφικούς σεισμούς του 1928, που η Κόρινθος γέμισε ερείπια. Ο τότε Μητροπολίτης Δαμασκηνός στα πλαίσια της αναστηλώσεως των κτιρίων της περιοχής εξέφρασε την επιθυμία του για την ίδρυση ησυχαστηρίου στο εξωκκλήσι του Αγίου Χαραλάμπους.</p>
    <p>Ο Άγιος Χαράλαμπος έχει υψόμετρο 13 μέτρα από την επιφάνεια της θάλασσας, σε γεωγραφικό πλάτος 37,9200628062 και γεωγραφικό μήκος 23,0306823987. Οδηγίες για το πώς θα φτάσετε στον Άγιο Χαράλαμπο θα βρείτε εδώ:</p>
    <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyAjwwJzeFwQSFn0Z7Nl-18TV6_JW6ptiqw'}}
          center={this.state.center}
          zoom={this.state.zoom}
          onChange={this._onChange}
        >
          <AnyReactComponent
            lat={37.9322417}
            lng={23.0337205}
          />
        </GoogleMapReact>
      </div>
  </div>
    )
  }
}

export default Perioxi;
