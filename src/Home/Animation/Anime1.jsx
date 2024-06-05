import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const Anime1 = () => {
  const img1Ref = useRef(null);
  const img2Ref = useRef(null);
  const img3Ref = useRef(null);
  const firstTextRef = useRef(null);
  const secondTextRef = useRef(null);
  const dropArrowRef = useRef(null);

  useEffect(() => {
    const tl1 = gsap.timeline({
      scrollTrigger: {
        trigger: ".empty1",
        start: "top bottom",
        end: "center center",
        scrub: 1,
        ease: "linear",
      },
    });

    tl1
      .to(img1Ref.current, { y: -70, x: -170, rotate: 90 }, "imgs")
      .to(img2Ref.current, { y: -100, x: -10, rotate: 180 }, "imgs")
      .to(img3Ref.current, { y: -5, x: 100, rotate: 270 }, "imgs")
      .to(firstTextRef.current, { opacity: 0 }, "imgs")
      .to(secondTextRef.current, { opacity: 1 }, "imgs")
      .to(dropArrowRef.current, { opacity: 0 });
  }, []);

  return (
    <div>
      <div className="firstSection">
        <div className="firstTextOpacty" ref={firstTextRef}>
          <h1>Discover Financial Bliss,</h1>
          <h2>Charting a Brighter Tomorrow Together!</h2>
          <p>
            Simplify, Organize, and Accelerate Your Financial Operations with
            ViknBooks.
          </p>
          <button id="myBtn" className="firstButton">
            Get a demo
          </button>
        </div>
        <div className="secondTextOpacity" ref={secondTextRef}>
          <h1>Explore Our Building Blocks</h1>
        </div>
        <img
          className="imgs img1"
          src="./Assets/Component 8.png"
          alt=""
          ref={img1Ref}
        />
        <img
          className="imgs img2"
          src="./Assets/Component 4.png"
          alt=""
          ref={img2Ref}
        />
        <img
          className="imgs img3"
          src="./Assets/Component 10.png"
          alt=""
          ref={img3Ref}
        />
      </div>
      <div className="emptySection empty1">
        <div></div>
      </div>
      <div className="droapArrow" ref={dropArrowRef}>
        <div>
          <img className="animeli1" src="./Assets/Icon.svg" alt="rr" />
          <img className="animeli2" src="./Assets/Icon.svg" alt="rr" />
          <img className="animeli3" src="./Assets/Icon.svg" alt="rr" />
        </div>
      </div>
    </div>
  );
};

export default Anime1;
