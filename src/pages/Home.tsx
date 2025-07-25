import Brands from "@/components/general/Brands";
import { useFetch } from "../api/useFetch";
import Blog from "../components/general/Blog";
import Category from "../components/home/Category";
import Hero from "../components/home/Hero";
import Info from "../components/home/Info";
import type { CategoryType } from "../types/types";
import Offer from "@/components/general/Offer";
import { path } from "@/utils/paths";
import BestSeller from "@/components/home/BestSeller";
import ResetScroll from "@/components/general/ResetScroll";

const Home = () => {
  const { data: CATEGORY_DATA } = useFetch<CategoryType[] | null>(
    path.endpoints.categories.list
  );

  return (
    <section>
      <ResetScroll />
      <div className="relative min-h-[800px]">
        <Hero CATEGORY_DATA={CATEGORY_DATA} />
      </div>
      <Offer />
      <Category CATEGORY_DATA={CATEGORY_DATA} />
      <Info />
      <Brands title="Top brands" />
      <BestSeller />
      <Blog />
    </section>
  );
};

export default Home;
