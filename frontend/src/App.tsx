// Import components, functions, types, variables, and styles
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Container from 'react-bootstrap/Container'

import Home from './components/Home'
import NavigationBar from './components/NavigationBar'
import PostsList from './components/blog/PostsList'
import PostDetails from './components/blog/PostDetails'
import Register from './components/auth/Register'
import Login from './components/auth/Login'
import Profile from './components/auth/Profile'

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
                    <Route path="/user/" exact component={Profile} />
                    <Route path="/user/register/" exact component={Register} />
                    <Route path="/user/login/" exact component={Login} />
                </Switch>
            </Container>
        </BrowserRouter>
    )
}
