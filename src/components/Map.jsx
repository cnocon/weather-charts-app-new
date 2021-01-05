 import React from 'react';
 import { GoogleMap } from '@react-google-maps/api';

 const containerStyle = {
   marginLeft: '20px',
   width: '260px',
   height: '220px',
   marginRight: '20px',
   position: 'static'
 };
 
 function Map({...props}) {
  const { lat, lon } = props;
  const [map, setMap] = React.useState(null)
  const center = { lat: lat, lng: lon };

  const onLoad = React.useCallback(function callback(mapInstance) {
    setMap(mapInstance)
  }, [])

  const onUnmount = React.useCallback(function callback(mapInstance) {
    setMap(null)
  }, [])

  return (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
    
  )
}

export default React.memo(Map)
