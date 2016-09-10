import React, { Component } from 'react';
import { Link } from 'react-router';

export default class NavBar extends Component {
  render() {
    return (
      <div>
      <p />
      
        <button><Link to='/'>Home</Link></button>
        <button><Link to='/resume'>Resumes</Link></button>
        <button><Link to='/login'>Login</Link></button>
        <button><Link to='/register'>Register</Link></button>
        <button><Link to='/userlist'>All Users</Link></button>
      </div>
    )
  }
}
