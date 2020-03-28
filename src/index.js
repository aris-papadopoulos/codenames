import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import Game from './Game';
import NotFound from './NotFound';
import { ToastProvider } from 'react-toast-notifications';
import { Router, Route, Switch } from 'react-router-dom';
import history from './utilities';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(
    <React.StrictMode>
        <ToastProvider autoDismissTimeout={2000} placement={'bottom-right'}>
            <Router history={history}>
                <Switch>
                    <Route exact path="/game/:id" component={Game} />
                    <Route exact path="/" component={App} />
                    <Route path="*" component={NotFound} />
                </Switch>
            </Router>
        </ToastProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
