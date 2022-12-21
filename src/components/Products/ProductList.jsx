import { Box } from "@mui/system";
import React, { useContext, useEffect } from "react";
import { Pagination } from "swiper";
import { productContext, useProducts } from "../../contexts/ProductContext";
import ProductCard from "./ProductCard";
import ProductSortPagination from "./ProductSortPagination";

const ProductList = ({ currentData }) => {
  // const { products, getProducts, searchData } = useProducts();
  // const { currentData } = useContext(productContext);
  const { products, getProducts, searchData } = useProducts();

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <Box>
      <Box
        sx={{
          // marginTop: "7%",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
          marginLeft: "10px",
        }}
      >
        {/* {products.map((item, index) => (
        <ProductCard key={index} item={item} />
      ))} */}
        {products ? (
          currentData().map((item) => <ProductCard key={item.id} item={item} />)
        ) : (
          <></>
        )}
      </Box>
      {/* <ProductSortPagination
        page={page}
        setPage={setPage}
        count={count}
      ></ProductSortPagination> */}
    </Box>
  );
};

export default ProductList;
