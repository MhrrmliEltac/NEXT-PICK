import { NEUTRAL_COLOR } from "@/constant/colors";
import { Card, CardContent, Typography } from "@mui/material";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const SubCategorySlider = ({
  SUB_CATEGORY_DATA,
}: {
  SUB_CATEGORY_DATA: any;
}) => {
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
        {SUB_CATEGORY_DATA &&
          SUB_CATEGORY_DATA.length > 0 &&
          SUB_CATEGORY_DATA.map((item: any) => (
            <SwiperSlide key={item.id}>
              <Card className="rounded-[8px]">
                <CardContent className="flex flex-col items-center gap-5">
                  <img
                    src={item.imgSrc}
                    alt=""
                    className="w-[184px] h-[122px]"
                  />
                  <Typography
                    variant="caption"
                    color={NEUTRAL_COLOR.neutral600}
                    fontSize={14}
                  >
                    {item.title}
                  </Typography>
                </CardContent>
              </Card>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default SubCategorySlider;
