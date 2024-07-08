import React from 'react';
import kulkas from "../assets/kulkas.jpg";

const Carousel = () => {
  return (
    <section className="w-screen h-screen overflow-hidden">
      <div className="flex justify-center items-center w-full h-full">
        <img src={kulkas} alt="Kulkas" className="object-cover w-full h-full" />
      </div>
    </section>
  );
}

export default Carousel;
