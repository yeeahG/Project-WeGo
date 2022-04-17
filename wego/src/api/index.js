import axios from 'axios';

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';
const API_KEY = process.env.REACT_APP_TRAVEL_ADVISOR_KEY;

// https://rapidapi.com/apidojo/api/travel-advisor/
const options = {
    params: {
      // bl_latitude: parseFloat('11.847676'),
      // tr_latitude: parseFloat('12.838442'),
      // bl_longitude: parseFloat('109.095887'),
      // tr_longitude: parseFloat('109.149359'),
      // bl_latitude: '11.847676',
      // tr_latitude: '12.838442',
      // bl_longitude: '109.095887',
      // tr_longitude: '109.149359',
    },
    headers: {
      'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
      'X-RapidAPI-Key': API_KEY
    }
  };
  
//   axios.request(options).then(function (response) {
//       console.log(response.data);
//   }).catch(function (error) {
//       console.error(error);
//   });
  
export const getPlacesData = async (type, sw, ne) => {
    try {
        const { data: {data} } = await axios.get(URL, {
          params: {
            // bl_latitude: parseFloat('11.847676'),
            // tr_latitude: parseFloat('12.838442'),
            // bl_longitude: parseFloat('109.095887'),
            // tr_longitude: parseFloat('109.149359'),
            bl_latitude: '11.847676',
            tr_latitude: '12.838442',
            bl_longitude: '109.095887',
            tr_longitude: '109.149359',
            // bl_latitude: sw.lat,
            // bl_longitude: sw.lng,
            // tr_longitude: ne.lng,
            // tr_latitude: ne.lat,
          },
          headers: {
            'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
            'X-RapidAPI-Key': API_KEY
          }
        });
        return data;
    } catch (error) {
      console.log(error);
    }
}