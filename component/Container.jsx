import React from 'react';
import './container.css';
import { FaArrowRight } from "react-icons/fa6";

const Container = ({
  title = "View all Courses",
  showArrow = true,
  images = [],
  mainCount = "23",
  supText = "+",
  subtitle = "All Courses",
  description = "courses you're powering through right now.",
  textClass = "",
  isSquare = false,
  onClick = () => {},
}) => {
  return (
   <div
  className={`transition-all duration-700 ease-in-out cursor-pointer container-wrapper ${
    isSquare ? 'square-container' : 'rectangle-container'
  }`}
  onClick={onClick}
>
      {/* Top Row */}
   {isSquare && (
  <div className="flex justify-end items-center mt-8 mr-5">
    <h1 className="text-lg font-bold mr-2">{title}</h1>
    {showArrow && <FaArrowRight size={22} />}
  </div>
)}



      {/* Images */}
    {isSquare && (
  <div className="flex items-center mx-auto justify-center mb-7 mt-15">
    {images.map((img, idx) => (
      <img
        key={idx}
        className={`img${idx + 1} image-animate`}
        src={img.src}
        alt={img.alt}
      />
    ))}
  </div>
)}


      {/* Text Block */}
      <div className={`container-text ${textClass}`}>

        <div className='h1'>
  <h1 className="text-9xl font-bold ">
    {mainCount}
    <sup className="text-6xl font-bold supscript">{supText}</sup>
  </h1>
  </div>

  {isSquare ? (
    <div className="text-3xl mt-5 mx-4 ">
      <h2 className="text-2lg font-bold">{subtitle}</h2>
      <h2 className="text-lg w-[300px] ">{description}</h2>
    </div>
  ) : (
    <div className={`vertical-text ${isSquare ? 'rotate-out' : 'rotate-in'}`}>
     
        <strong className='text-4xl font-bold'>{subtitle}</strong><br />
        <span className='text-xl '>{description}</span>
      
    </div>
    
  )}
  {!isSquare && (
  <div className="click-me-overlay">
    <span>Click me</span>
  </div>
)}
</div>

    </div>
  );
};

export default Container;
