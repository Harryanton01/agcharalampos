import React from 'react';
import './App.css';
import Navbar from './components/navbar/navbar';
import Banner from './components/banner/banner';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Arxiki from './pages/arxiki/arxiki';
import Epikinonia from './pages/epikinonia/epikinonia';
import Nea from './pages/nea/nea';
import Foto from './pages/fotografies/fotografies';
import Drasi from './pages/drasi/drasi';
//import Stoixeia from './pages/stoixeia/stoixeia';
import Successform from './pages/success/success';
import Tilefona from './pages/tilefona/tilefona';
import Selides from './pages/selides/selides';
import Perioxi from './pages/perioxi/perioxi';
import Eggrafi from './pages/eggrafi/eggrafi';
import Actions from './pages/actions/actions';
import Prosfores from './pages/prosfores/prosfores';
import Announcement from './pages/announcement/announcement';
import Enimerosi from './pages/enimerosi/enimerosi';
import Xorigoi from './pages/xorigos/xorigos';
import Ethelontiki from './pages/ethelontiki/ethelontiki';
import Fotoethelontiki from './pages/fotoethelontiki/fotoethelontiki';
import Elamazimas from './pages/elamazimas/elamazimas';
import XorigosA from './pages/XorigosA/XorigosA';

function App() {
  return (  
    <div className="App">
      <Navbar />
      <Router>
        <div>
          <Switch>
            <Route exact path="/home" component={Arxiki}/>
            <Route exact path="/contact" component={Epikinonia}/>
            <Route exact path="/news" component={Nea}/>
            <Route exact path="/photo" component={Foto}/>
            <Route exact path="/location" component={Perioxi}/>
            <Route exact path="/organization" component={Drasi}/>
            <Route exact path="/volunteer" component={Ethelontiki}/>
            <Route exact path="/volunteer-images" component={Fotoethelontiki}/>
            <Route exact path="/volunteer-about-us" component={Elamazimas}/>
            <Route exact path="/member-announcements" component={Enimerosi}/>
            <Route exact path="/sign-up" component={Eggrafi}/>
            <Route exact path="/numbers" component={Tilefona}/>
            <Route exact path="/success" component={Successform}/>
            <Route exact path="/discounts" component={Prosfores}/>
            <Route exact path="/action" component={Actions}/>
            <Route exact path="/sponsors" component={Xorigoi}/>
            <Route exact path="/sponsor-announcements" component={XorigosA}/>
            <Route exact path="/websites" component={Selides}/>
            <Route exact path="/announcements" component={Announcement}/>
            <Route path="/" component={Arxiki} />
          </Switch>
        </div>
      </Router>
      <Banner />
    </div>
  );
}

export default App ;
