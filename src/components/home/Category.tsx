import { Button, Card, CardContent, Divider, Grid } from "@mui/material";
import { TfiArrowCircleRight } from "react-icons/tfi";
import type { CategoryType } from "../../types/types";

const Category = ({
  CATEGORY_DATA,
}: {
  CATEGORY_DATA: CategoryType[] | null;
}) => {
  const categorySlice = CATEGORY_DATA?.slice(0, 6);

  const getCategoryImage = (title: string) => {
    switch (title.toLowerCase()) {
      case "computer":
        return (
          <img
            src="/Computer.svg"
            alt="Computer"
            className="w-[184px] h-[122px] object-contain"
          />
        );
      case "smart phone":
        return (
          <img
            src="/Smartphone.svg"
            alt="Smartphone"
            className="w-[184px] h-[122px] object-contain"
          />
        );
      case "tv":
        return (
          <img
            src="/tv.png"
            alt="TV"
            className="w-[184px] h-[122px] object-contain"
          />
        );
      case "kitchen":
        return (
          <img
            src="/paltaryuyan.png"
            alt="Kitchen"
            className="w-[184px] h-[122px] object-contain"
          />
        );
      case "smart watch":
        return (
          <img
            src="/smartwatch.svg"
            alt="Smart Watch"
            className="w-[184px] h-[122px] object-contain"
          />
        );
      case "gaming":
        return (
          <img
            src="/gaming.webp"
            alt="Gaming"
            className="w-[184px] h-[122px] object-contain"
          />
        );
      default:
        return (
          <img
            src="/default-category.svg"
            alt="Default"
            className="w-[184px] h-[122px] object-contain"
          />
        );
    }
  };

  return (
    <section className="max-w-[1524px] w-[90%] mx-auto mb-[40px]">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h4 className="text-[24px] font-roboto font-medium">
          Shop by category
        </h4>
        <Button
          variant="text"
          endIcon={<TfiArrowCircleRight />}
          sx={{ textTransform: "none" }}
          disableFocusRipple
          disableRipple
          disableTouchRipple
        >
          View all
        </Button>
      </div>

      {/* Divider */}
      <Divider
        sx={{
          width: "100%",
          height: "2px",
          background:
            "linear-gradient(180deg, rgba(147,147,147,147,0.2) , rgba(147,147,147,147,0.2), rgba(147,147,147,147,0.2))",
        }}
      />

      {/* Grid */}
      <Grid container spacing={3} sx={{ mt: "32px" }}>
        {categorySlice &&
          categorySlice.map((category: CategoryType) => (
            <Grid key={category.id} size={{ xs: 12, sm: 4, md: 2 }}>
              <Card className="shadow-none hover:shadow-md transition-all duration-300 cursor-pointer">
                <CardContent className="flex items-center justify-center w-full">
                  {getCategoryImage(category.title)}
                </CardContent>
              </Card>
            </Grid>
          ))}
      </Grid>
    </section>
  );
};

export default Category;
