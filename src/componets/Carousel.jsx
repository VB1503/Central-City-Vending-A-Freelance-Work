import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../Carousel.css'
import { EffectCoverflow, Autoplay } from 'swiper/modules';

function Carousel() {
  return (
    <>
    <div className="container">
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
          autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2,
        }}
        
        modules={[EffectCoverflow, Autoplay]}
        className="swiper_container"
      >
          <SwiperSlide >
            <img src='/images/image1.png' alt="" />
          </SwiperSlide>
          <SwiperSlide >
            <img src='/images/image2.png' alt="" />
          </SwiperSlide>
          <SwiperSlide  >
            <img src='/images/image3.png' alt="" />
          </SwiperSlide>
          <SwiperSlide >
            <img src='/images/image4.png' alt="" />
          </SwiperSlide>
          <SwiperSlide >
            <img src='/images/image2.png' alt="" />
          </SwiperSlide>
      <div className='carousel-screen-card'>
          <div className='caro-gist'>
             ACCELERATING CONNECTIONS
             <br /><span className='text-yellow-200'>YOUR LOCAL VENDING EXPERTS</span>
          </div>
          <div className='caro-text'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam obcaecati consequuntur autem ut libero unde fugit voluptate laborum. Suscipit repudiandae obcaecati reiciendis rerum eaque voluptatem ipsum quae? Ex, id praesentium?
          </div>
          <div className='carousel-button'>
          <button className="get-started-butt">LEARN MORE</button>
          </div>
      </div>
      </Swiper>
    </div>
    </>
  );
}

export default Carousel;