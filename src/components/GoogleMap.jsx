import React, { useEffect, useRef } from 'react';
import {Loader} from 'google-maps';
const MAPS_API_KEY = 'AIzaSyCSXTUEm9DgP-MHuHdbiIxaWZj12z7sq1I';

const GoogleMap = ({ lat, lon }) => {
  const mapEl = useRef(null);
  console.log(lat)
  console.log(lon)

  const renderMap = async(ref) => {

    const loader = new Loader(MAPS_API_KEY);
    const google = await loader.load();
  /**
    * new google.maps.Map is how we create an embedded google map inside our document
    * google.maps.map takes a reference to a DOM node (this.refs.map), then
    * it finds that element on the screen, and renders an embedded map into it
    */
    const map = new google.maps.Map(document.getElementById('map'), {
    /**
      * Level 12 zoom allows zooming in enough to get good glimpse of city
      */
      zoom: 8,
      center: {
        lat: lat,
        lng: lon
      }
    });
    console.log(map)
  }

  useEffect(() => {
    renderMap(mapEl);
  })
  
  return <div ref={mapEl} id='map' style={{position: 'static', minHeight: '300px', width: '100%'}}></div>;
  
}

export default GoogleMap;