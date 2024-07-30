import { BrowserRouter } from "react-router-dom";

import {  About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas, } from "./components";
import LazyLoader from "./components/LazyLoader";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <LazyLoader>
          <About />
        </LazyLoader>
        <LazyLoader>
          <Experience />
        </LazyLoader>
        <LazyLoader>
          <Tech />
        </LazyLoader>
        <LazyLoader>
          <Works />
        </LazyLoader>
        <LazyLoader>
          <Feedbacks />
        </LazyLoader>
        <div className="relative z-0">
          <LazyLoader>
            <Contact />
          </LazyLoader>
          <LazyLoader>
            <StarsCanvas />
          </LazyLoader>
        </div>
      </div>
    </BrowserRouter>
  );
};


export default App;
