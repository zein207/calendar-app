import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route } from 'react-router-dom';
import {
    BrowserRouter as Router,
    Switch, Redirect
} from "react-router-dom";
import { startChecking } from '../actions/auth';

import { LoginScreen } from '../components/auth/LoginScreen';
import { CalendarScreen } from '../components/calendar/CalendarScreen';


export const AppRouter = () => {

    const dispatch = useDispatch();

    useEffect(() => {

      dispatch( startChecking() );

    }, [dispatch]);
    

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
