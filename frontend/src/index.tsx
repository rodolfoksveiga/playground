// Import components, functions, types, variables, and styles
import { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import App from './App'
import { store } from './store'

import 'bootstrap/dist/css/bootstrap.min.css'

// Component
ReactDOM.render(
    <StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </StrictMode>,
    document.getElementById('root')
)
