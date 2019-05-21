import 'bootstrap';
import '../styles/main.scss';
import firebase from 'firebase/app';

import apiKeys from './helpers/apiKeys.json';

import print from './components/auth/auth';
import birfday from './components/birfday/birfday';

const init = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  print.authStringBuilder();
  birfday.birfdayStringBuilder();
};

init();
