import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/Chart';
import GoogleMap from '../components/GoogleMap';

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
      <tr key={cityData.city.name}>
        <th scope="row"><GoogleMap lon={lon} lat={lat} /></th>
        <td><Chart data={temps} units="&deg;F" color='#28a745' /></td>
        <td><Chart data={pressures} units=" hPa" color='#18abc5' /></td>
        <td><Chart data={humidities} units="%" color='#7a2ba0' /></td>
      </tr>
    );
  }
  render() {
    return (
      <table className="table table-hover table-responsive-sm table-bordered table-sm">
        <thead>
          <tr>
            <th scope="col">City</th>
            <th scope="col">Temperature (&deg;F)</th>
            <th scope="col">Pressure (hPa)</th>
            <th scope="col">Humidity (%)</th>
          </tr>
        </thead>
        <tbody>{this.props.weather.map(this.renderWeather)}</tbody>
      </table>
    );
  }
}

// ES6 - equivalent to function mapStateToProps(state) {
function mapStateToProps({weather}) {
  // ES6 - equivalent to return { weather: state.weather };
  return { weather };
}

export default connect (mapStateToProps)(WeatherList);