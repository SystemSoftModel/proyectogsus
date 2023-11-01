import React from 'react'
import ReactDOM from 'react-dom/client'
import {Home} from './Home/Home'

import 'animate.css/animate.min.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'wowjs/dist/wow.js';
import './lib/jquery.simple-text-rotator.min.js';
import './lib/simpletextrotator.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home/>
  </React.StrictMode>,
)
