import {
  Box,
  Button,
  FormControl,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useProducts } from "../../contexts/ProductContext";

const AddProduct = () => {
  const { addProduct } = useProducts();
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    picture: "",
    type: "",
  });

  const handleInp = (e) => {
    if (e.target.name === "price") {
      let obj = { ...product, [e.target.name]: Number(e.target.value) };
      setProduct(obj);
    } else {
      let obj = { ...product, [e.target.name]: e.target.value };
      setProduct(obj);
    }
  };

  return (
    <Box
      align="center"
      sx={{
        backgroundImage:
          "url(https://img1.akspic.ru/crops/2/5/6/9/6/169652/169652-plyazh-more-okean-priroda-voda-3840x2160.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100%",
        height: "70vh",
        display: "flex",
        marginBottom: "0px",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Typography
        sx={{
          color: "white",
          fontSize: "30px",
        }}
      >
        ADD PRODUCT PANEL
      </Typography>
      <Box
        sx={{
          width: "60vw",
          margin: "3vh auto 10vh",
          display: "grid",
          gridTemplateColumns: "1fr 1fr ",
          gridGap: "10px",
        }}
      >
        <TextField
          onChange={handleInp}
          sx={{
            borderColor: "white",
            backgroundColor: "white",
            borderRadius: "4px",
          }}
          fullWidth
          label="Name"
          variant="outlined"
          name="name"
          size="small"
        />

        <FormControl
          fullWidth
          sx={{ backgroundColor: "white", borderRadius: "4px" }}
        >
          <InputLabel
            sx={{
              fontSize: "18px",
              color: "black",
            }}
            htmlFor="outlined-adornment-amount"
          ></InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            onChange={handleInp}
            placeholder="Price"
            variant="outlined"
            name="price"
            size="small"
            type="number"
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
          />
        </FormControl>
        <TextField
          onChange={handleInp}
          sx={{
            borderColor: "black",
            gridColumn: "1/3",
            backgroundColor: "white",
            borderRadius: "4px",
          }}
          fullWidth
          label="Description"
          variant="outlined"
          name="description"
          size="small"
        />
        <TextField
          onChange={handleInp}
          sx={{
            borderColor: "black",
            backgroundColor: "white",
            borderRadius: "4px",
          }}
          fullWidth
          label="Picture"
          variant="outlined"
          name="picture"
          size="small"
        />
        <TextField
          onChange={handleInp}
          sx={{
            borderColor: "black",
            backgroundColor: "white",
            borderRadius: "4px",
          }}
          fullWidth
          label="Type"
          variant="outlined"
          name="type"
          size="small"
        />
        <Button
          onClick={() => {
            addProduct(product);
            navigate("/products");
          }}
          sx={{
            borderColor: "blue",
            backgroundColor: "#4caf50",
            color: "white",
            transition: "1000s",
            gridColumn: "1/3",
          }}
          variant="outlined"
          fullWidth
          size="large"
        >
          ADD PRODUCT
        </Button>
      </Box>
    </Box>
  );
};

export default AddProduct;
