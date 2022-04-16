import React, {useState} from 'react'
import { CircularProgress, Grid, Typography, MenuItem, FormControl, Select, InputLabel } from '@material-ui/core'

const List = () => {
  const [type, setType] = useState('restaurants');
  const [rating, setRating] = useState('');


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
    </div>
  )
}

export default List