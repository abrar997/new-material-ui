import React, { useState } from "react";
import DriveEtaIcon from '@mui/icons-material/DriveEta';
import './Services.css'

import {
  Container,
  Card,
  CardContent,
  Typography,
  CardActionArea,
  Avatar
} from "@mui/material";

const Services = () => {
  const [servi, setServi] = useState([
      { name: "free delivery", icon:"<DriveEtaIcon/>" },
    { name: "fast delivery " },
    { name: "monthly offers" },
    { name: "monthly  discounts" },
  ]);
const iconStyle={
    margin:"auto",
    fontSize:"40px",
    color:"#03dac5",
    // marginLeft:"50px"
}

  return (
    <div>
      <Container>
          <div className=" cards">
        {servi.map((item, ind) => {
          return (
              <div className="card" key={ind}>
                  <Card style={{ backgroundColor:"rgb(219, 216, 216)",textAlign:"center",marginRight:"15px",width:"250px"}}>
              <CardActionArea sx={{mr:4}}>
                <CardContent>
                  <DriveEtaIcon style={iconStyle} />
             
                            <Typography variant="h5" color="black" style={{ textTransform:"capitalize"}}>
                   {item.name}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            
             </div>
          );
        })}
        </div>
      </Container>
    </div>
  );
};

export default Services;
