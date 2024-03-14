import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { BrowserRouter } from 'react-router-dom'
import { ApiProvider } from './context/ApiContext.jsx'
import { AuthProvider } from './context/AuthContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(

    <BrowserRouter>
    <AuthProvider>
    <ApiProvider>
      <App />
    </ApiProvider>
    </AuthProvider>
    </BrowserRouter>
    
)
