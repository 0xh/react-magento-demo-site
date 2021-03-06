import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import {loadRootCategory} from './actions/categoryActions';
import './styles/styles.css'; //Webpack can iport CSS files
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-carousel/dist/react-bootstrap-carousel.css';

const store = configureStore();
store.dispatch(loadRootCategory());

render (
    <Provider store={store}>
        <Router history={browserHistory} routes={routes} />
    </Provider>,
    document.getElementById('app')
);