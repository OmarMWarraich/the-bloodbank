import React , {Component} from 'react';
import {Router , Route } from 'react-router';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import App from './App';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Home from './components/Home';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();






export default class Routes extends Component {
    render(){
        return(
            <MuiThemeProvider>
                <Router history={Router}>
                    <Route path="/" component={App}>
                         <Route path="/signup" component={SignUp} />
                         <Route path="/login" component={Login} />
                         <Route path="/home" component={Home} />
                    </Route>
                </Router>
            </MuiThemeProvider>

        );
    }
}