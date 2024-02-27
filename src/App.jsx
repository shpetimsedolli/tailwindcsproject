import AOS from "aos";
import "aos/dist/aos.css";

import { Nav } from "./components";
import { Hero, Insights, Products, Ceo } from "./sections";

function App() {
  AOS.init({ duration: 700 });
  return (
    <>
      <section className="herobackround sm: min-h-fit">
        <Nav />
        <Hero />
      </section>
      <Insights />
      <Products />
      <div className="backgroundCeo">
        <Ceo />
      </div>
    </>
  );
}

export default App;
