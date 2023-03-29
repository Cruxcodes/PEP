import React from "react";
import Navbar from "../components/LandingPage/Navbar";
import Header from "../components/LandingPage/Header";
import * as landing from "../components/LandingPage";
import { useEffect } from "react";

function LandingPage() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "../js/script.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <div>
      <Navbar />
      <Header />
      <landing.Testimonial />
      <landing.Videos />
      <landing.Section/>
      <landing.TwitterConversations />
    </div>
  );
}

export default LandingPage;
