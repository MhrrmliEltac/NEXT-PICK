import Heading from "./Heading";
import { Swiper, SwiperSlide } from "swiper/react";
import { Divider } from "@mui/material";
import { Autoplay } from "swiper/modules";
import ProductCard from "./ProductCard";
import "swiper/css";
import "swiper/css/autoplay";
import { useFetchStore } from "@/store/useFetcher";

const Slider = ({ title }: { title: string; discount?: boolean }) => {
  const data = useFetchStore((state) => state.data.products);

  return (
    <section className="max-w-[1524px] w-[90%] mx-auto mb-[80px] mt-[80px]">
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

      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
        style={{ width: "100%" }}
      >
        {data &&
          data.length > 0 &&
          data.map((product: any) => (
            <SwiperSlide>
              <ProductCard data={product} />
            </SwiperSlide>
          ))}
      </Swiper>
    </section>
  );
};

export default Slider;
