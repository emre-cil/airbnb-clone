import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { locations as cardLocations } from 'data/mock-data';
import CarouselCard from '../CarouselCard/CarouselCard';
const LocationCards = () => {
  const [cards] = React.useState(cardLocations);
  if (!cards.length) {
    return null;
  }
  return (
    <Grid container rowSpacing={4} columnSpacing={3}>
      {cards.map((location) => {
        return (
          <Grid key={location.id} item xs={12} sm={6} md={4} lg={3} xl={2.4}>
            <CarouselCard location={location} />
          </Grid>
        );
      })}
    </Grid>
  );
};
export default LocationCards;
