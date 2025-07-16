import Hero from "@/components/categories/Hero";
import { useParams } from "react-router-dom";

const CategoryProducts = () => {
  const params = useParams();

  return (
    <section>
      <div className="relative min-h-[220px]">
        <Hero
          title="Find Your Laptop"
          subtitle="Find the perfect laptop for work, play and everything in between."
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Laptops", href: "/categories" },
            { label: params.slug?.toCustom() },
          ]}
        />
      </div>
    </section>
  );
};

export default CategoryProducts;
