import { Button, CardMedia, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import ProductList from "../components/Products/ProductList";
import ProductSortPagination from "../components/Products/ProductSortPagination";
import { useProducts } from "../contexts/ProductContext";
import TextField from "@mui/material/TextField";
import { useSearchParams } from "react-router-dom";
// import Box from "@mui/material/Box";
// import * as React from "react";

const ProductsPage = () => {
  const { products, getProducts, searchData } = useProducts();
  const [search, setSearch] = useState("");
  useEffect(() => {
    getProducts();
  }, []);

  const [page, setPage] = useState(1);
  const itemsPerPage = 5;
  const count = Math.ceil(products.length / itemsPerPage);

  function currentData() {
    const begin = (page - 1) * itemsPerPage;
    const end = begin + itemsPerPage;
    return products.slice(begin, end);
  }

  //! SEARCH
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    getProducts();
    setPage(1);
  }, [searchParams]);
  //! SEARCH

  return (
    <div>
      <Box
        sx={{
          backgroundImage: `url("https://russia-neft.kg/wp-content/themes/rn/assets/images/energy-engineering-banner.jpg")`,
          height: "365px",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            marginLeft: "38%",
            color: "white",
            paddingTop: "8%",
            fontWeight: "600",
          }}
        >
          заправки
        </Typography>
        <Typography
          variant="p"
          sx={{
            marginLeft: "42%",
            color: "white",
            paddingTop: "19%",
            fontSize: "20px",
          }}
        >
          Home - Gas stations
        </Typography>
      </Box>

      <Box
        sx={{
          mt: "5%",
          ml: "50%",
          width: 600,
          maxWidth: "100%",
          color: "white",
        }}
      >
        <TextField
          onChange={(e) => setSearch(e.target.value)}
          sx={{
            color: "white",
            background: "white",
            borderRadius: "8%",
            // mr: "12%",
          }}
          fullWidth
          label="search"
          id="search"
        />
        <Button
          sx={{ position: "absolute", ml: "-6%", mt: "1%" }}
          onClick={() => {
            searchData(search);
          }}
        >
          search
        </Button>
      </Box>
      <Box sx={{ pt: "3%" }}>
        <ProductSortPagination
          page={page}
          setPage={setPage}
          count={count}
        ></ProductSortPagination>
      </Box>
      <ProductList currentData={currentData} />
    </div>
  );
};

export default ProductsPage;
{
  /* <ProductSortPagination /> */
}
