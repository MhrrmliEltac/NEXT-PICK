import CustomBreadcrumb from "@/components/general/CustomBreadcrumb";
import "swiper/css";
import "swiper/css/autoplay";
import SubCategorySlider from "@/components/categories/SubCategorySlider";
import Brands from "@/components/general/Brands";
import Offer from "@/components/general/Offer";
import QuestionAnswer from "@/components/categories/QuestionAnswer";
import Blog from "@/components/general/Blog";
import Slider from "@/components/general/Slider";

const SUB_CATEGORY_DATA = [
  {
    id: 15858568,
    title: "Windows Laptops",
    imgSrc:
      "https://img.freepik.com/premium-vector/modern-personal-computer-laptop-isolated-white-background_1138841-33426.jpg?semt=ais_hybrid&w=740",
  },
  {
    id: 858551,
    title: "Windows Laptops",
    imgSrc:
      "https://img.freepik.com/premium-vector/modern-personal-computer-laptop-isolated-white-background_1138841-33426.jpg?semt=ais_hybrid&w=740",
  },
  {
    id: 67865,
    title: "Windows Laptops",
    imgSrc:
      "https://img.freepik.com/premium-vector/modern-personal-computer-laptop-isolated-white-background_1138841-33426.jpg?semt=ais_hybrid&w=740",
  },
  {
    id: 89891,
    title: "Windows Laptops",
    imgSrc:
      "https://img.freepik.com/premium-vector/modern-personal-computer-laptop-isolated-white-background_1138841-33426.jpg?semt=ais_hybrid&w=740",
  },
  {
    id: 1231,
    title: "Windows Laptops",
    imgSrc:
      "https://img.freepik.com/premium-vector/modern-personal-computer-laptop-isolated-white-background_1138841-33426.jpg?semt=ais_hybrid&w=740",
  },
  {
    id: 13232,
    title: "Windows Laptops",
    imgSrc:
      "https://img.freepik.com/premium-vector/modern-personal-computer-laptop-isolated-white-background_1138841-33426.jpg?semt=ais_hybrid&w=740",
  },
  {
    id: 1654,
    title: "Windows Laptops",
    imgSrc:
      "https://img.freepik.com/premium-vector/modern-personal-computer-laptop-isolated-white-background_1138841-33426.jpg?semt=ais_hybrid&w=740",
  },
  {
    id: 13546,
    title: "Windows Laptops",
    imgSrc:
      "https://img.freepik.com/premium-vector/modern-personal-computer-laptop-isolated-white-background_1138841-33426.jpg?semt=ais_hybrid&w=740",
  },
  {
    id: 145346,
    title: "Windows Laptops",
    imgSrc:
      "https://img.freepik.com/premium-vector/modern-personal-computer-laptop-isolated-white-background_1138841-33426.jpg?semt=ais_hybrid&w=740",
  },
  {
    id: 13467,
    title: "Windows Laptops",
    imgSrc:
      "https://img.freepik.com/premium-vector/modern-personal-computer-laptop-isolated-white-background_1138841-33426.jpg?semt=ais_hybrid&w=740",
  },
];

const Categories = () => {
  return (
    <section>
      <div className="relative min-h-[220px]">
        <CustomBreadcrumb
          title="Find Your Laptop"
          subtitle="Find the perfect laptop for work, play and everything in between."
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Laptops", href: "/categories" },
          ]}
        />
      </div>
      <SubCategorySlider SUB_CATEGORY_DATA={SUB_CATEGORY_DATA} />
      <Brands title="Laptop brands" />
      <Offer />
      <Slider title="Our best laptop deals" discount />
      <Slider title="Trending Now" />
      <QuestionAnswer />
      <Blog />
    </section>
  );
};

export default Categories;
