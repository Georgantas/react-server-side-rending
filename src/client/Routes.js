
import React from 'react';
import App from './App';
import HomePage from './pages/HomePage';
import UsersListPage from './pages/UsersListPage';

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
            }
        ]
    }
];
