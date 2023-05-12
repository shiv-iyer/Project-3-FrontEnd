import React from 'react';
import './App.css';

// bootstrap
import "bootstrap/dist/css/bootstrap.css";

// react-router-dom; we import BrowserRouter but we name it 'Router'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

// react-bootstrap components
import {Navbar, Container, Nav} from 'react-bootstrap';

// my own components
import UseStateTest from "./components/useStateTest";
import Home from "./pages/Home";

function App() {
  return (
    // <Router> defines the area in which any routing can occur
    <Router>
      {/* NavBar in Router above Routes */}
         {/* Create the NavBar for the homepage, expand in full size at the md breakpoint and onwards */}
         <Navbar expand="md" id="main-navbar">
                    <Container>
                    {/* Navbar.Brand is the main element in the navbar */}
                        <Navbar.Brand href="#home" className="brand">
                            PokéPort</Navbar.Brand>
                        {/* Navbar.Toggle creates the 'hamburger menu', controls the collapsible Navbar */}
                        <Navbar.Toggle aria-controls="home-navbar"/>
                        <Navbar.Collapse id="home-navbar">
                            <Nav className="me-auto">
                              {/* We use Link to avoid any page refreshing*/}
                              <Link className="nav-link" to="/">Home</Link>
                              <Link className="nav-link" to="/test">Test</Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                    </Navbar>
      {/* The routes are the areas in which pages are displayed */}
      <Routes>
        {/* Home route */}
        <Route path="/" element= {
          <Home/>
        }/>

        {/* useState test route*/}
        <Route path="/test" element={<UseStateTest/>}/>

      </Routes>
    </Router>
  )
}

export default App;
