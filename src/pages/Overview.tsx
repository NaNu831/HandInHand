import React from "react";
import Rides from "../components/rides/Rides";
import { Gender, RideState } from "../components/rides/types";

const Overview = () => {
  // Dummy, da Backend noch nicht vorhanden
  const rides = [
    {
      identifier: {
        sequence: 53,
        year: 2023,
      },
      state: RideState.NEW,
      client: {
        gender: Gender.FEMALE,
        name: "Pacher",
        adress: {
          street: "Am Bairafeld",
          houseNumber: "1",
          city: "Geltendorf",
          zipCode: "82269",
        },
        phoneNumber: "08193/997055",
      },
      destination: {
        date: new Date("1995-12-17T03:24:00"),
        name: "Physio Landbrecht",
        adress: {
          street: "Bgm.-Vogt-Str. 23",
          houseNumber: "1",
          city: "Geltendorf",
          zipCode: "82269",
        },
      },
      driver: null,
    },
    {
      identifier: {
        sequence: 54,
        year: 2023,
      },
      state: RideState.NEW,
      client: {
        gender: Gender.FEMALE,
        name: "Pacher",
        adress: {
          street: "Am Bairafeld",
          houseNumber: "1",
          city: "Geltendorf",
          zipCode: "82269",
        },
        phoneNumber: "08193/997055",
      },
      destination: {
        date: new Date("1995-12-17T03:24:00"),
        name: "Physio Landbrecht",
        adress: {
          street: "Bgm.-Vogt-Str. 23",
          houseNumber: "1",
          city: "Geltendorf",
          zipCode: "82269",
        },
      },
      driver: null,
    },
  ];
  return (
    <div>
      <Rides rides={rides}></Rides>
    </div>
  );
};

export default Overview;
