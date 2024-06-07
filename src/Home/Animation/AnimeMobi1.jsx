import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const AnimeMobi1 = () => {
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
    <div style={{ backgroundColor: "black" }}>
    <div className="firstSection">
      <div className="firstTextOpacty" ref={firstTextRef}>
        <h1 style={{ fontSize: "29px", marginBottom: "8px" }}>Discover Financial Bliss,</h1>
        <h2 style={{ fontSize: "25px", width: "280px", margin: "0 auto", marginBottom: "8px"}}>Charting a Brighter Tomorrow Together!</h2>
        <p style={{ fontSize: "15px", width: "347px", margin: "0 auto", marginBottom: "10px"}}>
          Simplify, Organize, and Accelerate Your Financial Operations with
          ViknBooks.
        </p>
        <button style={{ fontSize: "14px"}} id="myBtn" className="firstButton">
          Get a demo
        </button>
      </div>
      <div className="secondTextOpacity" ref={secondTextRef}>
        <h1 style={{ fontSize: "34px"}}>Explore Our Building Blocks</h1>
      </div>
      <img
        className="imgs img1"
        src="./Assets/Component 8.png"
        alt=""
        ref={img1Ref}
        style={{ width: "166.49px" }}
      />
      <img
        className="imgs img2"
        src="./Assets/Component 4.png"
        alt=""
        ref={img2Ref}
        style={{ width: "166.49px", left: "239px" }}
      />
      <img
        className="imgs img3"
        src="./Assets/Component 10.png"
        alt=""
        ref={img3Ref}
        style={{ width: "166.49px" }}
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
  )
}

export default AnimeMobi1