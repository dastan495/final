import { Button, CardMedia, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useNavigate } from "react-router-dom";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
// import "./Footer.css";
const Footer = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Box
        className="footer"
        sx={{
          background: "black",
          height: "350px",
          color: "#757575",
          display: "flex",
          justifyContent: "space-around",
          pt: "5%",
        }}
      >
        <Box className="the_left_footer" sx={{ width: "34%", display: "grid" }}>
          <Typography sx={{ color: "white" }} variant="h6">
            о нас
          </Typography>
          <Typography variant="p" sx={{ lineHeight: "30px" }}>
            «Росcия Нефть», один из крупнейших операторов на розничном и оптовом
            рынке нефтепродуктов Кыргызстана, имеющий розничную сеть в
            количестве 40 АЗС на территории Кыргызстана, и крупнейших двух
            нефтебаз, осуществляющий свою деятельность с 2017 года.
          </Typography>
          <Button
            onClick={() => {
              navigate("/AboutUs");
            }}
            sx={{
              background: "grey",
              color: "white",
              width: "30%",
              height: "35px",
              mb: "20%",
            }}
          >
            ДАЛЛЕ
          </Button>
        </Box>
        <Box className="the_center_footer">
          <Typography sx={{ color: "white" }} variant="h6">
            быстрые ссылки
          </Typography>
          <Box sx={{ display: "grid", pt: "20px" }}>
            <a href="" style={{ textDecoration: "none", color: "#757575" }}>
              главная
            </a>
            <a
              href=""
              style={{
                textDecoration: "none",
                color: "#757575",
                paddingTop: "5px",
              }}
            >
              новости
            </a>
            <a
              href=""
              style={{
                textDecoration: "none",
                color: "#757575",
                paddingTop: "5px",
              }}
            >
              акции
            </a>
            <a
              href=""
              style={{
                textDecoration: "none",
                color: "#757575",
                paddingTop: "5px",
              }}
            >
              заправки
            </a>
            <a
              href=""
              style={{
                textDecoration: "none",
                color: "#757575",
                paddingTop: "5px",
              }}
            >
              о нас
            </a>
            <a
              href=""
              style={{
                textDecoration: "none",
                color: "#757575",
                paddingTop: "5px",
              }}
            >
              русский
            </a>
          </Box>
        </Box>
        <Box className="the_right_footer">
          <Typography sx={{ color: "white" }} variant="h6">
            наши социальные сети
          </Typography>
          <FacebookIcon sx={{ width: "10%", color: "white" }} />
          <InstagramIcon sx={{ width: "30%", color: "white" }} />
          <CardMedia
            sx={{ width: "40%", mt: "10%", ml: "1%" }}
            component="img"
            image="https://russia-neft.kg/wp-content/themes/rn/assets/images/ftr-logo.png"
          />
        </Box>
      </Box>
    </div>
  );
};

export default Footer;
