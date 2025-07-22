import { Card, CardContent, Divider, Grid } from "@mui/material";
import type { CategoryType } from "../../types/types";
import Heading from "../general/Heading";
import { Link } from "react-router-dom";
import { path } from "@/utils/paths";

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
      <Heading title="Shop by category" />

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
          categorySlice.map((category: CategoryType, index: number) => (
            <Grid key={index} size={{ xs: 12, sm: 4, md: 2 }}>
              <Link
                to={
                  typeof path.urlPaths.category.list === "function"
                    ? path.urlPaths.category.list(category.title)
                    : path.urlPaths.category.list
                }
              >
                <Card className="shadow-none hover:shadow-md transition-all duration-300 cursor-pointer hover:bg-[#F3F3F3]">
                  <CardContent className="flex items-center justify-center w-full">
                    {getCategoryImage(category.title)}
                  </CardContent>
                </Card>
              </Link>
            </Grid>
          ))}
      </Grid>
    </section>
  );
};

export default Category;
