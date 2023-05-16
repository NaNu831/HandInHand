import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
import { Outlet } from "react-router-dom";
import logo from "../../images/hand1.jpeg";
import React from "react";
import MenuList from "../../components/menu/MenuList";
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
                m: 1,
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
            height={179}
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
            direction: "column",
            alignItems: "flex-start",
            p: 2,
          }}
        >
          <MenuList />
        </Grid>
        <Grid item xs={9} sx={{ p: 2 }}>
          <Outlet />
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
