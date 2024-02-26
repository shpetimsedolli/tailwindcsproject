import AOS from "aos";
import "aos/dist/aos.css";

import { Nav } from "./components";
import { Hero } from "./sections";

function App() {
  AOS.init({ duration: 700 });
  return (
    <>
      <section className="herobackround">
        <Nav />
        <Hero />
      </section>
    </>
  );
}

export default App;
