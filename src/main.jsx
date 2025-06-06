import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Modal from 'react-modal' // Import Modal

// Set the app element for react-modal to handle accessibility
// This ensures react-modal knows which element to hide from screen readers
Modal.setAppElement('#root') // Move this line here

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App />
    </StrictMode>,
)