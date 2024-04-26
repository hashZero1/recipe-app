import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { BrowserRouter } from 'react-router-dom'
import { ApiProvider } from './context/ApiContext.jsx'
import { AuthProvider } from './context/AuthContext.jsx'
import {CartProvider } from './context/CartContext.jsx'
import { SkeletonTheme } from 'react-loading-skeleton'

ReactDOM.createRoot(document.getElementById('root')).render(

  <AuthProvider>
    <SkeletonTheme baseColor='#313131' highlightColor='#525252'> 
      <BrowserRouter>
      <ApiProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </ApiProvider>
      </BrowserRouter>
    </SkeletonTheme>
  </AuthProvider>

 
)
