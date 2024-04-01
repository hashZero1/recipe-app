import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { BrowserRouter } from 'react-router-dom'
import { ApiProvider } from './context/ApiContext.jsx'
import { AuthProvider } from './context/AuthContext.jsx'
import {CartProvider } from './context/CartContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
<StrictMode>
  <AuthProvider>
    <BrowserRouter>
    <ApiProvider>
      <CartProvider>
      <App />
      </CartProvider>
    </ApiProvider>
    </BrowserRouter>
  </AuthProvider>
</StrictMode>
)
