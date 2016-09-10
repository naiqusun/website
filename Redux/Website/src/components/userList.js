import React, { Component } from 'react';
import ajax from 'superagent';


export default class UserList extends Component {
  constructor(props) {
      super(props);

      this.state = { commits: [] };
  };

  componentWillMount() {
    ajax.get('https://api.github.com/repos/facebook/react/commits')
        .end((error, response) => {
            if (!error && response) {
                console.log(response.body)
                this.setState({ commits: response.body });
            } else {
                console.log('There was an error fetching from GitHub', error);
            }
        }
    );
  }

  render() {
    return (
      <div>
        {this.state.commits.map((commit, index) => (
          <p key={index}>Some commit data here.</p>))}
      </div>);
  }

}
