import { useRef } from "react";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const nextVideoRef = useRef(null);

  useGSAP(() => {
    gsap.set("#video-frame", {
      clipPath: "polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)",
      borderRadius: "0 0 40% 100%",
    });
    gsap.from("#video-frame", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      borderRadius: "0 0 0 0",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#video-frame",
        start: "center center",
        end: "bottom center",
        scrub: true,
      },
    });
  });

  const getVideoSource = () => {
    return `videos/hero-1.mp4`;
  };

  return (
    <div id="home" className="relative h-dvh w-screen overflow-x-hidden">
      <div
        id="video-frame"
        className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75"
      >
        <video
          autoPlay
          loop
          muted
          id="current-video"
          className="absolute top-0 left-0 w-full h-full object-cover"
          ref={nextVideoRef}
          src={getVideoSource()}
        />

        <div className="absolute left-0 top-0 z-40 size-full">
          <div className="mt-24 px-5 sm:px-10">
            <img src="img/logo.png" alt="logo" />
            <p className="mb-5 max-w-64 font-robert-regular text-blue-100">
              This is the story <br />
              of our battle against the future.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
