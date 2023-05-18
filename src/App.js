import React from "react";
import "./App.css";

// bootstrap
import "bootstrap/dist/css/bootstrap.css";

// new meta imports
import {useState, useEffect} from "react";
import jwtDecode from "jwt-decode";

// react-router-dom; we import BrowserRouter but we name it 'Router'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// react-bootstrap components
import { Navbar, Container, Nav, Button } from "react-bootstrap";

// my own components / pages
import UseStateTest from "./components/useStateTest";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import FormSubmitted from "./pages/FormSubmitted";
import Cards from "./pages/Cards";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import Profile from "./pages/Profile";
import Logout from "./pages/Logout";

//providers
import CardProvider from "./providers/CardProvider";
import UserProvider from "./providers/UserProvider";

function App() {

  // define the state
  const [userID, setUserID] = useState({});
  useEffect(() => {
    const token = localStorage.getItem("accessToken");

    // conditional rendering checks userID, so set it to null if no token in local storage
    if (token) {
      setUserID(jwtDecode(token).id);
    } else {
      setUserID(null)
    }
  }, [userID]);
  

  // refer to fun fact below

  // no async bc logout is related to local storage and not the database

  // no need to use blacklisted tokens for now
  // const logout = () => {
  //   alert("User has clicked logout button");
  //   localStorage.removeItem("refreshToken");
  //   localStorage.removeItem('accessToken');
  //   navigate("/login");
  // }

  // fun fact: navigate has to be in a router it can't be in app.js

  return (
    <Router>
      {/* UserProvider to encompass every component so that they can all access user data */}
      <UserProvider>
        {/* NavBar in Router above Routes: this way, it will remain when different routes are switched between */}
        {/* Create the NavBar for the homepage, expand in full size at the md breakpoint and onwards */}
        <Navbar expand="md" id="main-navbar">
          <Container>
            {/* Navbar.Brand is the main element in the navbar */}
            <Navbar.Brand href="#home" className="brand">
              PokéPort
            </Navbar.Brand>
            {/* Navbar.Toggle creates the 'hamburger menu', controls the collapsible Navbar */}
            <Navbar.Toggle aria-controls="home-navbar" />
            <Navbar.Collapse id="home-navbar">
              <Nav className="me-auto">
                {/* We use Link to avoid any page refreshing*/}
                <Link className="nav-link" to="/">
                  Home
                </Link>
                <Link className="nav-link" to="/cards">
                  Cards
                </Link>
                <Link className="nav-link" to="/test">
                  Test
                </Link>
                <Link className="nav-link" to="/about-us">
                  About Us
                </Link>
                <Link className="nav-link" to="/contact-us">
                  Contact Us
                </Link>
                {/* when the rendering is conditional */}
                {userID && userID !== undefined ? 
                               <Link className="nav-link" to="/logout">
                               <Button>Logout</Button>
                             </Link>
                 :
                              <Link className="nav-link" to="/login">
                              <Button>Login</Button>
                            </Link>
                }
                <Link className="nav-link" to="/register">
                  <Button>Register</Button>
                </Link>
                <Link className="nav-link" to="/profile">
                  <Button>Profile</Button>
                </Link>
                <Link className="nav-link" to="/cart">
                  <Button>Cart</Button>
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        {/* The routes are the areas in which pages are displayed. They match URLs to React components. */}
        <Routes>
          {/* Home route */}
          <Route path="/" element={<Home />} />

          {/* useState test route*/}
          <Route path="/test" element={<UseStateTest />} />

          {/* About Us */}
          <Route path="/about-us" element={<AboutUs />} />

          {/* Contact Us */}
          <Route path="/contact-us" element={<ContactUs />}></Route>

          {/* Form submitted. TODO: possible <Switch> block */}
          <Route exact path="/form-submitted" element={<FormSubmitted />}></Route>

          {/* cards ... */}
            <Route path="/cards" element={
              <CardProvider>
                  <Cards />
              </CardProvider>
            }></Route>

          {/* user login*/}
            <Route path="/login" element={
              <Login/>
            }></Route>

          {/* register */}
            <Route path="/register" element={
              <Register/>
            }>
            </Route>

            {/* cart */}
            <Route path="/cart" element={
              <Cart/>
            }></Route>

            {/* profile */}
            <Route path="/profile" element={
              <Profile/>
            }></Route>

            {/* logout */}
            <Route path="/logout" element={
              <Logout/>
            }>
            </Route>

        </Routes>
      </UserProvider>
    </Router>
  );
}

export default App;