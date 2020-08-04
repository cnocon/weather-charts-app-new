import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/Chart';
import Map from '../components/Map';

export class WeatherList extends Component {
  renderWeather(cityData) {
    console.log(cityData);
    // Handle instances where city can't be found.
    if (!cityData) {
      return (
        <tr key={Math.random()}><td colSpan="4" className="text-center bg-light">No Data Available</td></tr>
      );
    }
    const lon = cityData.lon;
    const lat = cityData.lat;
    const tempsKelvin = cityData.daily.map(weather => { return weather.temp.day });
    const temps = tempsKelvin.map(temp => {return temp * (9/5) - 459.67});
    const pressures = cityData.daily.map(weather => { return weather.pressure });
    const humidities = cityData.daily.map(weather => { return weather.humidity });
  
    return (    
      <div className="row mb-5 mt-5" key={cityData.lat}>
        <div className="col-sm-12 col-md-6 col-lg-3 map"><Map lon={lon} lat={lat} /></div>
        <div className="col-sm-12 col-md-6 col-lg-3 chart"><Chart data={temps} units="&deg;F" color='#fff766' /></div>
        <div className="col-sm-12 col-md-6 col-lg-3 chart"><Chart data={pressures} units=" hPa" color='#20c997' /></div>
        <div className="col-sm-12 col-md-6 col-lg-3 chart"><Chart data={humidities} units="%" color='#3369ff' /></div>
      </div>
    );
  }
  render() {
    return (
      <>
      <div className="row">
        <div className="col-sm-12 col-md-6 col-lg-3"><h4>City</h4></div>
        <div className="col-sm-12 col-md-6 col-lg-3"><h4>Temperature (&deg;F)</h4></div>
        <div className="col-sm-12 col-md-6 col-lg-3"><h4>Pressure (hPa)</h4></div>
        <div className="col-sm-12 col-md-6 col-lg-3"><h4>Humidity (%)</h4></div>
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