import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Categ.css";

import img from "./Categimage/head.jpeg";
import img1 from "./Categimage/phi.jpg";
import img2 from "./Categimage/lap1.jpg";
import img3 from "./Categimage/photo.jpg";
import img4 from "./Categimage/pla.jpg";

import {
  CardMedia,
  CardContent,
  Typography,
  Button,
  Card,
  CardActions,
} from "@mui/material";

import SwiperCore, { Navigation, Pagination } from "swiper";
import { Container } from "@mui/material";
// install Swiper modules

SwiperCore.use([Pagination, Navigation]);


// style
const h1 = {
  color: "rgb(219, 216, 216)",
  marginTop: "100px",
  // fontFamily: "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",
  textTransform: "capitalize",
  marginBottom: "30px",
  borderBottom: "6px solid #03dac5",
  width: "110px",
  paddingBottom: "4px",
};
// rgb(219, 216, 216)#212624
const cart = {
  backgroundColor:'white',
  color: "#212624",
  boxShadow: "1px 1px 15px black ", 
  width: "300px",
  height: "470px",
  margin: "auto",
  padding: "20px",
  textTransform:"capitalize",
  borderRadius: "5px"
}

 const button={
   marginLeft:"50px",
   backgroundColor:"#03dac5",
   color:"white",
   fontSize:"14px"

 }

const Categ = () => {
  const [swiper, setSwiper] = useState([
    { imge: img, name: "headphones",  btn: "start shopping now" },
    { imge: img1, name: "phones",  btn: "start shopping now" },
    { imge: img2, name: "laptops", btn: "start shopping now" },
    { imge: img3, name: "photograph", btn: "start shopping now" },
    { imge: img4, name: "playing ", btn: "start shopping now" },
    { imge: img, name: "headphones",  btn: "start shopping now" },
  ]);

  return (
    <div className="swip">
      <Container>
        <Typography variant="h3" style={h1}>
         Category
        </Typography>

        <div className="swiper">
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            slidesPerGroup={3}
            loop={true}
            loopFillGroupWithBlank={true}
            navigation={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            className="mySwiper"
          >
            {swiper.map((item, ind) => {
              // never forget rettttuuurrrnnnnnnnnn your code will not run if u forget it
              return (
                <SwiperSlide key={ind}>
                  <div className="card">
                    <Card
                      style={cart}
                    >
                      <CardMedia //used to add image
                        component="img"
                        alt=""
                        src={item.imge}
                        style={{
                          width: "100%",
                          height: "280px",
                          margin: "auto",
                          paddingTop: "60px",
                          borderRadius:"20px"
                        }}
                      />
                      <CardContent
                        style={{
                          margin: "auto",
                          textAlign: "center",
                        }}
                      >
                        <Typography  variant="h5">
                          {item.name}
                        </Typography>
                  
                      </CardContent>
                      <CardActions>
                        <Typography></Typography>
                        <Button variant="contained" style={button}>
                          {item.btn}
                        </Button>
                      </CardActions>
                    </Card>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </Container>
    </div>
  );
};

export default Categ;
