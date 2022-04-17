import axios from 'axios';

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';
const API_KEY = process.env.REACT_APP_TRAVEL_ADVISOR_KEY;

// https://rapidapi.com/apidojo/api/travel-advisor/
const options = {
    params: {
      bl_latitude: '11.847676',
      tr_latitude: '12.838442',
      bl_longitude: '109.095887',
      tr_longitude: '109.149359',
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
  
export const getPlacesDate = async () => {

    try {
        const { data: {data}} = await axios.get(URL, options);
        return data;
    } catch (error) {
        console.log(error);
    }
}