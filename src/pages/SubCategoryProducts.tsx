import { useEffect, useState } from "react";
import FilterSide from "@/components/categories/FilterSide";
import CustomBreadcrumb from "@/components/general/CustomBreadcrumb";
import ProductCard from "@/components/general/ProductCard";
import { NEUTRAL_COLOR } from "@/constant/colors";
import {
  Button,
  Divider,
  Grid,
  MenuItem,
  Pagination,
  Select,
  SelectChangeEvent,
  Stack,
  Typography,
} from "@mui/material";
import { BsFilterLeft } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import { motion } from "framer-motion";
import { useFetchStore } from "@/store/useFetcher";
import { ProductDataType } from "@/types/types";
import Drawer from "@/components/categories/Drawer";
import { Skeleton } from "@/components/ui/skeleton";
import { path } from "@/utils/paths";
import ResetScroll from "@/components/general/ResetScroll";
import { useQueryParams } from "@/hook/useQueryParams";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const sortValuesArray = [
  "Ən yeni",
  "Ən baha",
  "Ən ucuz",
  "A-dan Z-yə",
  "Z-dan A-yə",
];

const SubCategoryProducts = () => {
  //? Drawer state
  const [open, setOpen] = useState(false);

  //? Pagination states
  const [page, setPage] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  //? Sort state
  const [sortValue, setSortValue] = useState<{ key: string; value: string }>({
    key: "newest",
    value: "Ən yeni",
  });

  //? Fetching subcategory name from URL
  const { getParam } = useQueryParams();

  const subCategoryName = getParam("subCategory");
  const categoryName = getParam("categoryName");

  const skeletonArray = Array.from({ length: 12 });

  const { data: data, fetchData, loading } = useFetchStore();

  useEffect(() => {
    const fetchAll = async () => {
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
    };

    fetchAll();
  }, [subCategoryName, currentPage, fetchData, sortValue.key]);

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

  const handlePageChange = (_: any, value: number) => {
    setCurrentPage(value);
  };

  useEffect(() => {
    setPage(data.products.totalPages);
  }, [data.products.products]);

  return (
    <section>
      <ResetScroll />
      {/* Breadcrumb */}
      <div className="relative min-h-[220px]">
        <CustomBreadcrumb
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
      </div>
      <div className="max-w-[1524px] w-[90%] mx-auto mb-[80px] flex gap-[24px] justify-between">
        <FilterSide show={false} />
        <div className="w-[100%]">
          {/* Right Side header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full flex items-center justify-between max-md:hidden"
          >
            <div>
              <Typography
                variant="h5"
                color={NEUTRAL_COLOR.neutral800}
                fontSize={20}
                component="span"
              >
                Laptops
              </Typography>
              <Typography
                variant="body2"
                component="span"
                fontSize={14}
                color={NEUTRAL_COLOR.neutral400}
                sx={{ ml: "8px" }}
              >
                {data.products.products.length} products
              </Typography>
            </div>

            <div className="flex items-center gap-1 ">
              <Typography
                variant="body2"
                component="span"
                fontSize={14}
                color={NEUTRAL_COLOR.neutral800}
              >
                Sort by:
              </Typography>
              <Select
                value={sortValue.value}
                IconComponent={IoIosArrowDown}
                onChange={(e: SelectChangeEvent<string>) => handleSortChange(e)}
                sx={{
                  width: "108px",
                  height: "32px",
                  borderRadius: "8px",
                  backgroundColor: "#fff",
                  boxShadow: "0px 0px 4px rgba(0,0,0,0.1)",
                  fontSize: "12px",
                  "& .MuiSelect-select": {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    paddingRight: "32px",
                  },
                  "& fieldset": {
                    border: "1px solid #939393",
                  },
                  "&:hover fieldset": {
                    borderColor: "#4A73EA",
                  },
                  "& .MuiSelect-icon": {
                    color: "#4B4B4B",
                    fontSize: "20px",
                  },
                }}
              >
                {sortValuesArray.map((value) => (
                  <MenuItem
                    sx={{
                      mt: "10px",
                      color: NEUTRAL_COLOR.neutral600,
                      fontSize: "14px",
                      lineHeight: "20px",
                      "&.Mui-selected": {
                        backgroundColor: "#E6EEFF",
                        color: "#1A4DE1",
                      },
                      "&.Mui-selected:hover": {
                        backgroundColor: "#D0E2FF",
                      },
                      "&.MuiMenuItem-root:hover": {
                        backgroundColor: NEUTRAL_COLOR.neutral150,
                      },
                    }}
                    value={value}
                    key={value}
                  >
                    {value}
                  </MenuItem>
                ))}
              </Select>
            </div>
          </motion.div>

          {/* Right side mobile header */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="md:hidden transition-all duration-300"
          >
            <div className="flex items-center gap-3 transition-all duration-300">
              <Button
                variant="outlined"
                sx={{
                  border: "0.5px solid #757575",
                  borderRadius: "8px",
                  color: NEUTRAL_COLOR.neutral650,
                }}
                startIcon={<BsFilterLeft />}
                onClick={() => setOpen(true)}
              >
                Filter
              </Button>
              <Button
                variant="outlined"
                sx={{
                  border: "0.5px solid #757575",
                  borderRadius: "8px",
                  color: NEUTRAL_COLOR.neutral650,
                }}
                startIcon={<BsFilterLeft />}
              >
                Sort By
              </Button>
            </div>
            {/* Divider */}
            <Divider
              sx={{
                mt: 2,
                "&:after": {
                  content: '""',
                  display: "block",
                  height: "2px",
                  width: "100%",
                  background:
                    "linear-gradient(90deg, #939393 0%, rgba(147,147,147,0.2) 20%, rgba(147,147,147,0.2) 50%, #939393 100%)",
                },
              }}
            />
            <div className="flex items-center justify-between mt-4">
              <Typography
                variant="h5"
                color={NEUTRAL_COLOR.neutral800}
                fontSize={20}
                component="span"
              >
                Laptops
              </Typography>
              <Typography
                variant="body2"
                component="span"
                fontSize={14}
                color={NEUTRAL_COLOR.neutral400}
                sx={{ ml: "8px" }}
              >
                {data.products.products.length} products
              </Typography>
            </div>
          </motion.div>

          {/* Right side body */}

          <Grid
            container
            spacing={3}
            mt="35px"
            component={motion.div}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {loading
              ? skeletonArray.map((_, index) => (
                  <Grid
                    key={index}
                    size={{ xs: 12, md: 4, lg: 3 }}
                    component={motion.div}
                    variants={itemVariants}
                    sx={{ mb: "120px" }}
                  >
                    {/* <ProductCard data={item} /> */}
                    <div className="w-full h-full max-sm:w-[30%] mx-auto flex justify-center items-center">
                      <Skeleton className="w-[288px] h-[170px] max-md:h-[250px] max-sm:h-[150px] max-xs:h-[80px] max-sm:w-full transition-all duration-700 object-contain" />
                    </div>
                    <div className="w-full max-sm:w-[80%] flex flex-col">
                      <Skeleton className="w-full h-[20px] mt-4" />
                      <Skeleton className="w-full h-[16px] mt-4" />
                      <div className="flex justify-between items-center w-full mt-4">
                        <Skeleton className="w-[80px] h-[20px]" />
                        <Skeleton className="w-[50px] h-[20px]" />
                      </div>
                    </div>
                  </Grid>
                ))
              : data.products.products &&
                data.products.products.length > 0 &&
                data.products.products.map(
                  (item: ProductDataType, index: number) => (
                    <Grid
                      key={index}
                      size={{ xs: 12, md: 4, lg: 3 }}
                      component={motion.div}
                      variants={itemVariants}
                    >
                      <ProductCard data={item} />
                    </Grid>
                  )
                )}
          </Grid>

          <div className="p-6 flex justify-center">
            <Stack spacing={2}>
              <Pagination
                count={page!}
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
