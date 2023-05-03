import { Box, Button, Grid, Input } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";

const Formular = () => {
  return (
    <Container sx={{ background: "white", p: 2 }}>
      <h2>Neue Fahrt anlegen </h2>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          Fahrt Nr.:
        </Grid>
        <Grid item xs={3}>
          <Input />
        </Grid>
        <Grid item xs={3}>
          Status
        </Grid>
        <Grid item xs={3}>
          <Input />
        </Grid>
        <Grid item xs={12}>
          <h3>Kundendaten</h3>
        </Grid>
        <Grid item xs={3}>
          Name
        </Grid>
        <Grid item xs={3}>
          <Input />
        </Grid>
        <Grid item xs={3}>
          Geschlecht
        </Grid>
        <Grid item xs={3}>
          <Input />
        </Grid>
        <Grid item xs={3}>
          Straße
        </Grid>
        <Grid item xs={3}>
          <Input />
        </Grid>
        <Grid item xs={3}>
          Hausnummer
        </Grid>
        <Grid item xs={3}>
          <Input />
        </Grid>
        <Grid item xs={3}>
          Stadt
        </Grid>
        <Grid item xs={3}>
          <Input />
        </Grid>
        <Grid item xs={3}>
          Postleitzahl
        </Grid>
        <Grid item xs={3}>
          <Input />
        </Grid>
        <Grid item xs={12}>
          <h3>Ziel</h3>
        </Grid>
        <Grid item xs={3}>
          Datum
        </Grid>
        <Grid item xs={3}>
          <Input />
        </Grid>
        <Grid item xs={3}>
          Uhrzeit
        </Grid>
        <Grid item xs={3}>
          <Input />
        </Grid>
        <Grid item xs={3}>
          Name
        </Grid>
        <Grid item xs={3}>
          <Input />
        </Grid>
        <Grid item xs={3}>
          Straße
        </Grid>
        <Grid item xs={3}>
          <Input />
        </Grid>
        <Grid item xs={3}>
          Hausnummer
        </Grid>
        <Grid item xs={3}>
          <Input />
        </Grid>
        <Grid item xs={3}>
          Stadt
        </Grid>
        <Grid item xs={3}>
          <Input />
        </Grid>
        <Grid item xs={3}>
          Postleitzahl
        </Grid>
        <Grid item xs={3}>
          <Input />
        </Grid>
        <Grid item xs={12}>
          <h3>Fahrer</h3>
        </Grid>
        <Grid item xs={3}>
          Name
        </Grid>
        <Grid item xs={3}>
          <Input />
        </Grid>
        <Grid item xs={7}>
          <Button variant="contained">Speichern</Button>
        </Grid>
        <Grid item xs={5}>
          <Button component={Link} to="/" variant="contained" color="primary">
            Abbrechen
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Formular;
