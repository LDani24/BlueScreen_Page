import React, { useState } from "react";

//Libreria del Carousel
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
//Import de Script
import videos from "../data/script";

//Estilos
import "../styles/Carousel.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Videos = ({ title }) => {
  const [script, Setscript] = useState(videos);
  const filterResult = (videoItem) => {
    const result = videos.filter((curDate) => {
      return curDate.categoria === videoItem;
    });
    setData(result);
  };
  const explicacion = videos
    .filter(function (video) {
      return video.categoria === "explicacion";
    })
    .map(function ({ id, image,name,desc,link}) {
      return (
        <section className="carousel-section" key={id}>
          <Card style={{ width: '18rem'}} className="card">
            <Card.Img variant="top" src={image} className="carousel-image" />
            <Card.Body>
              <Card.Title className="title-video">{name}</Card.Title>
              <Card.Text className="text-video">{desc}</Card.Text>
              <Button className="buttom-video" href={link}>Watch the video</Button>
            </Card.Body>
          </Card>
        </section>
      );
    });
  console.log(explicacion);
  //Responsive Slider CONFIG
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1024 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div>
      <h3 className="title-carousel">Recommended videos</h3>
      <Carousel
        responsive={responsive}
        className="slider"
        showDots={false}
        infinite={true}
        removeArrowOnDeviceType={["tablet", "mobile"]}
      >
        {explicacion}
      </Carousel>
    </div>
  );
};

export default Videos;
