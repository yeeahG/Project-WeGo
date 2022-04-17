import React, {useState} from 'react'
import { CircularProgress, Grid, Typography, MenuItem, FormControl, Select, InputLabel } from '@material-ui/core'
import PlaceDetails from '../PlaceDatails/PlaceDatails'

//46:34
const List = () => {
  const [type, setType] = useState('restaurants');
  const [rating, setRating] = useState('');
  const places = [
    {name: 'Cool Place'},
    {name: 'Delicious Food'},
    {name: 'Good'},
    {name: 'Cool Place'},
    {name: 'Delicious Food'},
    {name: 'Good'},
    {name: 'Cool Place'},
    {name: 'Delicious Food'},
  ];

  return (
    <div>
        <Typography variant="h4">
          Restaurants, Hotels & Attractions around you
        </Typography>

        <FormControl>
          <InputLabel>Type</InputLabel>
          <Select value={type} onChange={(e) => setType(e.target.value)}>
            <MenuItem value="restaurants">Restaurants</MenuItem>
            <MenuItem value="hotels">Hotels</MenuItem>
            <MenuItem value="attractions">Attractions</MenuItem>
          </Select>
        </FormControl>

        <FormControl>
          <InputLabel>Rating</InputLabel>
          <Select value={rating} onChange={(e) => setRating(e.target.value)}>
            <MenuItem value={0}>All</MenuItem>
            <MenuItem value={3}>Above 3.0</MenuItem>
            <MenuItem value={4}>Above 4.0</MenuItem>
            <MenuItem value={4.5}>Above 4.5</MenuItem>
          </Select>
        </FormControl>


        <Grid container spacing={3}>
          {/*Only have places*/}
          {places ?.map((places, i) => (
            <Grid item key={i} xs={12}>
              <PlaceDetails places={places} />
            </Grid>
          ))}
        </Grid>
    </div>
  )
}

export default List