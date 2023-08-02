import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { LoaderContextProvider } from './context/LoaderContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <LoaderContextProvider>
      <App />
    </LoaderContextProvider>
  // </React.StrictMode>,
)
