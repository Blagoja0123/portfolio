import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import LanguageProvider, { LanguageContext } from './Context/LanguageContext'
import { useContext } from 'react'


ReactDOM.createRoot(document.getElementById('root')).render(
    <LanguageProvider>
        <App />
    </LanguageProvider>
)
