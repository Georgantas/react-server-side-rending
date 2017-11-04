
import React from 'react';
import App from './App';
import HomePage from './pages/HomePage';
import UsersListPage from './pages/UsersListPage';
import NotFoundPage from './pages/NotFoundPage';

// required as part of 'react-router-config' -> cannot use JSX
export default [
    {
        ...App, // no path speicifed -> always displayed on the screen
        routes: [
            {
                ...HomePage,
                path: '/',
                exact: true
            },
            {
                ...UsersListPage,
                path: '/users'
            },{
                ...NotFoundPage // we put this here instead of the route, because we still want to show the navbar from 'App'
            }
        ]
    }
];
