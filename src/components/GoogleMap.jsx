import React, { useEffect, useRef } from 'react';
import {Loader} from 'google-maps';
const MAPS_API_KEY = 'AIzaSyCSXTUEm9DgP-MHuHdbiIxaWZj12z7sq1I';

const GoogleMap = ({ lat, lon }) => {
  const mapEl = useRef(null);

  const renderMap = async() => {
    const loader = new Loader(MAPS_API_KEY);
    const google = await loader.load();

    /**
    * new google.maps.Map is how we create an embedded google map inside our document
    * google.maps.map takes a reference to a DOM node (this.refs.map), then
    * it finds that element on the screen, and renders an embedded map into it
    */
    const map = new google.maps.Map(mapEl.current, {
    /**
      * Level 12 zoom allows zooming in enough to get good glimpse of city
      */
      zoom: 8,
      center: {
        lat: lat,
        lng: lon
      }
    });
  }

  useEffect(() => {
    renderMap();
  })
  
  return <div ref={mapEl} id='map' style={{position: 'static', minHeight: '300px', width: '100%'}}></div>;
  
}

export default GoogleMap;