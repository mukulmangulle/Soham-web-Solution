import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './Component/Header';
import Navbar from './Component/Navbar';
import Footer from "./Component/Footer";
import HomeSection from "./Component/HomeSection";
import Contact from "./Pages/ContactPage/Contact";
import Blog from "./Pages/Blogpage/Blog";
import Aboutmain from "./Pages/Aboutpage/Aboutmain";
import Careermain from "./Pages/CareerPage/Careermain";
import Mnavbar from "./Component/M-navbar";
import Service from "./Pages/ServicePage/Service";
import Festival_title from "./Pages/Blogs/Festival_title";
import Singlecontent from "./Pages/Blogs/Singlecontent";
import AllBlogs from "./Pages/Blogs/AllBlogs";
import ScrollToTop from "./ScrollToTop";
import ContactUsSohamweb from "./Pages/ContactPage/ContactUsSohamweb";
import PhpDepartment from "./Pages/DevelopmentPage/PhpDepartment";
import WordPress from "./Pages/DevelopmentPage/WordPress";
import Shopify from "./Pages/DevelopmentPage/Shopify";
import WebDesigning from "./Pages/DevelopmentPage/WebDesigning";
import Graphic from "./Pages/DevelopmentPage/Graphic";
import Ecommerce from "./Pages/DevelopmentPage/Ecommerce";
import { Height } from "@mui/icons-material";
import { Box } from "@mui/material";
import OurJourney from "./OurJourney";
import Service_form_section from "./Pages/ServicePage/Service_form_section";
import Laraval from "./Pages/DevelopmentPage/Laraval";
import Codeigniter from "./Pages/DevelopmentPage/Codeigniter";
import React_Native from "./Pages/DevelopmentPage/React_Native";
import Privacy from "./Pages/FooterPage/Privacy";
import Terms from "./Pages/FooterPage/Terms";
import Support from "./Pages/FooterPage/Support";
import Shipping from "./Pages/FooterPage/Shipping";
import Refund_policy from "./Pages/FooterPage/Refund_policy";



function App() {
  const url_slug = "https://wp.phpcodedemo"
  let Api_url = "https://sohamsolution.com/wp-json/wp/v2/"

  return (
   <Box className="man-web width1920">
     <Router>
      <ScrollToTop />

      {/* <Mnavbar /> */}
      <Header />
      <Navbar />

      <Routes>
        <Route path="/" element={<HomeSection />} />
        <Route path={`/${process.env.SLUG_URL}/about/`} element={<Aboutmain />} />
        <Route path={`/${process.env.SLUG_URL}/contact-us/`} element={<ContactUsSohamweb />} />
        <Route path={`/${process.env.SLUG_URL}/bloges`} element={<Blog />} />

        <Route path={`/${process.env.SLUG_URL}/blogs`} element={<AllBlogs Api_url={Api_url} url_slug={url_slug} />} />
        <Route path={`/${process.env.SLUG_URL}/:id`} element={<Singlecontent Api_url={Api_url} />} />
        <Route path={`/${process.env.SLUG_URL}/categories/:id`} element={<Festival_title url_slug={url_slug} />} />

        <Route path={`/${process.env.SLUG_URL}/career/`} element={<Careermain />} />
        <Route path={`/${process.env.SLUG_URL}/services/`} element={<Service />} />

        <Route path={`/${process.env.SLUG_URL}/services/php-development/`} element={<PhpDepartment />} />
        <Route path={`/${process.env.SLUG_URL}/services/wordpress-development/`} element={<WordPress />} />
        <Route path={`/${process.env.SLUG_URL}/services/shopify-development/`} element={< Shopify />} />
        <Route path={`/${process.env.SLUG_URL}/services/web-designing/`} element={<WebDesigning />} />
        <Route path={`/${process.env.SLUG_URL}/services/graphic-designing/`} element={<Graphic />} />
        <Route path={`/${process.env.SLUG_URL}/services/ecommerce-development/`} element={<Ecommerce />} />
        <Route path={`/${process.env.SLUG_URL}/services/laraval-development/`} element={<Laraval />} />
        <Route path={`/${process.env.SLUG_URL}/services/Codeigniter_development/`} element={<Codeigniter />} />
        <Route path={`/${process.env.SLUG_URL}/services/react-native-development/`} element={<React_Native />} />
       
        <Route path={`/${process.env.SLUG_URL}/requirement/`} element={<Service_form_section/>} />
        <Route path={`/${process.env.SLUG_URL}/life-at-soham/`} element={<OurJourney/>} />


        <Route path={`/${process.env.SLUG_URL}/privacy-policy/`} element={<Privacy/>} />
        <Route path={`/${process.env.SLUG_URL}/terms-conditions/`} element={<Terms/>} />
        <Route path={`/${process.env.SLUG_URL}/support-and-maintenance-packages/`} element={<Support/>} />
        <Route path={`/${process.env.SLUG_URL}/shipping-delivery-policy/`} element={<Shipping/>} />
        <Route path={`/${process.env.SLUG_URL}/cancellation-refund-policy/`} element={<Refund_policy/>} />

      </Routes>


    </Router>
   </Box>
  );
}

export default App;
