import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { NEUTRAL_COLOR } from "@/constant/colors";
import { Typography } from "@mui/material";

const Hero = () => {
  return (
    <section
      className="z-0 absolute -top-24 w-full h-[302px] overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, rgba(227, 226, 226, 1) 0%,  rgba(227, 226, 226, 0) 100%)",
      }}
    >
      <div className="flex flex-col gap-4 h-full w-[80%] justify-center pt-14 max-lg:w-[90%] max-w-[1524px] mx-auto">
        {/* Breadcrumb */}
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="text-[#1A4DE1]">
                Laptops
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <Typography variant="h3" color={NEUTRAL_COLOR.neutral800} fontSize={32}>
          Find Your Laptop
        </Typography>
        <Typography
          variant="body2"
          color={NEUTRAL_COLOR.neutral600}
          fontSize={16}
        >
          Find the perfect laptop for work, play and everything in between.{" "}
        </Typography>
      </div>
    </section>
  );
};

export default Hero;
