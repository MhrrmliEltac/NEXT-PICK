import { AboutItem } from "@/_mock/aboutItem";
import CustomBreadcrumb from "@/components/general/CustomBreadcrumb";
import { NEUTRAL_COLOR } from "@/constant/colors";
import { AboutType } from "@/types/types";
import { Typography } from "@mui/material";

const About = () => {
  return (
    <section>
      <CustomBreadcrumb
        breadcrumbs={[
          { label: "Home", href: "/" },
          {
            label: "About",
          },
        ]}
      />

      <div className="max-w-[1016px] w-[90%] mx-auto mb-[80px]">
        <img
          src="/d3660103708fda4b9d3e92f4a712727c59df277c.jpg"
          alt="about_image"
          className="max-w-[1016px] w-full max-h-[527px] h-full min-h-[215px] rounded-[8px] object-cover mb-10"
        />

        {AboutItem.map((about: AboutType) => (
          <div className="flex flex-col gap-2">
            <Typography
              variant="h6"
              fontWeight={500}
              fontSize={{
                xs: 14,
                md: 16,
              }}
              color={NEUTRAL_COLOR.neutral800}
            >
              {about.heading && about.heading}
            </Typography>
            <Typography
              variant="body2"
              fontWeight={400}
              fontSize={{
                xs: 12,
                md: 16,
              }}
              color={NEUTRAL_COLOR.neutral800}
            >
              {about.description}
            </Typography>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
