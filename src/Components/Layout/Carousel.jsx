import React, { useEffect, useState } from "react";
import cow from "../../assests/cow.jpeg";
import dairycow from "../../assests/dairy-cows.png";

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    {
      id: 1,
      image: cow,
      title: "Designed to suit your personal and business needs at all times.",
      subtitle: "Our Products",
    },
    {
      id: 2,
      image: dairycow,
      title:
        "To be the base for establishing sustainable social-economically empowered individuals in the community",
      subtitle: "Mission",
    },
  ];

  // Auto-slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  // Handle manual slide navigation
  const goToPrevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const goToNextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  return (
    <>
      {/* Carousel */}
      <div
        className="container-fluid p-0"
        style={{ marginTop: "0px", height: "610px", overflow: "hidden" }}
      >
        <div
          style={{ overflow: "hidden" }}
          id="header-carousel"
          className="carousel slide"
        >
          <div className="carousel-inner">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`carousel-item ${
                  index === activeIndex ? "active" : ""
                }`}
              >
                <img
                  className="w-100"
                  src={slide.image}
                  alt={`Slide ${slide.id}`}
                />

                <h4 className="text-white text-uppercase mb-md-3">
                  {slide.subtitle}
                </h4>
                <h1 className="display-3 text-white mb-md-4">{slide.title}</h1>

                <div className="carousel-caption d-flex flex-column align-items-center">
                  <div className="p-3" style={{ maxWidth: "900px" }}>
                    <h4 className="text-white text-uppercase mb-md-3">
                      {slide.subtitle}
                    </h4>
                    <h4 className="display-4 text-white mb-md-4">
                      {slide.title}
                    </h4>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Controls */}
          <a className="carousel-control-prev" onClick={goToPrevSlide}>
            <div
              className="btn btn-dark"
              style={{ width: "45px", height: "45px" }}
            >
              <span className="carousel-control-prev-icon mb-n2"></span>
            </div>
          </a>
          <a className="carousel-control-next" onClick={goToNextSlide}>
            <div
              className="btn btn-dark"
              style={{ width: "45px", height: "45px" }}
            >
              <span className="carousel-control-next-icon mb-n2"></span>
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default Carousel;