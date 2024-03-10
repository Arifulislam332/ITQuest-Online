import { useEffect, useState } from "react";

const slides = [
  "https://images.pexels.com/photos/12899188/pexels-photo-12899188.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/4348403/pexels-photo-4348403.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/9553905/pexels-photo-9553905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/5621949/pexels-photo-5621949.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
];

const Slider = () => {
  const [curImg, setCurImg] = useState(0);
  useEffect(() => {
    const slideInterval = setInterval(() => {
      if (curImg === slides.length - 1) {
        setCurImg(0);
      } else {
        setCurImg(curImg + 1);
      }
    }, 10000);

    return () => {
      clearInterval(slideInterval);
    };
  }, [curImg]);
  
  return (
    <div className="reusable__margin relative w-full h-[580px] pt-[6rem] overflow-hidden">
      <img
        src={slides[curImg]}
        alt="Slide Image"
        className="w-full h-full object-cover"
      />
      <div className="absolute left-1/2 -translate-x-1/2 bottom-10 flex gap-4 items-center">
        {slides.map((_, index) => (
          <button
            onClick={() => setCurImg(index)}
            key={index}
            className={`${
              index === curImg ? "w-10" : "w-3"
            } h-3 z-10 rounded-full bg-white`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Slider;
