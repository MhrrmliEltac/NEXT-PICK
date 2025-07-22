import { NEUTRAL_COLOR } from "@/constant/colors";
import { SubCategoryDataType } from "@/types/types";
import { path } from "@/utils/paths";
import { Card, CardContent, Typography, Skeleton } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const SubCategorySlider = ({
  SUB_CATEGORY_DATA,
  loading,
}: {
  SUB_CATEGORY_DATA: SubCategoryDataType[] | null;
  loading?: boolean;
}) => {
  const skeletonArray = Array.from({ length: 6 });

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const categoryName = queryParams.get("category");

  return (
    <div style={{ background: NEUTRAL_COLOR.neutral180 }} className="py-[27px]">
      <Swiper
        modules={[Autoplay]}
        loop
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        spaceBetween={30}
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
          1540: { slidesPerView: 6 },
        }}
        className="max-w-[1540px] w-[90%] mx-auto"
      >
        {loading
          ? skeletonArray.map((_, index) => (
              <SwiperSlide key={index}>
                <Card className="rounded-[8px]">
                  <CardContent className="flex flex-col items-center gap-5">
                    <Skeleton
                      variant="rectangular"
                      width={184}
                      height={122}
                      animation="wave"
                      sx={{ borderRadius: "4px" }}
                    />
                    <Skeleton width={80} height={20} />
                  </CardContent>
                </Card>
              </SwiperSlide>
            ))
          : SUB_CATEGORY_DATA &&
            SUB_CATEGORY_DATA.length > 0 &&
            SUB_CATEGORY_DATA.map((item: SubCategoryDataType) => (
              <SwiperSlide key={item.id}>
                <Link
                  to={
                    typeof path.urlPaths.subcategory.list === "function"
                      ? path.urlPaths.subcategory.list(
                          categoryName || "",
                          item.subcategoryName
                        )
                      : path.urlPaths.subcategory.list
                  }
                >
                  <Card className="rounded-[8px]">
                    <CardContent className="flex flex-col items-center gap-5">
                      <img
                        src={item.subCategoryImage}
                        alt=""
                        className="w-[184px] h-[122px]"
                      />
                      <Typography
                        variant="caption"
                        color={NEUTRAL_COLOR.neutral600}
                        fontSize={14}
                      >
                        {item.subcategoryName}
                      </Typography>
                    </CardContent>
                  </Card>
                </Link>
              </SwiperSlide>
            ))}
      </Swiper>
    </div>
  );
};

export default SubCategorySlider;
