import { useFetch } from "@/api/useFetch";
import CustomBreadcrumb from "@/components/general/CustomBreadcrumb";
import ResetScroll from "@/components/general/ResetScroll";
import { useQueryParams } from "@/hook/useQueryParams";
import { ProductDataType } from "@/types/types";
import { path } from "@/utils/paths";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Slider from "@/components/general/Slider";
import { LoadingScreen } from "@/components/ui/loading";
import BannerDetail from "@/components/product-detail/BannerDetail";
import Description from "@/components/product-detail/Description";
import Information from "@/components/product-detail/Information";
import Hero from "@/components/product-detail/ProductDetailHero";
import Comments from "@/components/product-detail/Comments";

const ProductDetail = () => {
  const [expanded, setExpanded] = useState(true);
  const [expanded1, setExpanded1] = useState(true);
  const [breadcrumbUrl, setBreadcrumbUrl] = useState({
    category: "",
    subcategory: "",
  });

  const handleChange = (acc: number) => {
    switch (acc) {
      case 1:
        setExpanded((prev) => !prev);
        break;
      case 2:
        setExpanded1((prev) => !prev);
        break;
      default:
        setExpanded(true);
        setExpanded1(true);
        break;
    }
  };

  //? getParam function from custom hook
  const { getParam } = useQueryParams();
  const id = getParam("id");

  //? Product name from url
  const location = useLocation();
  const productName = location.pathname
    .split("/product/")[1]
    .split("-")
    .join(" ")
    .toCapitalize();

  //? Custom Api Hook
  const { data: PRODUCT_DATA, loading: PRODUCT_LOADING } =
    useFetch<ProductDataType>(path.endpoints.products.productById(id || ""));

  useEffect(() => {
    if (PRODUCT_DATA?.category) {
      setBreadcrumbUrl((prev) => ({
        ...prev,
        category: PRODUCT_DATA.category.title,
      }));

      if (PRODUCT_DATA.subcategory) {
        setBreadcrumbUrl((prev) => ({
          ...prev,
          subcategory: PRODUCT_DATA.subcategory.subcategoryName,
        }));
      }
    }
  }, [PRODUCT_DATA, PRODUCT_LOADING]);

  return (
    <section>
      <ResetScroll />

      {PRODUCT_LOADING ? (
        <div className="w-[80%] mx-auto min-h-screen flex items-center justify-center">
          <LoadingScreen />
        </div>
      ) : (
        <>
          <CustomBreadcrumb
            breadcrumbs={[
              { label: "Home", href: "/" },
              {
                label: breadcrumbUrl.category || "",
                href:
                  typeof path.urlPaths.category.list === "function"
                    ? path.urlPaths.category.list(breadcrumbUrl.category)
                    : path.urlPaths.category.list,
              },
              {
                label: breadcrumbUrl.subcategory || "",
                href:
                  typeof path.urlPaths.subcategory.list === "function"
                    ? path.urlPaths.subcategory.list(
                        breadcrumbUrl.category,
                        breadcrumbUrl.subcategory
                      )
                    : path.urlPaths.subcategory.list,
              },
              { label: productName },
            ]}
          />
          <div className="w-[80%] mx-auto">
            {/* Hero section */}
            <Hero PRODUCT_DATA={PRODUCT_DATA} />

            {/* Product information & specification */}
            <Information
              expanded={expanded}
              handleChange={handleChange}
              PRODUCT_DATA={PRODUCT_DATA}
            />

            {/* Product Description */}
            <Description expanded1={expanded1} handleChange={handleChange} />

            {/* User comments */}
            <Comments PRODUCT_DATA={PRODUCT_DATA} />

            {/* Similar product */}
            <Slider title="Similar picks for you" categoryName="Computer" />

            {/* Banner  */}
            <BannerDetail />

            {/* Add these accessories to your order  */}
            <Slider
              title="Add these accessories to your order"
              categoryName="Computer"
            />
          </div>
        </>
      )}
    </section>
  );
};

export default ProductDetail;
