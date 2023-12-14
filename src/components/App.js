import { Route, Routes } from "react-router-dom";
import "../styles/App.css";
import Home from "./Home/Home";
import Footer from "./Footer/Footer";
import Navbar from "./NavBar/NavBar";
import { createContext, useState } from "react";
import SignUp from "./Authentication/SignUp";
import Login from "./Authentication/Login/Login";
import FlightSingle from "./Home/FlightSingle/FlightSingle";
import CheckOutPageF from "./Home/CheckOutPageF/CheckOutPageF";


export const LoginButtonContext = createContext();  //login
export const ButtonContext = createContext();  //singup
export const AuthContext = createContext();   //is logged in or not logged in
export const paymentModalState = createContext();
function App() {
  const [loginButton, setLoginButton] = useState();   //undefined
  const [buttonState, setButtonState] = useState();   //undefined

  //Payment Modal State

  const [pmodal, setPmodal] = useState(false)

  //ends payment modal state


  //Main crunch of the authentication program
  let isUserLoggedIn;
  const token = sessionStorage.getItem("userToken");
  if (token) {
    isUserLoggedIn = true;
  } else {
    isUserLoggedIn = false;
  }

  const [isLoggedin, setIsLoggedIn] = useState(isUserLoggedIn)





  return (

    <ButtonContext.Provider value={{ buttonState, setButtonState }}>
      <LoginButtonContext.Provider value={{ loginButton, setLoginButton }}>
        <AuthContext.Provider value={{ isLoggedin, setIsLoggedIn }}>
          <paymentModalState.Provider value={{ pmodal, setPmodal }}>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />


              {/* creating sub routes with id purpose */}

              <Route path="flightSingle/:flightId" element={<FlightSingle />} />
              <Route path="checkoutpagef" element={<CheckOutPageF />} />
            </Routes>
            <SignUp />
            <Login />
          </paymentModalState.Provider >
        </AuthContext.Provider>
      </LoginButtonContext.Provider>
    </ButtonContext.Provider>



  )
}

export default App;
