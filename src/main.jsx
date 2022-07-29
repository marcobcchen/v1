import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter as Router } from 'react-router-dom'
import ScrollToView from './components/ScrollToView'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <ScrollToView>
        <App />
      </ScrollToView>
    </Router>
  </React.StrictMode>,
)
