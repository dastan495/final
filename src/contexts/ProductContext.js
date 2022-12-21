import axios from "axios";
import React, { createContext, useContext, useReducer, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ACTIONS, JSON_API_PRODUCTS } from "../helpers/consts";

export const productContext = createContext();
// const location = useLocation();

// const location = useLocation();
export const useProducts = () => {
  return useContext(productContext);
};

const INIT_STATE = {
  products: [],
  productDetails: {},
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ACTIONS.GET_PRODUCTS:
      return { ...state, products: action.payload };

    case ACTIONS.GET_PRODUCT_DETAILS:
      return { ...state, productDetails: action.payload };

    default:
      return state;
  }
};

const ProductContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  async function addProduct(newProduct) {
    await axios.post(JSON_API_PRODUCTS, newProduct);
    getProducts();
  }

  async function getProducts() {
    const { data } = await axios(
      `${JSON_API_PRODUCTS}${window.location.search}`
    );
    dispatch({
      type: ACTIONS.GET_PRODUCTS,
      payload: data,
    });
  }

  async function getProductDetails(id) {
    const { data } = await axios(`${JSON_API_PRODUCTS}/${id}`);
    dispatch({
      type: ACTIONS.GET_PRODUCT_DETAILS,
      payload: data,
    });
  }

  async function saveEditedProduct(newProduct, id) {
    await axios.patch(`${JSON_API_PRODUCTS}/${id}`, newProduct);
    getProducts();
  }

  async function deleteProduct(id) {
    await axios.delete(`${JSON_API_PRODUCTS}/${id}`);
    getProducts();
  }

  // //! ===============FILTER
  const navigate = useNavigate();
  const location = useLocation();

  const fetchByParams = async (query, value) => {
    const search = new URLSearchParams(location.search);

    if (value === "All") {
      search.delete(query);
    } else if (query == "_sort") {
      search.set(query, "price");
      search.set("_order", value);
    } else {
      search.set(query, value);
    }

    const url = `${location.pathname}?${search.toString()}`;
    navigate(url);
  };

  function searchData(input) {
    let search = state.products.filter((item) => {
      if (item.name.toLowerCase().includes(input.toLowerCase()) == true) {
        return true;
      } else {
        return false;
      }
    });
    dispatch({
      type: "GET_PRODUCTS",
      payload: search,
    });
  }

  // // ! paginaton
  // const locations = useLocation();
  // const [page, setPage] = useState(1);
  // const itemsPerPage = 8;
  // const count = Math.ceil(data.length / itemsPerPage);

  // function currentData() {
  //   const begin = (page - 1) * itemsPerPage;
  //   const end = begin.slice(begin, end);
  // }

  const values = {
    fetchByParams,
    addProduct,
    products: state.products,
    getProducts,
    getProductDetails,
    productDetails: state.productDetails,
    saveEditedProduct,
    deleteProduct,
    searchData,
    // currentData,
  };
  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContextProvider;

// import axios from "axios";
// import { addDoc, collection, getDocs } from "firebase/firestore";
// import React, { createContext, useContext, useReducer } from "react";
// import { db } from "../fire";
// // import { JSON_API_PRODUCTS } from "../helpers/consts";
// import { ACTIONS, JSON_API_PRODUCTS } from "../helpers/consts";
// export const productContext = createContext();

// export const useProducts = () => {
//   return useContext(productContext);
// };

// const INIT_STATE = {
//   products: [],
//   productDetails: {},
// };

// const reducer = (state = INIT_STATE, action) => {
//   switch (action.type) {
//     case ACTIONS.GET_PRODUCTS:
//       return { ...state, products: action.payload };

//     case ACTIONS.GET_PRODUCT_DETAILS:
//       return { ...state, productDetails: action.payload };

//     default:
//       return state;
//   }
// };

// const ProductContextProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(reducer, INIT_STATE);
//   const productsCollectionRef = collection(db, "project");

//   async function addProduct(newProduct) {
//     await addDoc(productsCollectionRef, newProduct);
//     getProducts();
//     console.log(newProduct);
//   }

//   // async function getProducts() {
//   //   const { data } = await axios(
//   //     `${JSON_API_PRODUCTS}${window.location.search}`
//   //   );
//   //   dispatch({
//   //     type: ACTIONS.GET_PRODUCTS,
//   //     payload: data,
//   //   });
//   // }
//   async function getProducts() {
//     const { data } = await getDocs(
//       productsCollectionRef
//       // `${JSON_API_PRODUCTS}${window.location.search}`

//     );
//     dispatch({
//       type: ACTIONS.GET_PRODUCTS,
//       payload: data,
//     });
//   }
//   // //! getMusic
//   // async function getProducts() {
//   //   const data = await getDocs(productsCollectionRef);
//   //   dispatch(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
//   // }

//   async function getProductDetails(id) {
//     const { data } = await axios(`${JSON_API_PRODUCTS}/${id}`);
//     dispatch({
//       type: ACTIONS.GET_PRODUCT_DETAILS,
//       payload: data,
//     });
//   }

//   async function saveEditedProduct(newProduct, id) {
//     await axios.patch(`${JSON_API_PRODUCTS}/${id}`, newProduct);
//     getProducts();
//   }

//   async function deleteProduct(id) {
//     await axios.delete(`${JSON_API_PRODUCTS}/${id}`);
//     getProducts();
//   }
//   // console.log();

//   const values = {
//     // fetchByParams,
//     addProduct,
//     products: state.products,
//     getProducts,
//     getProductDetails,
//     productDetails: state.productDetails,
//     saveEditedProduct,
//     deleteProduct,
//   };
//   return (
//     <productContext.Provider value={values}>{children}</productContext.Provider>
//   );
// };

// export default ProductContextProvider;
