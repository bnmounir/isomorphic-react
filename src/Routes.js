import React from 'react';
import Home from './client/pages/Home';
import UsersList from './client/pages/UsersList';
import NotFound from './client/pages/NotFound';
import AdminsList from './client/pages/AdminsList';
import App from './client/components/App';

export default [
    {
        ...App,
        routes: [
            {
                ...Home,
                path: '/',
                exact: true
            },
            {
                ...UsersList,
                path: '/users',
                exact: true
            },

            {
                ...AdminsList,
                path: '/admins',
                exact: true
            },
            {
                ...NotFound
            }
        ]
    }
];
