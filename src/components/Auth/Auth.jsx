import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { useAuth, AuthContextProvider } from "../../contexts/AuthContext";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function Auth() {
  const navigate = useNavigate();
  const {
    email,
    setEmail,
    emailError,
    password,
    setPassword,
    passwordError,
    hasAccount,
    setHasAccount,
    handleLogin,
    handleSignup,
  } = useAuth();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };
  console.log(passwordError);
  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage:
              "url(https://russia-neft.kg/wp-content/uploads/2019/08/photo1641786567.jpeg)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <Typography
                sx={{ fontWeight: 600, fontSize: { lg: 14, sm: 16 } }}
              >
                Email
              </Typography>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                helperText={emailError}
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                // =======================
                helperText={passwordError}
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              {hasAccount ? (
                <Button
                  className="button_sign_in"
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  onClick={() => {
                    handleLogin();
                    navigate("/");
                  }}
                >
                  Sign In
                </Button>
              ) : (
                <Button
                  className="button_register"
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2, fontWeight: 600 }}
                  onClick={handleSignup}
                >
                  Register
                </Button>
              )}
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>

                <Grid item>
                  {hasAccount ? (
                    <Link
                      className="Links"
                      sx={{ color: "black" }}
                      href="#"
                      variant="body2"
                      onClick={() => setHasAccount(!hasAccount)}
                    >
                      {"Don't have an account? Sign Up"}
                    </Link>
                  ) : (
                    <Link
                      className="links"
                      sx={{ color: "black" }}
                      href="#"
                      variant="body2"
                      onClick={() => setHasAccount(!hasAccount)}
                    >
                      {"Already have an account? Log In"}
                    </Link>
                  )}
                </Grid>

                {/* <Grid item>
                  <Link href="#" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid> */}
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
// import React from "react";
// import {
//   Box,
//   Button,
//   Checkbox,
//   Grid,
//   TextField,
//   Typography,
// } from "@mui/material";
// import { useAuth, AuthContextProvider } from "../../contexts/AuthContext";
// import { Link, Navigate } from "react-router-dom";

// const Auth = () => {
//   const { auth, setAuth } = useAuth();
//   const {
//     email,
//     password,
//     emailError,
//     passwordError,
//     hasAccount,
//     setPassword,
//     setEmail,
//     setHasAccount,
//     handleLogin,
//     handleSignup,
//   } = useAuth();

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const data = new FormData(event.currentTarget);
//     console.log({
//       email: data.get("email"),
//       password: data.get("password"),
//     });
//   };

//   return (
//     <Box
//       className="auth"
//       sx={{
//         // marginTop: "10%",
//         width: "100%",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//       }}
//     >
//       <Box
//         sx={{
//           width: "30%",
//           height: "fit-content",
//           backgroundColor: "white",
//           borderRadius: "20px",
//           display: "flex",
//           flexDirection: "column",
//           padding: 5,
//           boxSizing: "border-box",
//         }}
//       >
//         <Box
//           sx={{
//             display: "flex",
//             justifyContent: "space-between",
//             // margin: "16%",
//           }}
//         >
//           <Typography
//             variant="h4"
//             sx={{
//               textAlign: "center",
//               marginLeft: "7%",
//               position: "absolute",
//               fontSize: "30px",
//             }}
//           >
//             Sign In
//           </Typography>
//           <Typography
//             onClick={() => setAuth(!auth)}
//             sx={{ cursor: "pointer" }}
//           ></Typography>

//           <Box
//             component="form"
//             onSubmit={handleSubmit}
//             noValidate
//             sx={{ width: "100%", margin: "4%", mt: "20%" }}
//           >
//             <Typography
//               sx={{
//                 fontWeight: 600,
//                 fontSize: { xs: 11, sm: 14 },
//                 // paddingTop: "12px",
//               }}
//             >
//               Email
//             </Typography>

//             <TextField
//               className="input-email"
//               required
//               fullWidth
//               id="email"
//               name="email"
//               autoComplete="email"
//               autoFocus
//               // ===========
//               helperText={emailError}
//               value={email}
//               onChange={(e) => {
//                 setEmail(e.target.value);
//               }}
//             />

//             <Box sx={{ mt: 2 }}>
//               <Typography sx={{ fontWeight: 600, fontSize: 14 }}>
//                 Password
//               </Typography>
//               <TextField
//                 className="input-password"
//                 required
//                 fullWidth
//                 name="password"
//                 type="password"
//                 id="password"
//                 autoComplete="current-password"
//                 // ===============
//                 helperText={passwordError}
//                 value={password}
//                 onChange={(e) => {
//                   setPassword(e.target.value);
//                 }}
//                 sx={{ borderRadius: "0" }}
//               />
//             </Box>
//             <Box
//               sx={{
//                 display: "flex",
//                 justifyContent: "space-between",
//                 alignItems: "center",
//               }}
//             >
//               <Box
//                 sx={{
//                   display: "flex",
//                   alignItems: "center",
//                   mt: 0.2,
//                 }}
//               >
//                 {" "}
//                 <Checkbox
//                   value="remember"
//                   color="primary"
//                   sx={{ marginLeft: "-12px" }}
//                 />
//                 <Typography sx={{ fontSize: 14, ml: -1 }}>
//                   Remember me
//                 </Typography>
//               </Box>
//               <Link
//                 className="links"
//                 sx={{
//                   mt: 1,
//                   fontSize: 15,
//                   color: "black",
//                   fontSize: { xs: 13, sm: 15 },
//                 }}
//                 href="#"
//                 variant="body2"
//                 color="primary"
//               >
//                 Forgot password?
//               </Link>
//             </Box>
//             {hasAccount ? (
//               <Button
//                 className="button_sign_in"
//                 type="submit"
//                 fullWidth
//                 variant="contained"
//                 sx={{ mt: 3, mb: 2, fontWeight: 600 }}
//                 onClick={() => {
//                   handleLogin();
//                   Navigate("/");
//                 }}
//               >
//                 Sign in
//               </Button>
//             ) : (
//               <Button
//                 className="button_register"
//                 type="submit"
//                 fullWidth
//                 variant="outlined"
//                 sx={{ mt: 3, mb: 2, fontWeight: 600, backgroundColor: "black" }}
//                 onClick={handleSignup}
//               >
//                 Register
//               </Button>
//             )}

//             <Grid
//               container
//               sx={{
//                 display: "flex",
//                 justifyContent: "center",
//               }}
//             >
//               <Grid item>
//                 {hasAccount ? (
//                   <Link
//                     className="links"
//                     sx={{ color: "black" }}
//                     href="#"
//                     variant="body2"
//                     onClick={() => setHasAccount(!hasAccount)}
//                   >
//                     {"Don't have an account? Register now"}
//                   </Link>
//                 ) : (
//                   <Link
//                     className="links"
//                     sx={{ color: "black" }}
//                     href="#"
//                     variant="body2"
//                     onClick={() => setHasAccount(!hasAccount)}
//                   >
//                     {"Already have an account? Log In"}
//                   </Link>
//                 )}
//               </Grid>
//             </Grid>
//           </Box>
//         </Box>

//         <Box
//           sx={{
//             display: {
//               xs: "none",
//               md: "block",
//             },
//           }}
//           id="line"
//         ></Box>

//         {/* <TextField sx={{ mt: 2 }} /> */}
//         {/* <TextField sx={{ mt: 2 }} /> */}
//         {/* <Button onClick={() => setAuth(!auth)} sx={{ mt: 2, p: 2 }}> */}
//         {/* {" "} */}
//         {/* Sign In */}
//         {/* </Button> */}
//       </Box>
//     </Box>
//   );
// };

// export default Auth;
