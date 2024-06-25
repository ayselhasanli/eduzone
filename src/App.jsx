import About from "./components/About/About";
import Campus from "./components/Campus/Campus";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Programs from "./components/Programs/Programs";
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
    </>
  );
}

export default App;
