import { Box, Card, CardContent, Typography } from "@mui/material";
import React from "react";
import { Ride as RideType } from "./types";

type RideProps = {
  ride: RideType;
};

const Ride = (props: RideProps) => {
  const ride = props.ride;
  const { identifier, destination, driver, client, state } = ride;
  const clientAdress = client.adress;
  const destAdress = destination.adress;

  const card = (
    <React.Fragment>
      <CardContent>
        <Typography variant="h5" component="div"></Typography>
        <Typography sx={{ mb: 1.5 }}>
          Fahrt Nr.: {identifier.sequence}/{identifier.year}
        </Typography>
        <Typography sx={{ mb: 1.5 }}>Status: {ride.state}</Typography>
        <Typography sx={{ mb: 1.5 }}>
          Datum: {destination.date.toDateString()}
        </Typography>
        <Typography color="text.secondary">Name: {client.name}</Typography>
        <Typography>
          Abholadresse: {clientAdress.street} {clientAdress.houseNumber},{" "}
          {clientAdress.zipCode} {clientAdress.city}
        </Typography>
        <Typography>Telefonnummer: {client.phoneNumber}</Typography>
        <Typography sx={{ mb: 1.5 }}>
          Termin: {destination.date.toTimeString()}
        </Typography>
        <Typography>Name: {destination.name}</Typography>
        <Typography>
          Zieladresse: {destAdress.street} {destAdress.houseNumber},{" "}
          {destAdress.zipCode} {destAdress.city}
        </Typography>
      </CardContent>
    </React.Fragment>
  );

  return (
    <Box sx={{ width: 275 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
};

export default Ride;
