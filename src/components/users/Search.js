import React, { Component } from "react";

class Search extends Component {
  state = {
    text: ""
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.searchUsers(this.state.text);
    this.setState({ text: "" });
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <div>
        <form autoComplete="off" onSubmit={this.onSubmit} className="form">
          <input
            autoComplete="false"
            type="text"
            name="text"
            value={this.state.text}
            placeholder="Search Users..."
            onChange={this.onChange}
          />
          <input
            type="submit"
            value="Search"
            className="btn btn-dark btn-block"
          />
        </form>
      </div>
    );
  }
}

export default Search;
