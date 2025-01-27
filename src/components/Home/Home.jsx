import React from "react";
import Hero from "./Hero";
import FeatureSection from "./FeatureSection";
import Stats from "./Stats";
import Gallery from "./Gallery";
import Stories from "./Stories";

function Home() {
  return (
    <>
      <Hero />
      <FeatureSection />
      <Stats/>
      <Stories/>
      <Gallery/>
    </>
  );
}

export default Home;