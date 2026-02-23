import React from "react";
import "@/App.css";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Menu } from "@/components/Menu";
import { Gallery } from "@/components/Gallery";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Toaster } from "@/components/ui/sonner";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Services />
      <Menu />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
