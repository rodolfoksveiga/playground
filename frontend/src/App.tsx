// Import components, functions, types, and variables
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'

import Home from './components/Home'
import NavigationBar from './components/NavigationBar'
import PostsList from './components/blog/PostsList'
import PostDetails from './components/blog/PostDetails'
import Register from './components/auth/Register'
import Activate from './components/auth/Activate'
import Login from './components/auth/Login'
import Profile from './components/auth/Profile'
import checkUser from './actions/checkUser'
import loadUser from './actions/loadUser'
import { TRootState } from './reducers/rootReducer'
import { useEffect } from 'react'

// Types and interfaces
interface IAppProps {
    isAuthenticated: boolean
    token: null | string
    checkUser: Function
    loadUser: Function
}

// Component
export function App({
    isAuthenticated,
    token,
    checkUser,
    loadUser
}: IAppProps) {
    useEffect(() => {
        checkUser(token)
        if (isAuthenticated) {
            loadUser(token)
        }
    }, [isAuthenticated, token, checkUser, loadUser])

    return (
        <BrowserRouter>
            <NavigationBar />
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/blog/" component={PostsList} exact />
                <Route path="/blog/:id/" exact component={PostDetails} />
                <Route path="/user/" exact component={Profile} />
                <Route path="/user/register/" exact component={Register} />
                <Route
                    path="/user/activate/:userId/:token/"
                    exact
                    component={Activate}
                />
                <Route path="/user/login/" exact component={Login} />
            </Switch>
        </BrowserRouter>
    )
}

// Connect to Redux
const mapStateToProps = (state: TRootState) => ({
    isAuthenticated: state.auth.isAuthenticated,
    token: state.auth.token
})

export default connect(mapStateToProps, { checkUser, loadUser })(App)
