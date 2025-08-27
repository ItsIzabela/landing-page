import { useState } from 'react'
import './App.css'
import Hero from "./components/hero"
import Features from "./components/Features"
import Pricing from "./components/pricing"
import FAQ from "./components/FAQ"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

function App() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <AppBar position="fixed" color="primary">
        <Toolbar sx={{ display: "flex" }}>
          {/* Nazwa strony przy lewej krawędzi */}
          <Typography variant="h3" sx={{ flexGrow: 0 }}>
            <b>DevStarter</b>
          </Typography>

          {/* Rozdzielenie reszty przycisków równomiernie */}
          <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "space-around", marginLeft: 4 }}>
            <Button color="inherit" onClick={() => scrollToSection("features")}>
              Features
            </Button>
            <Button color="inherit" onClick={() => scrollToSection("pricing")}>
              Pricing
            </Button>
            <Button color="inherit" onClick={() => scrollToSection("faq")}>
              FAQ
            </Button>
            <Button color="inherit" onClick={() => scrollToSection("contact")}>
              Contact
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      <div style={{ marginTop: "80px" }}>
        <Hero />
        <br />
        <hr color='primary'/>

        <div id="features">
          <Features />
        </div>
        <br />
        <hr color='primary'/>

        <div id="pricing">
          <Pricing />
        </div>
        <br />
        <hr color='primary'/>

        <div id="faq">
          <FAQ />
        </div>
        <br />
        <hr color='primary'/>


        <div id="contact">
          <Contact />
        </div>
        <br />

        <Footer />
      </div>
    </>
  )
}

export default App
