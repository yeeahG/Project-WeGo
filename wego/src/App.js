import React, {useState, useEffect} from 'react';
import {CssBaseline, Grid} from '@material-ui/core';
import Header from './components/Header/Header';
import List from './components/List/List'
import Map from './components/Map/Map'
import { getPlacesData } from './api';
import './App.css';


function App() {
  const [places, setPlaces] = useState([]);
  //get으로 api에서 받아온 data들을 지도에 표시
  const [coordinates, setCoordinates] = useState({});
  const [bounds, setBounds] = useState({});
  
  //유저의 첫 화면에 뜨는 것
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords: {latitude, longitude}}) => {
      setCoordinates({lat: latitude, lng: longitude});
    })
  },[]);

  useEffect(() => {
    console.log(coordinates, bounds);
    getPlacesData()
      .then((data) => {
        // console.log(data);
        console.log(data[0].name);
        setPlaces(data);
      })
  }, [coordinates, bounds]);


  return (
    <>
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{ width: '100%'}}>

        <Grid item xs={12} md={4}>
          <List places={places}/>
        </Grid>

        <Grid item xs={12} md={8}>
          <Map 
            setCoordinates={setCoordinates}
            setBounds={setBounds}
            coordinates={coordinates}
          />
        </Grid>

      </Grid>
    </>
  );
}

export default App;
