import {
  Button,
  Container,
  FormLabel,
  Grid,
  Paper,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";

const Formular = () => {
  const [fahrtNummer, setFahrtNummer] = useState("");
  const [kundeName, setKundeName] = useState("");
  const [kundeGeschlecht, setKundeGeschlecht] = useState("");
  const [kundeStraße, setKundeStraße] = useState("");
  const [kundeHausnummer, setKundeHausnummer] = useState("");
  const [kundeStadt, setKundeStadt] = useState("");
  const [kundePostleitzahl, setKundePostleitzahl] = useState("");
  const [zielDatum, setZielDatum] = useState("");
  const [zielUhrzeit, setZielUhrzeit] = useState("");
  const [zielName, setZielName] = useState("");
  const [zielStraße, setZielStraße] = useState("");
  const [zielHausnummer, setZielHausnummer] = useState("");
  const [zielStadt, setZielStadt] = useState("");
  const [zielPostleitzahl, setZielPostleitzahl] = useState("");
  const [fahrer, setFahrer] = useState("");

  function saveUserInput() {
    console.log(kundeName);
  }

  return (
    <Paper style={{ maxHeight: 500, overflow: "auto" }}>
      <Container sx={{ background: "white", p: 2 }}>
        <h2>Neue Fahrt anlegen </h2>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <FormLabel>Fahrt Nr.:</FormLabel>
          </Grid>
          <Grid item xs={3}>
            <TextField
              type="text"
              name="fahrt_nummer"
              onChange={(e) => {
                setFahrtNummer(e.target.value);
              }}
            ></TextField>
          </Grid>
          <Grid item xs={3}>
            <FormLabel>Status</FormLabel>
          </Grid>
          <Grid item xs={3}>
            <FormLabel>Neu</FormLabel>
          </Grid>
          <Grid item xs={12}>
            <FormLabel>Kundendaten</FormLabel>
          </Grid>
          <Grid item xs={3}>
            <FormLabel>Name</FormLabel>
          </Grid>
          <Grid item xs={3}>
            <TextField
              type="text"
              name="kunde_name"
              onChange={(e) => {
                setKundeName(e.target.value);
              }}
            ></TextField>
          </Grid>
          <Grid item xs={3}>
            <FormLabel>Geschlecht</FormLabel>
          </Grid>
          <Grid item xs={3}>
            <TextField
              type="text"
              name="kunde_geschlecht"
              onChange={(e) => {
                setKundeGeschlecht(e.target.value);
              }}
            ></TextField>
          </Grid>
          <Grid item xs={3}>
            <FormLabel>Straße</FormLabel>
          </Grid>
          <Grid item xs={3}>
            <TextField
              type="text"
              name="kunde_straße"
              onChange={(e) => {
                setKundeStraße(e.target.value);
              }}
            ></TextField>
          </Grid>
          <Grid item xs={3}>
            <FormLabel>Hausnummer</FormLabel>
          </Grid>
          <Grid item xs={3}>
            <TextField
              type="text"
              name="kunde_hausnummer"
              onChange={(e) => {
                setKundeHausnummer(e.target.value);
              }}
            ></TextField>
          </Grid>
          <Grid item xs={3}>
            <FormLabel>Stadt</FormLabel>
          </Grid>
          <Grid item xs={3}>
            <TextField
              type="text"
              name="kunde_stadt"
              onChange={(e) => {
                setKundeStadt(e.target.value);
              }}
            ></TextField>
          </Grid>
          <Grid item xs={3}>
            <FormLabel>Postleitzahl</FormLabel>
          </Grid>
          <Grid item xs={3}>
            <TextField
              type="text"
              name="kunde_postleitzahl"
              onChange={(e) => {
                setKundePostleitzahl(e.target.value);
              }}
            ></TextField>
          </Grid>
          <Grid item xs={12}>
            <FormLabel>
              <h3>Ziel</h3>
            </FormLabel>
          </Grid>
          <Grid item xs={3}>
            <FormLabel>Datum</FormLabel>
          </Grid>
          <Grid item xs={3}>
            <TextField
              type="date"
              name="ziel_date"
              onChange={(e) => {
                setZielDatum(e.target.value);
              }}
            ></TextField>
          </Grid>
          <Grid item xs={3}>
            <FormLabel>Uhrzeit</FormLabel>
          </Grid>
          <Grid item xs={3}>
            <TextField
              type="text"
              name="ziel_uhrzeit"
              onChange={(e) => {
                setZielUhrzeit(e.target.value);
              }}
            ></TextField>
          </Grid>
          <Grid item xs={3}>
            <FormLabel>Name</FormLabel>
          </Grid>
          <Grid item xs={3}>
            <TextField
              type="text"
              name="ziel_name"
              onChange={(e) => {
                setZielName(e.target.value);
              }}
            ></TextField>
          </Grid>
          <Grid item xs={3}>
            <FormLabel>Straße</FormLabel>
          </Grid>
          <Grid item xs={3}>
            <TextField
              type="text"
              name="ziel_straße"
              onChange={(e) => {
                setZielStraße(e.target.value);
              }}
            ></TextField>
          </Grid>
          <Grid item xs={3}>
            <FormLabel>Hausnummer</FormLabel>
          </Grid>
          <Grid item xs={3}>
            <TextField
              type="text"
              name="ziel_hausnummer"
              onChange={(e) => {
                setZielHausnummer(e.target.value);
              }}
            ></TextField>
          </Grid>
          <Grid item xs={3}>
            <FormLabel>Stadt</FormLabel>
          </Grid>
          <Grid item xs={3}>
            <TextField
              type="text"
              name="ziel_stadt"
              onChange={(e) => {
                setZielStadt(e.target.value);
              }}
            ></TextField>
          </Grid>
          <Grid item xs={3}>
            <FormLabel>Postleitzahl</FormLabel>
          </Grid>
          <Grid item xs={3}>
            <TextField
              type="text"
              name="ziel_postleitzahl"
              onChange={(e) => {
                setZielPostleitzahl(e.target.value);
              }}
            ></TextField>
          </Grid>
          <Grid item xs={12}>
            <FormLabel>
              <h3>Fahrer</h3>
            </FormLabel>
          </Grid>
          <Grid item xs={3}>
            <FormLabel>Name</FormLabel>
          </Grid>
          <Grid item xs={3}>
            <TextField
              type="text"
              name="fahrer"
              onChange={(e) => {
                setFahrer(e.target.value);
              }}
            ></TextField>
          </Grid>
          <Grid item xs={7}>
            <Button variant="contained" onClick={() => saveUserInput()}>
              Speichern
            </Button>
          </Grid>
          <Grid item xs={5}>
            <Button component={Link} to="/" variant="contained" color="primary">
              Abbrechen
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Paper>
  );
};

export default Formular;
