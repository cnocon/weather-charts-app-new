import React from 'react';
import { GoogleMap } from '@react-google-maps/api';
 
const containerStyle = {
  width: '200px',
  height: '200px',
  position: 'static',
};
 
function Map({lat, lon}) {
  const center = { lat: lat, lng: lon };

  return (
    
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={8}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
    
  )
}
 
export default React.memo(Map)