// that is browser folder
//Startup poit for client side application

import React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import Routes from "../isomorphic/Routes"

ReactDom.hydrate(
    <BrowserRouter>
        <Routes/>
    </BrowserRouter>
    , document.getElementById('root'))