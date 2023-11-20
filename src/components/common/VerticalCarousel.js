import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./VerticalCarousel.css";
import { Card, Typography, Box } from "@mui/material";

const VerticalCarousel = () => {
  const settings = {
    centerMode: true,
    centerPadding: "60px",
    slidesToShow: 1,
    dots: false,
    infinite: true,
    vertical: true,
    verticalSwiping: true,
    speed: 500,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 1,
        },
      },
    ],
  };

  const goToPrev = () => {
    // This function should handle going to the previous slide
    console.log("Previous");
  };

  const goToNext = () => {
    // This function should handle going to the next slide
    console.log("Next");
  };

  return (
    <div className="vertical-carousel-container">
      <div className="controls-container">
        <button className="slick-prev" onClick={goToPrev}>
          Previous
        </button>
        <button className="slick-next" onClick={goToNext}>
          Next
        </button>
      </div>

      <Slider {...settings} className="content-container">
        <div>
          <Box sx={{ position: "relative" }}>
            <Card className="card-main">
              <img src="assets/icons/Quotes.svg" alt="" className="quots-img" />
              <Typography className="card-text">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries.
              </Typography>
            </Card>
          </Box>
        </div>
        <div>
          <Box sx={{ position: "relative" }}>
            <Card className="card-main">
              <img src="assets/icons/Quotes.svg" alt="" className="quots-img" />
              <Typography className="card-text">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries.
              </Typography>
            </Card>
          </Box>
        </div>
        <div>
          <Box sx={{ position: "relative" }}>
            <Card className="card-main">
              <img src="assets/icons/Quotes.svg" alt="" className="quots-img" />
              <Typography className="card-text">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries.
              </Typography>
            </Card>
          </Box>
        </div>
      </Slider>
    </div>
  );
};

export default VerticalCarousel;
