import React from 'react';
import { Route, IndexRoute, List } from 'react-router';


import App from './components/app';
import Login from './components/login.js';
import Resume from './components/resume.js';
import Register from './components/register.js'
import UserList from './components/userList.js'

export default (
  <Route path='/' component={App}>
    <IndexRoute component={List} />
      <Route path="login" component={Login} />
      <Route path="register" component={Register} />
      <Route path="resume" component={Resume} />
      <Route path="userlist" component={UserList} />
  </Route>
);
