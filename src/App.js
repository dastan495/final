import { Box } from "@mui/material";
import Home from "./components/HomePage/Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import MainRoutes from "./routes/MainRoutes";

// import Slider from "./slider";

function App() {
  return (
    <Box>
      <Navbar />
      {/* <Home /> */}
      <MainRoutes />
      <Footer />
    </Box>
  );
}

export default App;
