import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography, Button, CardMedia } from "@mui/material";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import "../Navbar/navbar.css";
import { useCart } from "../../contexts/CartContext";

const ProductCard = ({ item }) => {
  const { addProductToCart, checkProductInCart } = useCart();

  const navigate = useNavigate();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: {
          xs: "45%",
          sm: "45%",
          md: "17%",
          // lg: "31%",
          // xl: "31%",
        },
      }}
    >
      <Box
        sx={{
          backgroundImage: `url(${item.picture})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "1000% 100%",
          backgroundSize: "cover",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "end",
        }}
      >
        <BookmarkIcon
          onClick={() => addProductToCart(item)}
          className="card_save"
          sx={{ width: "20%", ml: "85%", color: "white", mt: "4%" }}
        />
        <Button
          sx={{
            backgroundColor: "white",
            width: "80%",
            color: "black",
            marginTop: "130%",
            marginBottom: "5%",
            fontWeight: "800",
            fontSize: {
              xs: "10px",
              sm: "12px",
              md: "14px",
              lg: "16px",
              xl: "20px",
            },
          }}
          onClick={() => navigate(`/products/${item.id}`)}
        >
          ПОДРОБНЕЕ
        </Button>
      </Box>
      <Typography
        sx={{
          color: "white",
          fontWeight: "600",
          marginTop: "13px",
          width: "90%",
          textAlign: "left",
          fontSize: {
            xs: "10px",
            sm: "12px",
            md: "11px",
            lg: "11px",
            xl: "20px",
          },
        }}
      >
        {item.name}
      </Typography>
      <Typography
        sx={{
          color: "white",
          fontWeight: "600",
          marginBottom: "10%",
          fontSize: {
            xs: "10px",
            sm: "12px",
            md: "14px",
            lg: "14px",
            xl: "20px",
          },
        }}
      >
        ${item.price}
      </Typography>
    </Box>
  );
};

export default ProductCard;
