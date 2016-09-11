import React from 'react';
import Authentication from '../authentication';


var Login = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState() {
    return { error: false }
  },

  onSubmitLogin(event) {
    event.preventDefault();

    const email = this.refs.email.value;
    const pass = this.refs.password.value;

    Authentication.login(email, pass, (loggedIn) => {
      if (loggedIn)
        this.context.router.push({pathname: '/'});
      else
        return this.setState({ error: true });
    });
  },

  render() {
    return (
      <section className="column is-offset-6 is-4">
        <h1 className="title">Login</h1>
        <form onSubmit={this.onSubmitLogin}>
          <p className="control">
            <input className="input" type="email" placeholder="Email" ref="email"/>
          </p>
          <p className="control">
            <input className="input" type="password" placeholder="Password" ref="password"/>
          </p>
          <p className="control">
            <button className="button is-success">
              Login
            </button>
          </p>
        </form>
        {this.state.error && (
            <p>Bad login information</p>
        )}
      </section>
    )
  }
})

export default Login;
