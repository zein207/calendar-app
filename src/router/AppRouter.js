import React from 'react';
import { Route } from 'react-router-dom';
import {
    BrowserRouter as Router,
    Switch, Redirect
} from "react-router-dom";

import { LoginScreen } from '../components/auth/LoginScreen';
import { CalendarScreen } from '../components/calendar/CalendarScreen';


export const AppRouter = () => {

    return (
        <Router>
            <div>
                <Switch>

                    <Route path="/login" component={ LoginScreen } exact />
                    <Route path="/" component={ CalendarScreen } exact />

                    <Redirect to="/" />

                </Switch>
            </div>
        </Router>
    )
}