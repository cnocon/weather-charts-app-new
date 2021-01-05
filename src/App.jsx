import React, { Component } from 'react';
import SearchBar from './containers/search_bar.jsx';
import WeatherList from './containers/weather_list.jsx';
import { LoadScript } from '@react-google-maps/api';
require('dotenv').config();

export default class App extends Component {  
  render() {
    return (
      <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
        <h1>7-Day Weather Forecast</h1>
        <div className="row">
          <div className="col"><SearchBar /></div>
        </div>
        <div className="row">
          <div className="col"><WeatherList /></div>
        </div>
      </LoadScript>
    );
  }
}