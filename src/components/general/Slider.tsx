import Heading from "./Heading";
import { Swiper, SwiperSlide } from "swiper/react";
import { Divider } from "@mui/material";
import { Autoplay } from "swiper/modules";
import ProductCard from "./ProductCard";
import "swiper/css";
import "swiper/css/autoplay";

const MOCK_DATA = [
  {
    id: 123,
    productName: "Asus Chromebook CM 1402 Flip",
    discountPercent: 10,
    price: 599,
    discountPrice: 539,
    rating: 4.23,
    commentCount: 473,
    productImage:
      "https://5.imimg.com/data5/SELLER/Default/2023/3/ZM/DP/DK/181126883/apple-macbook-pro-16-inch-500x500.jpg",
  },
  {
    id: 123,
    productName: "Asus Chromebook CM 1402 Flip",
    discountPercent: 10,
    price: 599,
    discountPrice: 539,
    rating: 4.23,
    commentCount: 473,
    productImage:
      "https://5.imimg.com/data5/SELLER/Default/2023/3/ZM/DP/DK/181126883/apple-macbook-pro-16-inch-500x500.jpg",
  },
  {
    id: 123,
    productName: "Asus Chromebook CM 1402 Flip",
    discountPercent: 10,
    price: 599,
    discountPrice: 539,
    rating: 4.23,
    commentCount: 473,
    productImage:
      "https://5.imimg.com/data5/SELLER/Default/2023/3/ZM/DP/DK/181126883/apple-macbook-pro-16-inch-500x500.jpg",
  },
  {
    id: 123,
    productName: "Asus Chromebook CM 1402 Flip",
    discountPercent: 10,
    price: 599,
    discountPrice: 539,
    rating: 4.23,
    commentCount: 473,
    productImage:
      "https://5.imimg.com/data5/SELLER/Default/2023/3/ZM/DP/DK/181126883/apple-macbook-pro-16-inch-500x500.jpg",
  },
];

const Slider = ({ title, discount }: { title: string; discount?: boolean }) => {
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
        {MOCK_DATA &&
          MOCK_DATA.length > 0 &&
          MOCK_DATA.map((mock) => (
            <SwiperSlide>
              <ProductCard mock={mock} discount={discount} />
            </SwiperSlide>
          ))}
      </Swiper>
    </section>
  );
};

export default Slider;
