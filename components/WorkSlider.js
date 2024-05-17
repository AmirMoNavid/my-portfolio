//next image
import Image from "next/image";

// data
const workSlides = {
  slides: [
    {
      images: [
        {
          title: "title",
          path: "/thumb1.png",
          link: "https://musicshop.liara.run",
        },
        {
          title: "title",
          path: "/thumb2.png",
          link: "https://amirbankist.liara.run",
        },
        {
          title: "title",
          path: "/thumb3.png",
          link: "https://amirusepopcorn.liara.run",
        },
        {
          title: "title",
          path: "/thumb4.png",
          link: "https://fast-react-pizza.netlify.app",
        },
      ],
    },
  ],
};

// import swiper react component
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

//import required moduls
import { Pagination } from "swiper";
import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";
const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-[280px] sm:h-[400px]"
    >
      {workSlides.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
              {slide.images.map((image, index) => {
                return (
                  <Link
                    key={index}
                    href={`${image.link}`}
                    className="relative rounded-lg overflow-hidden flex items-center group"
                  >
                    <div className="flex items-center justify-center relative overflow-hidden">
                      {/* image */}
                      <Image src={image.path} width={500} height={300} alt="" />
                      {/* overlay gradiant */}
                      <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
                      {/* title */}
                      <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-6 group-hover:xl:-translate-y-20 transition-all duration-300">
                        <div className="flex items-center gap-x-2 text-sm md:text-[13px] tracking-[0.2em]">
                          {/* title part 1 */}
                          <div className="delay-100">LIVE</div>
                          {/* title part 2 */}
                          <div className="md:text-xl text-sm translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                            PROJECT
                          </div>
                          {/* icon */}
                          <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200 ">
                            <BsArrowRight />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;
