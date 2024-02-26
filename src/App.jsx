import AOS from "aos";
import "aos/dist/aos.css";

import { Nav } from "./components";
import { Hero, Insights } from "./sections";

function App() {
  AOS.init({ duration: 700 });
  return (
    <>
      <section className="herobackround">
        <Nav />
        <Hero />
      </section>
      <Insights />
    </>
  );
}

export default App;
