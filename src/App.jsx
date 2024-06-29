import About from "./components/About/About";
import Campus from "./components/Campus/Campus";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Programs from "./components/Programs/Programs";
import Testimonials from "./components/Testimonials/Testimonials";
import Title from "./components/Title/Title";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Title subTitle="Our program" title="What We Offer" />
      <Programs />
      <About />
      <Title subTitle="Campus Photos" title=" Gallery" />
      <Campus />
      <Title subTitle=" What Student Says" title="Testimonials" />
      <Testimonials />
      <Title subTitle="Contact Us" title="Get in touch" />
      <Contact />
      <Footer /> 
    </>
  );
}

export default App;
