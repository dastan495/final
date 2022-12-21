import { Button, CardMedia, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import "./Home.css";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div
      className="container"
      style={{
        backgroundColor: "#00352c",
        paddingBottom: "12%",
        // width: "96%",
        // marginLeft: "2%",
      }}
    >
      {/* <Slider {...settings}> */}
      <div>
        <>
          <img
            style={{ width: "100%", marginTop: "-1%", height: "600px" }}
            src="https://eimg.pravda.com/images/doc/6/8/680b764-------.jpg"
            alt=""
          />
        </>
      </div>
      {/* <div>
        <>
          <img
            style={{ width: "100%", marginTop: "-1%" }}
            src="https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300"
            alt=""
          />
        </>
      </div>
      <div>
        <>
          <img
            style={{ width: "100%", marginTop: "-1%" }}
            src="https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300"
            alt=""
          />
        </>
      </div> */}
      {/* </Slider> */}

      <Box
        className="Main_content"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginLeft: "5%",
          marginTop: "9%",
        }}
      >
        <Box className="Main_content_left" sx={{ width: "49%" }}>
          <CardMedia
            sx={{ borderRadius: "15px" }}
            component="img"
            image="https://russia-neft.kg/wp-content/uploads/2019/08/photo1641786567.jpeg"
            alt=""
          />
        </Box>

        <Box
          className="Main-content-right"
          sx={{
            width: "48%",
            textAlign: "center",
            margin: "auto",
            fontSize: "17px",
          }}
        >
          <Typography variant="h4" sx={{ color: "white" }}>
            О НАС
          </Typography>
          <Typography
            variant="p"
            sx={{
              fontFamily: "'Lato', sans-serif",
              color: "white",
              lineHeight: "34px",
              fontWeight: "bold",
              // width: "20%",
            }}
          >
            «Росcия Нефть», один из крупнейших операторов на розничном и оптовом
            рынке нефтепродуктов Кыргызстана, имеющий розничную сеть в
            количестве 40 АЗС на территории Кыргызстана, и крупнейших двух
            нефтебаз, осуществляющий свою деятельность с 2017 года.
          </Typography>
          <Button
            onClick={() => {
              navigate("/AboutUs");
            }}
            variant=""
            sx={{ backgroundColor: "white", width: "42%", mt: "4%" }}
          >
            ДАЛЕЕ
          </Button>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          mt: "5%",
          width: "100%",
        }}
      >
        <Box
          className="Main_content_left_2"
          sx={{
            width: "35%",
            textAlign: "center",
            margin: "auto",
            fontSize: "17px",
          }}
        >
          {/* <Typography variant="h4">О НАС</Typography> */}
          <Typography
            variant="p"
            sx={{
              fontFamily: "'Lato', sans-serif",
              color: "white",
              lineHeight: "34px",
              fontWeight: "bold",
            }}
          >
            Предоставление потребителям топлива высокого качества – приоритетная
            задача сети. Топливо сохраняет свои заводские характеристики,
            благодаря выполнению всех самых жестких государственных требований,
            а также постоянному внутреннему лабораторному контролю, который
            проводится
          </Typography>
          <Button
            onClick={() => {
              navigate("/AboutUs");
            }}
            variant=""
            sx={{ backgroundColor: "white", width: "42%", mt: "4%" }}
          >
            ДАЛЕЕ
          </Button>
        </Box>

        <CardMedia
          sx={{ width: "50%", borderRadius: "15px", mr: "2%" }}
          component="img"
          image="https://centr-fuel.ru/wp-content/uploads/2018/06/pravila-na-azs1.jpg"
          alt=""
        />
      </Box>

      <Typography
        variant="h3"
        sx={{
          textAlign: "center",
          mt: "12%",
          fontWeight: "bold",
          color: "white",
        }}
      >
        ПРЕСС-РЕЛИЗЫ
      </Typography>
      <Box
        className="preess_list"
        sx={{
          color: "white",
          display: "flex",
          justifyContent: "space-between",
          width: "90%",
          marginTop: "6%",
          ml: "4%",
          alignItems: "center",
        }}
      >
        <Box
          className="press-relis-1"
          sx={{
            width: "28%",
          }}
        >
          <CardMedia
            sx={{ width: "100%" }}
            component="img"
            image="https://sugdnews.com/wp-content/uploads/2021/09/%D0%B7%D0%B0%D0%BF%D1%80%D0%B0%D0%B2%D0%BA%D0%B0.jpg"
            alt=""
          />
          <Typography
            variant="h5"
            sx={{
              borderBottom: "1px solid #ccc",
              padding: "15px 0px",
              mb: "4%",
              // mt: "1%",
            }}
          >
            РОССИЯ-НЕФТЬ
          </Typography>
          <Typography sx={{}} variant="p">
            Основной деятельностью нашей компании является оптовая и розничная
            реализация т
          </Typography>
        </Box>

        <Box className="press-relis-2" sx={{ width: "28%" }}>
          <CardMedia
            sx={{ width: "103%" }}
            component="img"
            image="https://aif-s3.aif.ru/images/015/169/9d808ff9b5b464d12dd4eccec517375d.jpg"
            alt=""
          />

          <Typography
            variant="h5"
            sx={{
              borderBottom: "1px solid #ccc",
              padding: "15px 0px",
              mb: "4%",
            }}
          >
            АЗС «РОССИЯ НЕФТЬ»
          </Typography>
          <Typography variant="p">
            Приоритетной линией развития компаний сегодня является реализация
            масштабной и�
          </Typography>
        </Box>

        <Box className="press-relis-3" sx={{ width: "29%" }}>
          <CardMedia
            sx={{ width: "100%" }}
            component="img"
            image="https://rg.ru/uploads/images/180/74/19/iStock-153794211.jpg"
            alt=""
          />
          <Typography
            variant="h5"
            sx={{
              borderBottom: "1px solid #ccc",
              padding: "15px 0px",
              mb: "4%",
            }}
          >
            АЗС «РОССИЯ НЕФТЬ»
          </Typography>
          <Typography variant="p">
            Широкий ассортимент высокого качества нефтепродуктов и налаженная
            система обсл�
          </Typography>
        </Box>
      </Box>
    </div>
  );
};

export default Home;
