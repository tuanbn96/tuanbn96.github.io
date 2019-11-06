import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {CartProvider} from './contexxs/cart';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(<CartProvider><App/></CartProvider>, document.getElementById('root'));


serviceWorker.unregister();
