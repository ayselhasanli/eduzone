import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Programs from "./components/Programs/Programs";
import Title from "./components/Title/Title";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Title subTitle = 'Our program'  title='What We Offer' />
      <Programs />
    </>
  );
}

export default App;
