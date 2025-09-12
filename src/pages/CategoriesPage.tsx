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
import { path } from "@/utils/paths";
import ResetScroll from "@/components/general/ResetScroll";
import { useQueryParams } from "@/hook/useQueryParams";

const Categories = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { getParam } = useQueryParams();
  const categoryName = getParam("category");

  const { data: SUB_CATEGORY_DATA, loading: SUB_CATEGORY_LOADING } = useFetch<
    SubCategoryDataType[]
  >(path.endpoints.subCategory.subcategoryProducts(categoryName || ""));

  useEffect(() => {
    const category = getParam("category");
    if (!category && location.pathname === "/categories") {
      navigate("/not-found");
    }
  }, [location, navigate]);

  return (
    <section>
      <ResetScroll />
      <CustomBreadcrumb
        minHeight="min-h-[220px]"
        title={`Find Your ${categoryName}`}
        subtitle="Find the perfect laptop for work, play and everything in between."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: categoryName, href: "/categories" },
        ]}
      />
      <SubCategorySlider
        SUB_CATEGORY_DATA={SUB_CATEGORY_DATA}
        loading={SUB_CATEGORY_LOADING}
      />
      <Brands title={`${categoryName} brands`} />
      <Offer />
      {categoryName ? (
        <>
          <Slider title="Our best laptop deals" categoryName={categoryName} />
          <Slider title="Trending Now" categoryName={categoryName} />
        </>
      ) : null}
      <QuestionAnswer />
      <Blog />
    </section>
  );
};

export default Categories;
