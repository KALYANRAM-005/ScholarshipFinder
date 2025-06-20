
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import { UserProvider } from './UserContext.jsx'
import { AuthContextProvider } from './AuthContext.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProvider>
     <App/>
    </AuthContextProvider>
  </React.StrictMode>
)
