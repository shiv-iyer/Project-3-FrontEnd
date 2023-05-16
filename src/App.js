import React from "react";
import "./App.css";

// bootstrap
import "bootstrap/dist/css/bootstrap.css";

// react-router-dom; we import BrowserRouter but we name it 'Router'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// react-bootstrap components
import { Navbar, Container, Nav, Button } from "react-bootstrap";

// my own components
import UseStateTest from "./components/useStateTest";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import FormSubmitted from "./pages/FormSubmitted";
import Cards from "./pages/Cards";

//providers
import CardProvider from "./providers/CardProvider";
import UserProvider from "./providers/UserProvider";

function App() {
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
        </Routes>
      </UserProvider>
    </Router>
  );
}

export default App;