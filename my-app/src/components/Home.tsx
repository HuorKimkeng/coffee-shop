import React, { useState, useEffect } from "react";
import "../App.css";

const images = [
  "src/assets/slideshow01.jpg",
  "src/assets/slideshow02.jpg",
  "src/assets/slideshow03.jpg",
];

function Home() {
   const [current, setCurrent] = useState(0);

   useEffect(() => {
      const timer = setInterval(() => {
         setCurrent((prev) => (prev + 1) % images.length);
      }, 6000); // change image every 3 seconds
      return () => clearInterval(timer);
   }, []);

   return (
      <div className="home-container">
         <div className="home-slideshow">
            <img
               src={images[current]}
               alt="Slideshow"
               className="slideshow-image"
            />
            <div className="pagination">
               {images.map((_, index) => (
                  <span
                     key={index}
                     className={`dot ${index === current ? "active" : ""}`}
                     onClick={() => setCurrent(index)}
                  ></span>
               ))}
            </div>
         </div>
      </div>
   );
}

export default Home;
