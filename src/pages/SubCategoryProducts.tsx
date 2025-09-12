import { useCallback, useEffect, useMemo, useState } from "react";
import FilterSide from "@/components/categories/FilterSide";
import CustomBreadcrumb from "@/components/general/CustomBreadcrumb";
import ProductCard from "@/components/general/ProductCard";
import {
  Grid,
  Pagination,
  SelectChangeEvent,
  Stack,
  Typography,
} from "@mui/material";
import { motion } from "framer-motion";
import { useFetchStore } from "@/store/useFetcher";
import { ProductDataType, SelectValue, SortValue } from "@/types/types";
import Drawer from "@/components/categories/Drawer";
import { path } from "@/utils/paths";
import ResetScroll from "@/components/general/ResetScroll";
import { useQueryParams } from "@/hook/useQueryParams";
import RightSideHeader from "@/components/subcategory-products/RightSideHeader";
import RightSideMobileHeader from "@/components/subcategory-products/RightSideMobileHeader";
import { containerVariants2, itemVariants } from "@/utils/animateVariants";
import CustomSkeleton from "@/components/subcategory-products/CustomSkeleton";

const sortValuesArray: SelectValue[] = [
  "Ən yeni",
  "Ən baha",
  "Ən ucuz",
  "A-dan Z-yə",
  "Z-dan A-yə",
];

const SubCategoryProducts = () => {
  //? Drawer state
  const [open, setOpen] = useState<boolean>(false);

  //? Pagination states
  const [page, setPage] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);

  //? Sort state
  const [sortValue, setSortValue] = useState<SortValue>({
    key: "newest",
    value: "Ən yeni",
  });

  //? Fetching subcategory name from URL
  const { getParam } = useQueryParams();

  const subCategoryName = getParam("subCategory");
  const categoryName = getParam("categoryName");

  const { data: data, fetchData, loading } = useFetchStore();
  const skeletonArray = useMemo(() => Array.from({ length: 12 }), [loading]);

  useEffect(() => {
    if (!subCategoryName) return;

    fetchData(
      "products",
      path.endpoints.products.subcategoryProducts(
        subCategoryName,
        currentPage,
        12,
        sortValue.key.toLowerCase()
      )
    );
  }, [subCategoryName, currentPage, fetchData, sortValue.key]);
  const { products } = data.products;

  const handleSortChange = (e: SelectChangeEvent<string>) => {
    const { value } = e.target;

    switch (value) {
      case "Ən yeni":
        setSortValue({ key: "newest", value });
        break;
      case "Ən baha":
        setSortValue({ key: "desc", value });
        break;
      case "Ən ucuz":
        setSortValue({ key: "asc", value });
        break;
      case "A-dan Z-yə":
        setSortValue({ key: "a-z", value });
        break;
      case "Z-dan A-yə":
        setSortValue({ key: "z-a", value });
        break;
      default:
        setSortValue({ key: "", value: "" });
    }
  };

  const handlePageChange = useCallback(
    (_: any, value: number) => {
      setCurrentPage(value);
    },
    [page, setCurrentPage]
  );

  useEffect(() => {
    setPage(data.products.totalPages);
  }, [data.products.totalPages]);

  return (
    <section>
      <ResetScroll />
      {/* Breadcrumb */}
      <CustomBreadcrumb
        minHeight="min-h-[220px]"
        title="Explore All Windows laptops"
        breadcrumbs={[
          { label: "Home", href: "/" },
          {
            label: categoryName,
            href:
              typeof path.urlPaths.category.list === "function"
                ? path.urlPaths.category.list(categoryName || "")
                : path.urlPaths.category.list,
          },
          { label: subCategoryName?.toCapitalize() },
        ]}
      />
      <div className="max-w-[1524px] w-[90%] mx-auto mb-[80px] flex gap-[24px] justify-between">
        <FilterSide show={false} />
        <div className="w-[100%]">
          {/* Right Side header */}
          <RightSideHeader
            categoryName={categoryName}
            handleSortChange={handleSortChange}
            products={products}
            sortValue={sortValue}
            sortValuesArray={sortValuesArray}
          />

          {/* Right side mobile header */}
          <RightSideMobileHeader products={products} setOpen={setOpen} />

          {/* Right side body */}

          <Grid
            container
            spacing={3}
            mt="35px"
            component={motion.div}
            variants={containerVariants2}
            initial="hidden"
            animate="visible"
          >
            {loading
              ? skeletonArray.map((_, index) => <CustomSkeleton key={index} />)
              : products && products.length > 0
              ? products.map((item: ProductDataType, index: number) => (
                  <Grid
                    key={index}
                    size={{ xs: 12, md: 4, lg: 3 }}
                    component={motion.div}
                    variants={itemVariants}
                  >
                    <ProductCard data={item} />
                  </Grid>
                ))
              : !loading &&
                products.length === 0 && (
                  <Typography>No products found in this category.</Typography>
                )}
          </Grid>

          <div className="p-6 flex justify-center">
            <Stack spacing={2}>
              <Pagination
                count={page ?? 0}
                page={currentPage}
                variant="outlined"
                shape="rounded"
                onChange={handlePageChange}
              />
            </Stack>
          </div>
        </div>
      </div>

      <Drawer open={open} setOpen={setOpen} />
    </section>
  );
};

export default SubCategoryProducts;
