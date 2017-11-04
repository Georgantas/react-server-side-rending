
import React from 'react';
import HomePage from './pages/HomePage';
import UsersListPage from './pages/UsersListPage';

// required as part of 'react-router-config' -> cannot use JSX
export default [
    {
        ...HomePage,
        path: '/',
        exact: true
    },
    {
        ...UsersListPage,
        path: '/users'
    }
];
