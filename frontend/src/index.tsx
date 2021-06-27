// Import components, functions, types, variables, and styles
import { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import App from './App'
import { store, persistor } from './store'

import 'bootstrap/dist/css/bootstrap.min.css'

// Component
ReactDOM.render(
    <StrictMode>
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <App />
            </PersistGate>
        </Provider>
    </StrictMode>,
    document.getElementById('root')
)
