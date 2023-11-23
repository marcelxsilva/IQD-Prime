/* eslint-disable no-console */
import Reactotron from 'reactotron-react-js';
import { REACT_APP_ENV } from '~/utils';

declare global {
  interface Console {
    tron: any;
  }
}

if (REACT_APP_ENV === 'DEV') {
  const tron = Reactotron.configure().connect();
  console.tron = tron;
}
