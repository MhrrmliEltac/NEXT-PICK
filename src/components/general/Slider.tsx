import Heading from "./Heading";
import { Swiper, SwiperSlide } from "swiper/react";
import { Divider } from "@mui/material";
import { Autoplay } from "swiper/modules";
import ProductCard from "./ProductCard";
import "swiper/css";
import "swiper/css/autoplay";
import { ProductDataType } from "@/types/types";
import { useFetchStore } from "@/store/useFetcher";
import { useEffect } from "react";
import { path } from "@/utils/paths";
import { Skeleton } from "../ui/skeleton";
import { TfiArrowCircleRight } from "react-icons/tfi";

const Slider = ({
  title,
  categoryName,
}: {
  title: string;
  categoryName: string;
}) => {
  const skeletonArray = Array.from({ length: 12 });

  const {
    data: PRODUCT_DATA,
    loading: PRODUCT_LOADING,
    fetchData,
  } = useFetchStore();

  useEffect(() => {
    const fetchProducts = async () => {
      fetchData(
        "products",
        path.endpoints.products.categoryProducts(categoryName || "")
      );
    };

    if (categoryName) {
      fetchProducts();
    }
  }, []);

  return (
    <section className="max-w-[1524px] w-[90%] mx-auto mb-[80px] mt-[80px]">
      <Heading title={title} btnTitle="View all" Icon={TfiArrowCircleRight} />

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
        {PRODUCT_LOADING
          ? skeletonArray.map((_, index) => (
              <SwiperSlide key={index}>
                <div className="w-full h-full max-sm:w-[30%] mx-auto flex justify-center items-center">
                  <Skeleton className="w-[288px] h-[170px] max-md:h-[250px] max-sm:h-[150px] max-xs:h-[80px] max-sm:w-full transition-all duration-700 object-contain" />
                </div>
                <div className="w-full max-sm:w-[80%] flex flex-col">
                  <Skeleton className="w-full h-[20px] mt-4" />
                  <Skeleton className="w-full h-[16px] mt-4" />
                  <div className="flex justify-between items-center w-full mt-4">
                    <Skeleton className="w-[80px] h-[20px]" />
                    <Skeleton className="w-[50px] h-[20px]" />
                  </div>
                </div>
              </SwiperSlide>
            ))
          : PRODUCT_DATA.products.products &&
            PRODUCT_DATA.products.products &&
            PRODUCT_DATA.products.products.map((product: ProductDataType) => (
              <SwiperSlide key={product._id}>
                <ProductCard data={product} />
              </SwiperSlide>
            ))}
      </Swiper>
    </section>
  );
};

export default Slider;
