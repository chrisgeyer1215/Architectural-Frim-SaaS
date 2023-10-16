"use client";
import { useEffect, useRef } from "react";
import { useTransform, useScroll } from "framer-motion";
import Lenis from "@studio-freight/lenis";
import Column  from "@/components/parallax/column";
import useDimension from "@/hooks/use-dimension";

// Array of image URLs
const images = [
  "/images/1.png",
  "/images/2.png",
  "/images/3.png",
  "/images/4.png",
  "/images/5.png",
  "/images/6.png",
  "/images/7.png",
  "/images/8.png",
  "/images/9.png",
  "/images/10.png",
  "/images/11.png",
  "/images/12.png",
];

const ColumnContainer: React.FC = () => {
  // Create a reference for the columnContainer element
  const columnContainer = useRef(null);
  // Get the height value property from the dimension state
  const { height } = useDimension();
  // Get scrollYProgress using the useScroll hook on the columnContainer element
  const { scrollYProgress } = useScroll({
    target: columnContainer,
    //Start tracking at the bottom of the window and top of the columnContainer and stop tracking at the top of the window and bottom of the columnContainer
    offset: ["start end", "end start"],
  });

  // Calculate transformations based on scrollYProgress and height
  const y = useTransform(scrollYProgress, [0, 1], [0, height * 1]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 0.5]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 0.2]);

  useEffect(() => {
    const lenis = new Lenis();

    // Define a recursive animation function using requestAnimationFrame
    function raf(time: any) {
      lenis.raf(time); // Update the Lenis instance with the current time
      requestAnimationFrame(raf); // Request the next animation frame
    }

    requestAnimationFrame(raf); // Start the animation loop by calling requestAnimationFrame with raf
  }, []);

  return (
    <div
      ref={columnContainer}
      className="bg-slate-950 h-[175vh] relative flex gap-[2vw] p-[2vw] overflow-hidden"
    >
      <Column y={y} images={[images[0], images[1], images[2]]} />
      <Column y={y2} images={[images[3], images[4], images[5]]} />
      <Column y={y3} images={[images[6], images[7], images[8]]} />
      <Column y={y4} images={[images[9], images[10], images[11]]} />
    </div>
  );
};
export default ColumnContainer;