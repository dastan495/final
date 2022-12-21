import { CardMedia, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const AboutUs = () => {
  return (
    <Box>
      <Box
        sx={{
          backgroundImage: `url("https://russia-neft.kg/wp-content/themes/rn/assets/images/energy-engineering-banner.jpg")`,
          height: "365px",
          // marginBottom: "10%",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            marginLeft: "44%",
            color: "white",
            paddingTop: "8%",
            fontWeight: "600",
          }}
        >
          о нас
        </Typography>
        <Typography
          variant="p"
          sx={{
            marginLeft: "46%",
            color: "white",
            paddingTop: "19%",
            fontSize: "18px",
          }}
        >
          главная о нас
        </Typography>
      </Box>

      <Box className="main" sx={{ mb: "10%" }}>
        <Typography
          sx={{
            marginTop: "5%",
            textAlign: "center",
            color: "white",
            fontWeight: "600",
            fontSize: "60px",
          }}
          variant="h5"
        >
          азс: россия нефть
        </Typography>

        <Box
          className="first"
          sx={{
            display: "flex",
            justifyContent: "space-around",
            fontFamily: "-moz-initial",
            mt: "8%",
            // fontWeight: "10",
          }}
        >
          <Box sx={{ marginLeft: "3%" }} className="first_left">
            <CardMedia
              sx={{
                width: "80%",
                borderRadius: "2%",
                // display: "grid",
              }}
              component="img"
              image="https://krot.info/uploads/posts/2021-12/1640854988_2-krot-info-p-kirgiziya-stolitsa-osh-krasivo-foto-2.jpg"
            ></CardMedia>
          </Box>
          <Box
            className="first_right"
            sx={{
              color: "white",
              // width: "70%",
              fontSize: "20px",
              display: "grid",
              fontWeight: "122",
              lineHeight: "24px",
              mt: "2%",
            }}
          >
            <Typography variant="h3">о нас</Typography>
            <Typography variant="p">
              Россия Нефть — один из крупнейших нефтетрейдеров Кыргызской
              Республики. Основные направления деятельности – оптовая и
              розничная реализация нефтепродуктов.
            </Typography>
            {/* <Box > */}
            <Typography sx={{ lineHeight: "30px" }}>
              <Typography variant="p">
                Качество во всех областях своей сферы,
              </Typography>
              <Typography variant="p">Качественные нефтепродукты, </Typography>
              <Typography variant="p">Социальная ответственность, </Typography>
              <Typography variant="p">
                Высококачественные нефтепродукты,
              </Typography>
              <Typography variant="p">Высокие стандарты, </Typography>
              <Typography variant="p">Забота о природе, </Typography>
              <Typography variant="p">Забота о природе, </Typography>
              <Typography variant="p">Движение вперёд, </Typography>
            </Typography>
            {/* </Box> */}
          </Box>
        </Box>

        <Box className="second">
          <CardMedia
            sx={{
              width: "95%",
              ml: "3%",
              mt: "5%",
              height: "500px",
              // display: "grid",
            }}
            component="img"
            image="https://st-1.akipress.org/st_gallery/23/1256823.8625314049f64c9423f537683a7abdb0.jpg"
          ></CardMedia>
        </Box>

        <Box
          className="third"
          sx={{
            display: "flex",
            justifyContent: "space-around",
            fontFamily: "-moz-initial",
            mt: "8%",
            // ml: "10%",
            // fontWeight: "10",
          }}
        >
          <Box
            className="third_right"
            sx={{
              color: "white",
              width: "80%",
              fontSize: "20px",
              display: "grid",
              fontWeight: "122",
              lineHeight: "24px",
              mt: "3%",
              textAlign: "center",
              alignItems: "center",
            }}
          >
            <Typography variant="p" sx={{ lineHeight: "40px" }}>
              <Typography variant="h3">о нас</Typography>
              «Росcия Нефть», один из крупнейших операторов на розничном и
              оптовом рынке нефтепродуктов Кыргызстана, имеющий розничную сеть в
              количестве 40 АЗС на территории Кыргызстана, и крупнейших двух
              нефтебаз, осуществляющий свою деятельность с 2017 года.
            </Typography>
            {/* <Box > */}
          </Box>
          <Box className="third_left">
            <CardMedia
              sx={{
                ml: "5%",
                width: "90%",
                borderRadius: "2%",
                // display: "grid",
              }}
              component="img"
              image="https://krot.info/uploads/posts/2021-12/1640854988_2-krot-info-p-kirgiziya-stolitsa-osh-krasivo-foto-2.jpg"
            ></CardMedia>
          </Box>
        </Box>

        <Box className="forth">
          <Box
            sx={{
              color: "black",
              mt: "8%",
              background: "grey",
              width: "100%",
              height: "350px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-around",
                paddingTop: "11%",
              }}
            >
              <Typography
                sx={{
                  fontWeight: "700",
                  color: "white",
                }}
                variant="h5"
              >
                БОЛЛЕ 1МЛН КЛИЕНТОВ
              </Typography>

              <Box sx={{ borderRight: "1px solid #333" }}></Box>
              <Typography sx={{ fontWeight: "700" }} variant="h5">
                1500 ПРОЕКТОВ
              </Typography>
              <Box sx={{ borderRight: "1px solid #333" }}></Box>

              <Typography
                sx={{ fontWeight: "700", color: "white" }}
                variant="h5"
              >
                700 СОТРУДНИКОВ
              </Typography>
              <Box sx={{ borderRight: "1px solid #333" }}></Box>

              <Typography sx={{ fontWeight: "700" }} variant="h5">
                50 ЗАПРАВОК
              </Typography>
            </Box>
          </Box>
          <Typography
            sx={{ textAlign: "center", color: "white", mt: "5%" }}
            variant="h3"
            className="ruc"
          >
            руководство
          </Typography>
          <Box
            className="five"
            sx={{
              display: "flex",
              justifyContent: "space-around",
              mt: "5%",
              color: "white",
              // mr: "1%",
              width: "100%",
            }}
          >
            <Box>
              <Typography variant="h6">Козуев Семетей Абибиллаевич</Typography>
              <hr
                style={{
                  width: "110%",
                  height: "2px",
                  float: "left",
                  background: "#0a9530",
                  margin: "20px 0px",
                  padding: "0px",
                  border: "0px",
                }}
              ></hr>
              <Typography variant="p" sx={{}}>
                Генеральный директор ОсОО «Россия Нефть»
              </Typography>
            </Box>
            <Box>
              <Typography variant="h6">
                Назарбеков Элмурат Абдыразакович
              </Typography>
              <hr
                style={{
                  width: "110%",
                  height: "2px",
                  float: "left",
                  background: "#0a9530",
                  margin: "20px 0px",
                  padding: "0px",
                  border: "0px",
                }}
              ></hr>
              <Typography variant="p" sx={{}}>
                исполнительный директор ОсОО «Россия Нефть»
              </Typography>
            </Box>
            <Box>
              <Typography variant="h6">Канатбек Уулу Дастан</Typography>
              <hr
                style={{
                  width: "100%",
                  height: "2px",
                  float: "left",
                  background: "#0a9530",
                  margin: "20px 0px",
                  padding: "0px",
                  border: "0px",
                }}
              ></hr>
              <Typography variant="p" sx={{}}>
                помощниик исп. директор ОсОО «Россия Нефть»
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default AboutUs;
