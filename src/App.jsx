import { useState } from 'react';
import './App.css';
import Container from './component/container';

function App() {
  const [activeIndex, setActiveIndex] = useState(0);

  const data = [
    {
      title: "View all Courses",
      images: [
        { src: "../react.png", alt: "react-logo" },
        { src: "../like.png", alt: "like-logo" },
        { src: "../Vuejs.png", alt: "vue-logo" },
        { src: "../paint.png", alt: "paint-logo" },
      ],
      mainCount: "23",
      subtitle: "All Courses",
      description: "Courses you're powering through right now."
    },
    {
      title: "View all Courses",
      images: [{ src: "../react.png", alt: "react-logo" },
        { src: "../like.png", alt: "like-logo" },
        { src: "../Vuejs.png", alt: "vue-logo" },
        { src: "../paint.png", alt: "paint-logo" },],
      mainCount: "05",
      subtitle: "Upcoming Courses",
      description: "exciting new courses waiting to boost your skills.",
     
    },
    {
      title: "View all Courses",
      images: [
        { src: "../react.png", alt: "react-logo" },
        { src: "../like.png", alt: "like-logo" },
        { src: "../vuejs.png", alt: "vue-logo" },
        { src: "../paint.png", alt: "paint-logo" },
      ],
      mainCount: "10",
      subtitle: "Ongoing Courses",
      description: "currently happening don’t miss out on the action!"
    },
  ];

  return (
    <>
    <div className=" flex flex-col items-left text-left mx-85   mb-10 ">
      <h1 className='text-xl mt-30' >Explore our classes and master trending skills!</h1>
      <h3 className='text-3xl font-bold mt-5'  >Dive Into<span className='text-[#1DA077]'> What’s Hot Right Now! 🔥
        </span>  </h3>
    </div>
    <div className="flex gap-10 justify-center items-start p-5  min-h-screen flex-wrap">
      {data.map((item, index) => (
        <Container
          key={index}
          title={item.title}
          images={item.images}
          mainCount={item.mainCount}
          subtitle={item.subtitle}
          description={item.description}
          supText="+"
          textClass=""
          isSquare={activeIndex === index}
          onClick={() => setActiveIndex(index)}
        />
      ))}
    </div>
    </>
  );
}

export default App;
