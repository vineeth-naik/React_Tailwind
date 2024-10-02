import React from "react";
import NavBar from "../Components/NavBar";
import Hero from "../Components/Hero";
import Content from "../Components/Content";
import Ecommerce from "../Components/Ecommerce";
import Gallery from "../Components/Gallery";
import Features from "../Components/Features";
import Pricing from "../Components/Pricing";
import Team from "../Components/Team";
import Testimonials from "../Components/Testimonials";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";

const LandingPage = ( {change} ) => {
    return(
        <div>
             <NavBar change = {change} />
             <Hero />
             <Content />
             <Ecommerce />
             <Gallery />
             <Features />
             <Pricing />
             <Team />
             <Testimonials />
             <Contact />
             <Footer />
        </div>
    )
}

export default LandingPage;