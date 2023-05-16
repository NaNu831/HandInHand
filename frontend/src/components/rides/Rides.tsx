import React from "react";
import { Ride as RideType } from "./types";
import { Grid } from "@mui/material";
import Ride from "./Ride";

type RidesProps = {
  rides: RideType[];
};

const Rides = (props: RidesProps) => {
  const rides = props.rides;

  return (
    <div>
      <Grid container spacing={4}>
        {rides.map((ride) => (
          <Grid
            sx={{
              p: 2,
            }}
            item
            key={ride.identifier.sequence + "/" + ride.identifier.year}
          >
            <Ride ride={ride} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Rides;
