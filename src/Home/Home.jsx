import React, { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
import Anime1 from "./Animation/Anime1";
import Anime2 from "./Animation/Anime2";
import Curosole from "./Static/Curosole";
import AnimeMobi1 from "./Animation/AnimeMobi1";
import AnimeMobi2 from "./Animation/AnimeMobi2";

// gsap.registerPlugin(ScrollTrigger);

const Home = () => {

  return (
    <>
      <Anime1 />
      <Anime2 />
      {/* <AnimeMobi1 />
      <AnimeMobi2 /> */}
      <Curosole />
    </>
  );
};

export default Home;
