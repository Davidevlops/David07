import React from "react";
import About from "./layout/about/About";
// import Header from "./layout/hero/components/Header";
import Introduction from "./layout/hero/components/Introduction";
import Navbar from "./layout/hero/components/Navbar";
import Numbers from "./layout/numbers/Numbers";
import OurServices from "./layout/ourServices/OurServices";
import Testimonial from "./layout/partners/Partners";
import Team from "./layout/team/team";
import Prefooter from "./layout/Prefooter/Prefooter";
import Footer from "./layout/Footer/Footer";
// import homeStyles from "./styles/hero.module.css";

function Home() {
  return (
    <div>
      <Navbar />
      <Introduction />
      {/* <Header /> */}
      <About />
      <OurServices />
      <Testimonial />
      <Numbers />
      <Team />
      <Prefooter />
      <Footer />
    </div>
  );
}

export default Home;
