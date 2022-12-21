import { Button, CardMedia, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useProducts } from "../../../contexts/ProductContext";

const ProductDetails = () => {
  const navigate = useNavigate();
  const { getProductDetails, productDetails, deleteProduct } = useProducts();
  const { id } = useParams();
  useEffect(() => {
    getProductDetails(id);
  }, []);
  return (
    <>
      <Box
        className="the_left_picture"
        sx={{
          // width: "100%",
          display: "flex",
          justifyContent: "space-around",
          mt: "5%",
          mb: "10%",
        }}
      >
        <Box sx={{ width: "55%" }}>
          <CardMedia component="img" image={productDetails.picture} />
        </Box>
        {/* <Box sx={{ display: "grid" }}> */}
        <Box
          sx={{
            color: "white",
            width: "35%",
            // display: "grid",
            // alignItems: "center",
          }}
        >
          <Typography sx={{ fontSize: "20px" }}>
            {productDetails.name}
          </Typography>
          <Typography sx={{ lineHeight: "50px" }}>
            $ {productDetails.price}
          </Typography>
          <Typography sx={{ lineHeight: "35px" }}>
            {productDetails.description}
          </Typography>
          <Box sx={{}}>
            <Button
              onClick={() => {
                deleteProduct(id);
                navigate("/products");
              }}
              sx={{
                backgroundColor: "red",
                color: "white",
                width: "30%",
                height: "35px",
              }}
            >
              DELETE
            </Button>
            <Button
              onClick={() => {
                navigate(`/edit/${id}`);
              }}
              sx={{
                color: "black",
                backgroundColor: "whitesmoke",
                width: "30%",
                height: "35px",
                marginLeft: "5%",
              }}
            >
              EDIT
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ProductDetails;
