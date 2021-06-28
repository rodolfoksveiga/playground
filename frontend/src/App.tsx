// Import components, functions, types, variables, and styles
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Container from 'react-bootstrap/Container'

import Home from './pages/Home'
import NavigationBar from './components/NavigationBar'
import PostsList from './pages/blog/PostsList'
import PostDetails from './pages/blog/PostDetails'

// Component
export default function App() {
    return (
        <BrowserRouter>
            <Container fluid className="pt-1 pt-md-2 pt-lg-3">
                <NavigationBar />
                <Switch>
                    <Route path="/" component={Home} exact />
                    <Route path="/blog/" component={PostsList} exact />
                    <Route path="/blog/:id/" exact component={PostDetails} />
                </Switch>
            </Container>
        </BrowserRouter>
    )
}
