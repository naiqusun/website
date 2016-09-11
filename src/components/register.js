import React, { Component } from 'react';
import { Route } from 'react-router';
import  Authentication from '../authentication.js'


class RegisterForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: false,
      errorMsg: ''
    };
  }

  onSubmitRegister (event) {
    event.preventDefault();

    if(pass.length < 5 || pass !== confirmPassword) {
      this.setState({
        error: true,
        errorMsg: 'Password is too short or does not match'
      })
    } else {
      authentication.register(email, pass, confirmPassword, (loggedIn) => {
        if (loggedIn)
          this.context.router.push({pathname: '/'});
        else
          return this.setState({ error: true });
      });
    }
  }

  render () {
    return (
      <section className="column is-offset-6 is-4">
        <h1 className="title">Register</h1>
        <form onSubmit={this.onSubmitRegister}>
          <p className="control">
            <input className="input" type="email" placeholder="Email" ref={(ref) => this.email = ref}/>
          </p>
          <p className="control">
            <input className="input" type="password" placeholder="Password" ref={(ref) => this.password = ref}/>
          </p>
          <p className="control">
            <input className="input" type="password" placeholder="Confirm Password" ref={(ref) => this.confirmPassword = ref}/>
          </p>
          <p className="control">
            <button className="button is-primary">
              Register
            </button>
          </p>
        </form>
        {this.state.error && (
            <p style={styles.error}>{this.state.errorMsg}</p>
        )}
      </section>
    )
  }
};

export default RegisterForm;
