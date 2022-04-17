import React from 'react'
import {Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip} from '@material-ui/core'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import PhoneIcon from '@material-ui/icons/Phone'
import Rating from '@material-ui/lab/Rating'

const PlaceDatails = ( {places} ) => {
  //console.log(places);

  return (
    <div>
      {/* <h1>{places.name}</h1> */}
      <Card elevation={6}>
        <CardMedia 
          style={{height: 350}}
          image={places.photo ? places.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
          title={places.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5">{places.name}</Typography>
          <Box display="flex" justifyContent="space-between">
            <Typography variant="subtitle1">Price</Typography>
            <Typography gutterBottom variant="subtitle1">{places.price_level}</Typography>
          </Box>
        </CardContent>

      </Card>
    </div>
  )
}

export default PlaceDatails