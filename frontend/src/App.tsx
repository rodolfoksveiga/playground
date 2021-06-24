// Import components, functions, types, variables, and styles
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './pages/Home'

// Component
export default function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Home} exact />
            </Switch>
        </BrowserRouter>
    )
}
