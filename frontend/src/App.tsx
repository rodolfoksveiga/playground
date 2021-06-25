// Import components, functions, types, variables, and styles
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import NavigationBar from './components/NavigationBar'

// Component
export default function App() {
    return (
        <BrowserRouter>
            <NavigationBar />
            <Switch>
                <Route path="/" component={Home} exact />
            </Switch>
        </BrowserRouter>
    )
}
