import { Card, Typography } from "@mui/material";
import { ShadButton } from "../ui/button";

const BannerDetail = () => {
  return (
    <section className="my-16">
      <Card
        sx={{
          backgroundColor: "linear-gradient(90deg, #A0B3F8 0%, #A978D6 100%)",
          backgroundImage: "url(/banner.svg)",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "333px",
          width: "100%",
          borderRadius: "8px",
          display: "flex",
          justifyContent: "end",
          alignItems: "center",
          px: "42px",
        }}
      >
        <div className="flex flex-col gap-6 items-center justify-center">
          <Typography
            variant="h4"
            component="span"
            fontSize={24}
            textAlign="center"
            color="white"
          >
            Your next favorite find <br /> is just a click away!
          </Typography>
          <ShadButton
            variant="default"
            className="h-12 text-base bg-[#1A4DE1] hover:bg-[#1A4DE1] rounded-[8px] px-4"
          >
            View all
          </ShadButton>
        </div>
      </Card>
    </section>
  );
};

export default BannerDetail;
