import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AnimeMobi2 = () => {
    const empty2Ref = useRef(null);
    const sideUlRef = useRef(null);
    const firstLiRef = useRef(null);
    const secondLiRef = useRef(null);
    const firsrimgRef = useRef(null);
    const secondImgRef = useRef(null);
    const sub1Ref = useRef(null);
    const sub2Ref = useRef(null);
    const mainImgRef = useRef(null);
    const thirdAnimeRef = useRef(null);
    const sub3Ref = useRef(null);
    const sub4Ref = useRef(null);
    const sub5Ref = useRef(null);
  
    useEffect(() => {
      const tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: empty2Ref.current,
          start: 'top bottom',
          end: 'center center',
          scrub: 1,
          ease: 'linear',
        },
      });
  
      tl2.to(sideUlRef.current, { transform: 'translateX(-22%)', duration: 0.5 }, 'opc')
        .to(firstLiRef.current, { color: '#b2b2b2', duration: 0.5 }, 'opc')
        .to(secondLiRef.current, { color: '#04294A', duration: 0.5 }, 'opc')
        .to(firsrimgRef.current, { opacity: 0, duration: 0.5 }, 'opc')
        .to(secondImgRef.current.querySelectorAll('img'), { opacity: 1, duration: 0.5 }, 'opc')
        .from([sub1Ref.current, sub2Ref.current, mainImgRef.current], { stagger: 0.2, x: 50, duration: 0.5 }, 'opc');
  
      const tl3 = gsap.timeline({
        scrollTrigger: {
          trigger: thirdAnimeRef.current,
          start: 'top bottom',
          end: 'center center',
          scrub: 1,
          ease: 'linear',
          markers: true,
        },
      });
  
      tl3.to(sub5Ref.current, { transform: 'translate(106%, 279%)' }, 'slide')
        .to(sub3Ref.current, { transform: 'translate(95%, 350%)' }, 'slide')
        .to(sub4Ref.current, { transform: 'translate(-237%, 300%)' }, 'slide');
    }, []);
  return (
    <div>
    <div className="secndAnime">
      <div className="thirdContainer">
        <div className="thireDiver">
          <ul ref={sideUlRef} className="sideUl">
            <li ref={firstLiRef} className="firstLi">Sales and Purchase</li>
            <li ref={secondLiRef} className="secondLi">Payments and Receipts</li>
          </ul>
        </div>
        <div ref={secondImgRef} className="imgContainers">
          <div ref={firsrimgRef} className="firsrimg">
            <img src="./Assets/Group 4663 (2).png" alt="" />
          </div>
          <div className="secondImg">
            <img ref={mainImgRef} className="mainImg" src="./Assets/image 13.png" alt="" />
            <img ref={sub1Ref} className="sub1" src="./Assets/image 14.png" alt="" />
            <img ref={sub2Ref} className="sub2" src="./Assets/image 15.png" alt="" />
            <img ref={sub3Ref} className="imgs sub3" src="./Assets/Component 8.png" alt="" />
            <img ref={sub4Ref} className="imgs sub4" src="./Assets/Component 4.png" alt="" />
            <img ref={sub5Ref} className="imgs sub5" src="./Assets/Component 10.png" alt="" />
          </div>
        </div>
      </div>
      <div ref={empty2Ref} className="emptySection empty2">
        <div></div>
      </div>
    </div>

    <div ref={thirdAnimeRef} className="thirdAnime">
      <h2 id="viknApp" className="thirdH1">Viknbooks App</h2>
      <p className="thirdP">
        Simplify, Organize, and Accelerate Your Financial Operations with
        ViknBooks.
      </p>
      <div className="thirdImgSection">
        <img className="imgs timg5" src="./Assets/Group 4648 1.png" alt="" />
        <img className="imgs timg4" src="./Assets/Frame 60 1.png" alt="" />
        <img className="timg6" src="./Assets/iPhone 14 Pro Max - 1 1.png" alt="" />
      </div>
    </div>
  </div>
  )
}

export default AnimeMobi2