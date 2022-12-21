import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { CardMedia, createTheme } from "@mui/material";
import { ThemeProvider } from "styled-components";

import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { ADMIN } from "../../helpers/consts";
import "./navbar.css";

const pages = [
  {
    label: "ГЛАВНАЯ",
    path: "/",
    id: 1,
  },
  {
    label: "О НАС",
    path: "/AboutUs",
    id: 2,
  },
  {
    label: "ЗАПРАВКИ",
    path: "/products",
    id: 3,
  },

  // {
  //   label: "КОНТАКТЫ",
  //   path: "/contactus",
  //   id: 4,
  // },
  // {
  //   label: "СОЗДАТЬ",
  //   path: "/adminPage",
  //   id: 5,
  // },

  // "О НАС",
  // "ЗАПРАВКИ",
  // "КОНТАКТЫ",
];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function Navbar() {
  let [cartOpen, setCartOpen] = React.useState(false);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const {
    user: { email },
    handleLogout,
  } = useAuth();

  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 375,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536,
        some: 768,
      },
    },
  });
  const navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <header>
      <ThemeProvider theme={theme}>
        <AppBar sx={{ backgroundColor: "#00352c" }} position="static">
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              {/* <Link to="/"> */}
              <CardMedia
                sx={{
                  width: "6%",
                  display: { xs: "none", md: "flex" },
                  mr: 85,
                }}
                component="img"
                onClick={() => navigate("/")}
                image="https://russia-neft.kg/wp-content/themes/rn/assets/images/header3-logo.png"
                alt=""
              />
              {/* </Link> */}
              <Typography
                variant="h6"
                noWrap
                component="a"
                onClick={() => navigate("/")}
                // href="/"
                sx={{
                  mr: 1,
                  display: { xs: "none", md: "flex" },
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              ></Typography>

              <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: "block", md: "none" },
                  }}
                >
                  {pages.map((page) => (
                    <MenuItem
                      key={page.path}
                      onClick={() => {
                        navigate(page.path);
                        handleCloseNavMenu();
                      }}
                    >
                      <Typography textAlign="center">{page.label}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
              <CardMedia
                sx={{
                  width: { xs: "20%", md: "12%" },
                  display: { xs: "flex", md: "none" },
                  mr: 1,
                }}
                component="img"
                image="https://russia-neft.kg/wp-content/themes/rn/assets/images/header3-logo.png"
                alt=""
              />
              <Typography
                variant="h5"
                noWrap
                component="a"
                href=""
                sx={{
                  mr: 2,
                  display: { xs: "flex", md: "none" },
                  flexGrow: 1,
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                {/* {Image} */}
              </Typography>
              <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                {pages.map((page) => (
                  <Button
                    key={page.id}
                    onClick={() => {
                      handleCloseNavMenu();
                      navigate(page.path);
                    }}
                    // className="word"
                    sx={{ my: 2, color: "white", display: "block", mr: "5%" }}
                  >
                    {page.label}
                  </Button>
                ))}
              </Box>
              {email === ADMIN ? (
                <Button
                  sx={{ color: "white", ml: "1%" }}
                  onClick={() => navigate("/adminPage")}
                >
                  СОЗДАТЬ
                </Button>
              ) : (
                <></>
              )}

              <Box sx={{ flexGrow: 1 }} />
              <Box
                sx={{
                  display: { xs: "", md: "flex" },
                  // width: { xs: "12%", md: "19%" },
                }}
              >
                <IconButton
                  sx={{
                    width: "30%",
                    ml: "6%",
                    transition: "color 500ms ease",
                  }}
                  size="large"
                  aria-label="show 4 new mails"
                  color="inherit"
                >
                  <header>
                    <Badge sx={{ ml: "91%" }} badgeContent={0} color="error">
                      <BookmarkIcon
                        className="ab"
                        onClick={() => navigate("/cart")}
                      />
                    </Badge>
                  </header>
                </IconButton>

                <IconButton
                  sx={{ width: "10%" }}
                  size="large"
                  aria-label="show 17 new notifications"
                  color="inherit"
                >
                  {/* <Badge badgeContent={2} color="error"> */}
                  {/* <SearchIcon /> */}
                  {/* </Badge> */}
                </IconButton>
                <Tooltip>
                  <IconButton sx={{ p: 0, width: "25px", color: "white" }}>
                    <SearchIcon className="search" />
                  </IconButton>
                </Tooltip>

                <Tooltip title="Open settings">
                  <IconButton
                    onClick={handleOpenUserMenu}
                    sx={{ p: 0, width: "30px" }}
                  >
                    <PersonIcon className="person" sx={{ color: "white" }} />
                    {/* <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" /> */}
                  </IconButton>
                </Tooltip>

                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {email ? (
                    <MenuItem onClick={handleLogout}>
                      <Typography textAlign="center">Logout</Typography>
                    </MenuItem>
                  ) : (
                    <Link to="/auth">
                      <MenuItem onClick={handleLogout}>
                        <Typography textAlign="center">login</Typography>
                      </MenuItem>
                    </Link>
                  )}
                </Menu>

                {/* <IconButton
                onClick={() => {
                  navigate("/auth");
                }}
                sx={{ width: "30%" }}
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-haspopup="true"
                color="inherit"
              >
                <PersonIcon />
              </IconButton> */}
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </ThemeProvider>
    </header>
  );
}
export default Navbar;
