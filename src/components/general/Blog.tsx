import { Divider, Typography } from "@mui/material";
import Heading from "./Heading";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { TfiArrowCircleRight } from "react-icons/tfi";

import { useFetch } from "../../api/useFetch";

import "swiper/css";
import "swiper/css/autoplay";
import Loader from "../loader/Loader";
import { NEUTRAL_COLOR } from "../../constant/colors";
import type { BlogType } from "../../types/types";
import { path } from "@/utils/paths";

const Blog = () => {
  const { data: BLOG_DATA, loading } = useFetch<BlogType[]>(
    path.endpoints.blog.list
  );

  if (loading) {
    return <Loader />;
  }

  return (
    <section className="max-w-[1524px] w-[90%] mx-auto mb-[80px] mt-[80px]">
      {/* Header */}
      <Heading
        title="Tech tips and guides blog"
        btnTitle="View all"
        Icon={TfiArrowCircleRight}
      />

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
          pauseOnMouseEnter: true,
        }}
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        style={{ width: "100%" }}
      >
        {BLOG_DATA &&
          BLOG_DATA.length > 0 &&
          BLOG_DATA?.map((blog, index) => (
            <SwiperSlide key={index} className="w-full">
              <div className="flex flex-col gap-10 items-center justify-center">
                <img
                  src={`data:image/svg+xml;base64,${blog.blogImage}`}
                  alt={blog.blogName}
                  className="object-cover transition-all duration-300 w-full h-full"
                  draggable={false}
                />
                <div className="w-full flex flex-col gap-5">
                  <Typography
                    variant="h5"
                    color={NEUTRAL_COLOR.neutral800}
                    fontSize={20}
                    fontWeight="600"
                  >
                    {blog.blogName}
                  </Typography>

                  <Typography
                    variant="body2"
                    color={NEUTRAL_COLOR.neutral650}
                    fontSize={14}
                  >
                    {blog.blogDescription}
                  </Typography>
                </div>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </section>
  );
};

export default Blog;
