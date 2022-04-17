import React, {useState, useEffect} from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import { AppBar, Typography, useMediaQuery} from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab';
import useStyles from './styles.js';




const Map = ({setCoordinates, setBounds, coordinates, places}) => {
  const classes = useStyles();
  const isMobile = useMediaQuery('(min-width:600px)');
  // const coordinates = {lat:0, lng:0};
  //console.log(setCoordinates);
  //console.log(setBounds);
  console.log(places[0]);

  const containerStyle = {
    width: '100%',
    height: '85vh'
  };
  
  // const coordinates = {
  //   lat: 38.0,
  //   lng: -100.0,
  // };
  
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
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLEMAP_API_KEY }}
        mapContainerStyle={containerStyle}
        defaultCenter={coordinates}
        center={coordinates}
        zoom={14}
        onLoad={onLoad}
        onUnmount={onUnmount}
        margin={[50, 50, 50, 50]}
        options={''}
        onChange={(e) => {
          console.log(e);
          setCoordinates({lat: e.places.lat, lng: e.places.lng})
          setBounds({ne : e.marginBounds.ne, sw: e.marginBounds.sw})
        }}
        onChildClick={''}
      >
        { /* Child components, such as markers, info windows, etc. */ }

        <Marker
          // key={store.id}
          // title={store.store_name}
          // name={store.store_name}
          // position={{ lat: store.lat, lng: store.lng }}
          // icon={{
          //   url: "/Image/marker.png",
          // }}
          title={"one"}
          position={coordinates}
        />
      {/* {places.map(() => (
        <Marker
          // key={store.id}
          // title={store.store_name}
          // name={store.store_name}
          // position={{ lat: store.lat, lng: store.lng }}
          // icon={{
          //   url: "/Image/marker.png",
          // }}
          title={"one"}
        />
    ))} */}
      </GoogleMap>
  ) : <>
  </>
}
export default Map

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