import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="transparent">
        <Toolbar>
          <img
            src={"./knit.jpeg"}
            style={{
              marginLeft: "10px",
              marginTop: "5px",
              height: "40px",
              width: "40px",
            }}
          />
          <Typography
            sx={{ flexGrow: 1 }}
            style={{
              fontFamily: "Poppins",
              fontSize: "1rem",
            }}
          >
            &nbsp;&nbsp; Kamla Nehru Institute of Technology
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
