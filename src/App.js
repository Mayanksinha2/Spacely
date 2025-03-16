import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import SignUpForm from "./components/SignUpForm";
import OtpForm from "./components/OtpForm";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import LoginForm from "./components/LoginForm";
import ImageCarousel from "./components/ImageCarousel";
import Inbox from "./components/InboxForm";
import ImageGrid from './components/gallary';
import Accordion from "./components/accordion";
import Footer from "./components/footer";
import SearchBar from "./components/search";
import TestimonialCarousel from "./components/TestimonialCarousel";
import WhyChooseUs from "./components/ChooseUs";


import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signupform" element={<SignUpForm />} />
        <Route path="/login" element={<Login />} />
        <Route path="/otpform" element={<OtpForm />} />
        <Route path="/home" element={<Home />} />
        <Route path="/navbar" element={<NavBar />} />
        <Route path="/loginform" element={<LoginForm />} />
        <Route path="/inboxform" element={<Inbox />} />
        <Route path="/imagecarousel" element={<ImageCarousel />} />
        <Route path="/accordion" element={<Accordion />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/gallary" element={<ImageGrid />} />
        <Route path="/search" element={<SearchBar />} />
        <Route path="/testimonialcarousel" element={<TestimonialCarousel />} />
        <Route path="/whychooseus" element={<WhyChooseUs />} />
      
        <Route
          path="/imagecarousel"
          element={
            <ImageCarousel
              images={[
                "/Images/img1.png",
                "/Images/img2.png",
                "/Images/img3.png",
                "/Images/img2.png",
                "/Images/img3.png",
              ]}
              currentIndex={0}
              handlePrev={() => {}}
              handleNext={() => {}}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
