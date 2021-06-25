// Import components, functions, types, variables, and styles
import { StrictMode } from 'react'
import ReactDOM from 'react-dom'

import App from './App'

import 'bootstrap/dist/css/bootstrap.min.css'

// Component
ReactDOM.render(
    <StrictMode>
        <App />
    </StrictMode>,
    document.getElementById('root')
)
