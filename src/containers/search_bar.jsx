import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

export class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    }
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
  }
  onInputChange(event) {
    this.setState({ term: event.target.value });
  }
  onFormSubmit(event) {
    event.preventDefault();
    this.props.fetchWeather(this.state.term);
    this.setState({term: ''});
  }
  render() {
    return (
      <form className="input-group col-md-6 mt-4 mb-4" onSubmit={this.onFormSubmit}>
        <input placeholder="Search for a City" className="col-9"
          value={this.state.term}
          onChange={this.onInputChange} />
        <button className="btn btn-primary col-3" type="submit">Search</button>
      </form>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}

// we're passing null just because mapDispatchToProps has to be the 2nd argument - the first is supposed to be some state but we don't need that here.
export default connect(null, mapDispatchToProps)(SearchBar);