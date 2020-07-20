import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/Chart';
import Map from '../components/Map';


export class WeatherList extends Component {
  renderWeather(cityData) {
    // Handle instances where city can't be found.
    if (!cityData) {
      return (
        <tr key={Math.random()}><td colSpan="4" className="text-center bg-light">No Data Available</td></tr>
      );
    }

    const { lon, lat } = cityData.city.coord;
    const tempsKelvin = cityData.list.map(weather => { return weather.main.temp });
    const temps = tempsKelvin.map(temp => {return temp * (9/5) - 459.67});
    const pressures = cityData.list.map(weather => { return weather.main.pressure });
    const humidities = cityData.list.map(weather => { return weather.main.humidity });
  
    return (    
      <div className="row" key={cityData.city.name}>
        <div className="col-sm-12 col-md-6 col-lg-3"><Map lon={lon} lat={lat} /></div>
        <div className="col-sm-12 col-md-6 col-lg-3"><Chart data={temps} units="&deg;F" color='#28a745' /></div>
        <div className="col-sm-12 col-md-6 col-lg-3"><Chart data={pressures} units=" hPa" color='#18abc5' /></div>
        <div className="col-sm-12 col-md-6 col-lg-3"><Chart data={humidities} units="%" color='#7a2ba0' /></div>
      </div>
    );
  }
  render() {
    return (
      <>
      <div className="row">
        <div className="col-sm-12 col-md-6 col-lg-3">City</div>
        <div className="col-sm-12 col-md-6 col-lg-3">Temperature (&deg;F)</div>
        <div className="col-sm-12 col-md-6 col-lg-3">Pressure (hPa)</div>
        <div className="col-sm-12 col-md-6 col-lg-3">Humidity (%)</div>
      </div>
      {this.props.weather.map(this.renderWeather)}
      </>
    );
  }
}

// ES6 - equivalent to function mapStateToProps(state) {
function mapStateToProps({weather}) {
  // ES6 - equivalent to return { weather: state.weather };
  return { weather };
}

export default connect (mapStateToProps)(WeatherList);