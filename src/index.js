import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { FirebaseAppProvider } from 'reactfire';

const firebaseConfig = {
  apiKey: "AIzaSyDPSs9RvRge1AhXc2kVqOiXQmDgB6gRJ8c",
  authDomain: "agcharalampos-ef2e0.firebaseapp.com",
  databaseURL: "https://agcharalampos-ef2e0.firebaseio.com",
  projectId: "agcharalampos-ef2e0",
  storageBucket: "agcharalampos-ef2e0.appspot.com",
  messagingSenderId: "259145211828",
  appId: "1:259145211828:web:e825bb39ab9af74afb1ce1",
  measurementId: "G-VZMQ0NZZ6Y"
};

ReactDOM.render(
  <React.StrictMode>
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <App />
    </FirebaseAppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
