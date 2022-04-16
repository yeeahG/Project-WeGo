//시도2
//   let map;

//   function initMap() {
//     map = new google.maps.Map(document.getElementById("map"), {
//       center: { lat: -34.397, lng: 150.644 },
//       zoom: 8,
//     });
//   }

//   window.initMap = initMap;

//   return (
//     <div>
//       <h3>
//         maps

//         {initMap}
//       </h3>



//       {/* <div className={classes.mapContainer}>
//       <GoogleMapReact
//         bootstrapURLKeys={{key: process.env.REACT_APP_GOOGLEMAP_API_KEY}}
//         // defaultCenter={''}
//         center={coordinates}
//         defaultZoom={14}
//         margin={[50, 50, 50, 50]}
//         // options={''}
//         // onChange={''}
//         // onChildClick={''}
//         // yesIWantToUseGoogleMapApiInternals
//       >

//       </GoogleMapReact>
//     </div> */}

//     </div>
//   )
// }


//시도3
// import React, { useCallback, useEffect, useRef } from "react";

// function Map() {
//   const mapRef = useRef(null);

//   const initMap = useCallback(() => {
//     new window.google.maps.Map(mapRef.current, {
//       center: { lat: -34.397, lng: 150.644 },
//       zoom: 8,
//     });
//   }, [mapRef]);

//   useEffect(() => {
//     initMap();
//   }, [initMap]);

//   return (
//     <div
//       className="map"
//       style={{ width: "500px", height: "500px" }}
//       ref={mapRef}
//     ></div>
//   );
// }

// export default Map

import React, {useState, useEffect} from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

import { AppBar, Typography, useMediaQuery} from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab';
import useStyles from './styles.js';


const containerStyle = {
  width: '100%',
  height: '85vh'
};

const coordinates = {
  lat: 38.0,
  lng: -100.0,
};

const Map = ({setCoordinates, setBounds, coordinates}) => {
  const classes = useStyles();
  const isMobile = useMediaQuery('(min-width:600px)');
  // const coordinates = {lat:0, lng:0};
  
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_GOOGLEMAP_API_KEY
  })


  const [map, setMap] = useState(null)

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={coordinates}
        zoom={14}
        onLoad={onLoad}
        onUnmount={onUnmount}
        margin={[50, 50, 50, 50]}
        options={''}
        onChange={(e) => {
          console.log(e);
          setCoordinates({ lat:e.center.lat, lng: e.center.lng})
        }}
        onChildClick={''}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
  ) : <></>
}
export default Map