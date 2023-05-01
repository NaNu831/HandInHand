import { ListItemText, MenuItem, Paper, Typography } from "@mui/material";
import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";

const MenuList = () => {
  return (
    <div>
      <Paper sx={{ width: 320, maxWidth: "100%" }}>
        <MenuItem component={NavLink} to="/">
          <ListItemText>Startseite</ListItemText>
          <Typography variant="body2" color="text.secondary">
            ⌘S
          </Typography>
        </MenuItem>
        <MenuItem component={NavLink} to="/neue_fahrt">
          <ListItemText>Auftrag anlegen</ListItemText>
          <Typography variant="body2" color="text.secondary">
            ⌘A
          </Typography>
        </MenuItem>
        <MenuItem component={NavLink} to="/">
          <ListItemText>Benutzerverwaltung</ListItemText>
          <Typography variant="body2" color="text.secondary">
            ⌘B
          </Typography>
        </MenuItem>
        <MenuItem component={NavLink} to="/">
          <ListItemText>Fahrzeug</ListItemText>
          <Typography variant="body2" color="text.secondary">
            ⌘F
          </Typography>
        </MenuItem>
      </Paper>
    </div>
  );
};

export default MenuList;
