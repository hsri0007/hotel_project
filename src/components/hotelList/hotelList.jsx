import React from "react";
import Card from "./hotelCard";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

function HotelList() {
  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item>
          <Card />
        </Grid>
        <Grid item>
          <Card />
        </Grid>
        <Grid item>
          <Card />
        </Grid>
      </Grid>
    </Container>
  );
}

export default HotelList;
