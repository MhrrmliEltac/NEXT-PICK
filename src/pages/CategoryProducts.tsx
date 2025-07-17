import FilterSide from "@/components/categories/FilterSide";
import CustomBreadcrumb from "@/components/general/CustomBreadcrumb";
import { useParams } from "react-router-dom";

const CategoryProducts = () => {
  const params = useParams();

  return (
    <section>
      <div className="relative min-h-[220px]">
        <CustomBreadcrumb
          title="Explore All Windows laptops"
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Laptops", href: "/categories" },
            { label: params.slug?.toCapitalize() },
          ]}
        />
      </div>{" "}
      <div className="max-w-[1524px] w-[90%] mx-auto mt-[80px] mb-[80px]">
        <FilterSide />
      </div>
    </section>
  );
};

export default CategoryProducts;
