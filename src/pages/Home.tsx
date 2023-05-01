import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
import { Outlet } from "react-router-dom";
import logo from "../images/hand1.jpeg";
import React from "react";
import MenuList from "../components/menu/MenuList";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Grid
        container
        spacing={2}
        sx={{ backgroundColor: "#C2CFDB" }}
        alignItems="center"
      >
        <Grid item xs={2} sx={{ backgroundColor: "#295480" }}>
          <Link to={"/"}>
            <Box
              component="img"
              sx={{
                height: 160,
                width: 160,
              }}
              alt="Hand in Hand Logo"
              src={logo}
            />
          </Link>
        </Grid>
        <Grid item xs={10} sx={{ backgroundColor: "#295480" }}>
          <Box
            height={104}
            sx={{ fontSize: "2rem", color: "white" }}
            display={"flex"}
            alignItems={"center"}
          >
            Hand in Hand - Nachbarschaftshilfe Geltendorf e.V.
          </Box>
        </Grid>
        <Grid
          item
          xs={3}
          sx={{
            backgroundColor: "white",
            direction: "column",
            alignItems: "flex-start",
            padding: "15px",
          }}
        >
          <MenuList />
        </Grid>
        <Grid item xs={9}>
          <Outlet />
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
