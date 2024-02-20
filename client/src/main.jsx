import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Store } from './redux/store/store.js'
import {Provider} from "react-redux"
import App from './App.jsx'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={Store}>
    <BrowserRouter>
    <App />
    </BrowserRouter>    
    </Provider>
  </React.StrictMode>,
)
