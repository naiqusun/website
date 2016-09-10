render() {
  return (
    <div>
      <input
        value={this.state.term}
        onChange={event => this.setState({term: event.target.value})}
        />
      <select id="Role" onChange={change => this.setState({role:change.target.value})}>
        <option role="Reviewer">Reviewer</option>
        <option role="Student">Student</option>
      </select>
      <p></p>
      {this.state.term}'s {this.state.role} Account
    </div>
    );
}
}
