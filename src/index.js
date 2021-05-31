import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

import store from './store'
import {Provider} from 'react-redux'
store.subscribe(()=>console.log(store.getState()))
ReactDOM.render(
  <>
  <Provider store={store}>
  <App />
  </Provider>
    <ToastContainer></ToastContainer>
  </>,
  document.getElementById('root')
);


