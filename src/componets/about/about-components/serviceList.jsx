import React from "react";
import { motion } from "framer-motion";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import StarHalfRoundedIcon from "@mui/icons-material/StarHalfRounded";
import ButtonGroup from "./ButtonGroup";

const Card = ({ star, title, imgSrc }) => {
  return (
    <motion.div
      className="mx-2 flex flex-col gap-4 select-none cursor-pointer border border-[#4e4e4e31] p-10 rounded-lg hover:shadow-xl transition-all"
      whileHover={{ scale: 1.05 }}
    >
      <div className="text-rose-600 flex items-center gap-2">
        <StarRoundedIcon />
        <StarRoundedIcon />
        <StarRoundedIcon />
        <StarRoundedIcon />
        {star}
      </div>
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      <p className="leading-loose">
        Get working experience to work with this amazing team & in future want
        to work together for bright future projects and also make deposit to
        freelancer.
      </p>
      <div className="flex items-center gap-4 mt-5">
        <img src={imgSrc} width={50} height={50} alt="testimonials" />
        <div>
          <h3 className="font-semibold">Naseem Khan</h3>
          <a
            href="https://github.com/NaseemKhan005"
            target="_blank"
            rel="noopener noreferrer"
            className="text-rose-600 font-[500]"
          >
            @naseemkhan
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const Testimonials = () => {
  return (
    <section
      className="relative container mx-auto px-5 md:px-16 flex flex-col gap-5 justify-center text-center"
      id="testimonial"
    >
      <div>
        <span className="font-bold text-[30px] text-center ">TESTIMONIAL</span>
        <h2 className="text-center text-[40px] font-bold ">Meet Client Satisfaction</h2>
      </div>
      <Carousel {...carouselParams}>
        <Card
          star={<StarHalfRoundedIcon />}
          title="Modern look & trending design"
          imgSrc="/testimonials/1.png"
        />
        <Card
          title="Layout and organized layers"
          imgSrc="/testimonials/2.png"
        />
        <Card
          star={<StarRoundedIcon />}
          title="Design Quality & performance"
          imgSrc="/testimonials/3.png"
        />
        <Card
          star={<StarHalfRoundedIcon />}
          title="Layout and organized layers"
          imgSrc="/testimonials/4.png"
        />
      </Carousel>
    </section>
  );
};

export default Testimonials;

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const carouselParams = {
  additionalTransfrom: 0,
  arrows: false,
  autoPLaySpeed: 3000,
  centerMode: false,
  className: "",
  containerClass: "carousel-container",
  customButtonGroup: <ButtonGroup />,
  dotListClass: "",
  draggable: true,
  focusOnSelect: false,
  infinite: true,
  itemClass: "",
  keyBoardControl: true,
  minimumTouchDrag: 80,
  renderButtonGroupOutside: true,
  renderDotsOutside: false,
  responsive: responsive,
  showDots: false,
  sliderClass: "",
  slidesToSlide: 1,
};
