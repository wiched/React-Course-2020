import React, { Component } from 'react'

export class SearchBar extends Component {
  state = {
    term: ''
  }
  onInputChange = (event) => {
    this.setState({ term: event.target.value })

  }

  onFormSubmit = (event) => {
    event.preventDefault();

    // TODO: Make sure we call callback
    // from parent component
    // AIzaSyD9CCt8MX7AD7OL8BmbMunVvMjpwRYyHpc
    this.props.onFormSubmit(this.state.term)
  }

  render() {
    return (
      <div className="search-bar ui segment">
        <form action="" className="ui form" onSubmit={this.onFormSubmit} >
          <div className="field">
            <label>Video Search</label>
            <input value={this.state.term} onChange={this.onInputChange} type="text" />
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar
