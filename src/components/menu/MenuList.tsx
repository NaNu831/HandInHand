import { ListItemText, MenuItem, Paper, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const MenuList = () => {
  return (
    <div>
      <Link to="/">Account</Link>
      <Paper sx={{ width: 320, maxWidth: "100%" }}>
        <MenuItem>
          <ListItemText>Auftrag anlegen</ListItemText>
          <Typography variant="body2" color="text.secondary">
            ⌘A
          </Typography>
        </MenuItem>
        <MenuItem>
          <ListItemText>Benutzerverwaltung</ListItemText>
          <Typography variant="body2" color="text.secondary">
            ⌘B
          </Typography>
        </MenuItem>
        <MenuItem>
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
