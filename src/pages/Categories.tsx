import CustomBreadcrumb from "@/components/general/CustomBreadcrumb";
import "swiper/css";
import "swiper/css/autoplay";
import SubCategorySlider from "@/components/categories/SubCategorySlider";
import Brands from "@/components/general/Brands";
import Offer from "@/components/general/Offer";
import QuestionAnswer from "@/components/categories/QuestionAnswer";
import Blog from "@/components/general/Blog";
import Slider from "@/components/general/Slider";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useFetch } from "@/api/useFetch";
import { SubCategoryDataType } from "@/types/types";

// const SUB_CATEGORY_DATA = [
//   {
//     id: 15858568,
//     title: "Windows Laptops",
//     imgSrc:
//       "https://img.freepik.com/premium-vector/modern-personal-computer-laptop-isolated-white-background_1138841-33426.jpg?semt=ais_hybrid&w=740",
//   },
//   {
//     id: 858551,
//     title: "Windows Laptops",
//     imgSrc:
//       "https://img.freepik.com/premium-vector/modern-personal-computer-laptop-isolated-white-background_1138841-33426.jpg?semt=ais_hybrid&w=740",
//   },
//   {
//     id: 67865,
//     title: "Windows Laptops",
//     imgSrc:
//       "https://img.freepik.com/premium-vector/modern-personal-computer-laptop-isolated-white-background_1138841-33426.jpg?semt=ais_hybrid&w=740",
//   },
//   {
//     id: 89891,
//     title: "Windows Laptops",
//     imgSrc:
//       "https://img.freepik.com/premium-vector/modern-personal-computer-laptop-isolated-white-background_1138841-33426.jpg?semt=ais_hybrid&w=740",
//   },
//   {
//     id: 1231,
//     title: "Windows Laptops",
//     imgSrc:
//       "https://img.freepik.com/premium-vector/modern-personal-computer-laptop-isolated-white-background_1138841-33426.jpg?semt=ais_hybrid&w=740",
//   },
//   {
//     id: 13232,
//     title: "Windows Laptops",
//     imgSrc:
//       "https://img.freepik.com/premium-vector/modern-personal-computer-laptop-isolated-white-background_1138841-33426.jpg?semt=ais_hybrid&w=740",
//   },
//   {
//     id: 1654,
//     title: "Windows Laptops",
//     imgSrc:
//       "https://img.freepik.com/premium-vector/modern-personal-computer-laptop-isolated-white-background_1138841-33426.jpg?semt=ais_hybrid&w=740",
//   },
//   {
//     id: 13546,
//     title: "Windows Laptops",
//     imgSrc:
//       "https://img.freepik.com/premium-vector/modern-personal-computer-laptop-isolated-white-background_1138841-33426.jpg?semt=ais_hybrid&w=740",
//   },
//   {
//     id: 145346,
//     title: "Windows Laptops",
//     imgSrc:
//       "https://img.freepik.com/premium-vector/modern-personal-computer-laptop-isolated-white-background_1138841-33426.jpg?semt=ais_hybrid&w=740",
//   },
//   {
//     id: 13467,
//     title: "Windows Laptops",
//     imgSrc:
//       "https://img.freepik.com/premium-vector/modern-personal-computer-laptop-isolated-white-background_1138841-33426.jpg?semt=ais_hybrid&w=740",
//   },
// ];

const Categories = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const categoryName = queryParams.get("category");

  

  const { data: SUB_CATEGORY_DATA, loading: SUB_CATEGORY_LOADING } = useFetch<
    SubCategoryDataType[]
  >(`/subcategory/subcategories?title=${categoryName}`);

  useEffect(() => {
    if (location.search.startsWith("?category")) {
      return;
    } else if (location.pathname === "/categories") {
      navigate("/not-found");
    }
  }, [location.pathname]);

  return (
    <section>
      <div className="relative min-h-[220px]">
        <CustomBreadcrumb
          title={`Find Your ${categoryName}`}
          subtitle="Find the perfect laptop for work, play and everything in between."
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: categoryName, href: "/categories" },
          ]}
        />
      </div>
      <SubCategorySlider
        SUB_CATEGORY_DATA={SUB_CATEGORY_DATA}
        loading={SUB_CATEGORY_LOADING}
      />
      <Brands title={`${categoryName} brands`} />
      <Offer />
      <Slider title="Our best laptop deals" />
      <Slider title="Trending Now" />
      <QuestionAnswer />
      <Blog />
    </section>
  );
};

export default Categories;
