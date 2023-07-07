
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Container from "react-bootstrap/esm/Container";

const SliderSection = ({ title, article }) => {
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true

  };
  return (
    <>
      <Container>
        <Slider {...settings} style={{marginInline: "1%", marginTop:"12px", marginBottom:"18px"}}>
          <div>
            <img src="https://images.unsplash.com/photo-1536599018102-9f803c140fc1?auto=format&fit=crop&w=1260&h=200&q=60" alt="" />
          </div>
          <div>
            <img src="https://images.unsplash.com/photo-1502759683299-cdcd6974244f?auto=format&fit=crop&w=1260&h=200&q=60" alt="" />
          </div>
        </Slider>
      </Container>

    </>
  );
};

export default SliderSection;
