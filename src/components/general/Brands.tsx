import { Divider } from "@mui/material";
import Heading from "../general/Heading";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Loader from "../loader/Loader";
import type { BrandsType } from "../../types/types";

import { useFetch } from "../../api/useFetch";

import "swiper/css";
import "swiper/css/autoplay";

const Brands = ({ title }: { title: string }) => {
  const { data: BRANDS_DATA, loading } = useFetch<BrandsType[]>("/brands/list");

  if (loading) {
    return <Loader />;
  }

  return (
    <section className="max-w-[1524px] w-[90%] mx-auto mb-[80px] mt-[80px] transition-all duration-300">
      {/* Header */}
      <Heading title={title} />

      {/* Divider */}
      <Divider
        sx={{
          width: "100%",
          height: "2px",
          background:
            "linear-gradient(90deg, rgba(147,147,147,0.2), rgba(147,147,147,0.2))",
          mb: 4,
        }}
      />

      {/* Swiper */}
      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true, // hover zamanı autoplay dayanır
        }}
        breakpoints={{
          0: { slidesPerView: 3 },
          640: { slidesPerView: 4 },
          1024: { slidesPerView: 5 },
        }}
        style={{ width: "100%" }}
      >
        {BRANDS_DATA?.map((brand, index) => (
          <SwiperSlide key={index} className="w-full">
            <div className="flex items-center justify-center">
              <img
                src={`data:image/svg+xml;base64,${brand.brandImage}`}
                alt={brand.brandName}
                className="w-[120px] h-[50px] object-contain transition-all duration-300"
                draggable={false}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Brands;
