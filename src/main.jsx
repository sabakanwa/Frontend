import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import  'bootstrap/dist/css/bootstrap.min.css';
import GlobalContextProvider from './Context/context.jsx';
import CartContextProvider from './Users/Context/addToCart/Context.jsx';
import { BrowserRouter } from 'react-router-dom';


ReactDOM.createRoot(document.getElementById('root')).render(
  
    <GlobalContextProvider>
      <React.StrictMode>
        <CartContextProvider>
        <BrowserRouter>
    <App/>
    </BrowserRouter>
    </CartContextProvider>
    </React.StrictMode>,
    </GlobalContextProvider>

)
