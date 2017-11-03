
import React from 'react';
import Home from './components/Home';
import UsersList from './components/UsersList';

// required as part of 'react-router-config' -> cannot use JSX
export default [
    {
        path: '/',
        component: Home,
        exact: true
    },
    {
        path: '/users',
        component: UsersList
    }
];
