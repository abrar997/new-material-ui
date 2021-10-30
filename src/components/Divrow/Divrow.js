import React from "react";
import img from "./DivrowImage/cam2.png";
import { Typography, Container, Grid, Box, Button, Stack } from "@mui/material";
import "./Divrow.css";

const h1 = {
  color: "rgb(219, 216, 216)",
  marginTop: "240px",
  fontFamily: "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",
  textTransform: "capitalize",
};
const h3 = {
  color: "#03dac5",
};

const buttons = {
  color: "rgb(219, 216, 216)",
  width: "260px",
  padding: "5px",
  backgroundColor: "#03dac5b4",
  marginLeft: "1px",
};
const buttons2 = {
  color: "#03dac5",
  width: "260px",
  padding: "5px",
};

const Divrow = () => {
  return (
    <div className="top">
      <Container>
        <Box sx={{ width: "100" }}>
          <Grid
            container
            // rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={6}>
              <Typography variant="h2" style={h1} gutterBottom>
                code/mu. online shopping market
              </Typography>
              <Typography variant="subtitle1" align="left" style={h3} paragraph>
                shopping online market with delivery around the world .enjoy
                with our services. take your time and enjoy with our web....
              </Typography>
              <Stack direction="row" spacing={2} style={{ marginTop: "50px" }}>
                <Button variant="contained" style={buttons}>
                  start shopping
                </Button>
                <Button
                  variant="outlined"
                  href="#outlined-buttons"
                  style={buttons2}
                >
                  contact with us
                </Button>
              </Stack>
            </Grid>
            <Grid item xs={6}>
              <img src={img} />
            </Grid>
          </Grid>
          {/* <Buttons /> */}
        </Box>
      </Container>
    </div>
  );
};

export default Divrow;
