import { useFetch } from "../api/useFetch";
import Blog from "../components/home/Blog";
import Brands from "../components/home/Brands";
import Category from "../components/home/Category";
import Hero from "../components/home/Hero";
import Info from "../components/home/Info";
import Offer from "../components/home/Offer";
import type { CategoryType } from "../types/types";

const Home = () => {
  const { data: CATEGORY_DATA } = useFetch<CategoryType[] | null>(
    "/category/list"
  );

  return (
    <section>
      <div className="relative min-h-[800px]">
        <Hero CATEGORY_DATA={CATEGORY_DATA} />
      </div>
      <Offer />
      <Category CATEGORY_DATA={CATEGORY_DATA} />
      <Info />
      <Brands />
      <Blog />
    </section>
  );
};

export default Home;
