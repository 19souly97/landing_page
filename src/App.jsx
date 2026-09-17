import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import ProductGrid from "./components/ProductGrid.jsx";
import TechnologySection from "./components/TechnologySection.jsx";
import QuestionBox from "./components/QuestionBox.jsx";
import Footer from "./components/Footer.jsx";

// App is the main component. It puts every page section together.
function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <ProductGrid />
        <TechnologySection />
        <QuestionBox />
      </main>

      <Footer />
    </>
  );
}

export default App;
