import { useState } from "react";
import About from "./components/About/About";
import Campus from "./components/Campus/Campus";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Programs from "./components/Programs/Programs";
import Testimonials from "./components/Testimonials/Testimonials";
import Title from "./components/Title/Title";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";

function App() {

  const [playState, setPlayState] = useState(false)

  return (
    <>
      <Navbar />
      <Hero />
      <Title subTitle="Our program" title="What We Offer" />
      <Programs />
      <About setPlayState={setPlayState} />
      <Title subTitle="Campus Photos" title=" Gallery" />
      <Campus />
      <Title subTitle=" What Student Says" title="Testimonials" />
      <Testimonials />
      <Title subTitle="Contact Us" title="Get in touch" />
      <Contact />
      <Footer />
      <VideoPlayer playState={playState} setPlayState={setPlayState} />
    </>
  );
}

export default App;
