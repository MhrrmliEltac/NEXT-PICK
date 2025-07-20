import { useEffect, useMemo, useState } from "react";
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
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useFetchStore } from "@/store/useFetcher";

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

const CategoryProducts = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const subCategoryName = queryParams.get("subCategory");
  const categoryName = queryParams.get("categoryName");

  const { data: data, fetchData } = useFetchStore();

  useEffect(() => {
    const fetchAll = async () => {
      if (!subCategoryName) return;

      fetchData(
        "products",
        `/products/productBySubCategory?subCategoryName=${subCategoryName}`
      );
    };

    fetchAll();
  }, [subCategoryName]);

  const [sortValue, setSortValue] = useState<string>("Relevance");

  const handleSortChange = (e: SelectChangeEvent<string>) => {
    const { value } = e.target;
    setSortValue(value);
  };

  const [currentPage, setCurrentPage] = useState(0);
  const [lastPage, setLastPage] = useState(12);

  const handlePageChange = (_: any, value: number) => {
    const newCurrent = (value - 1) * 12;
    setCurrentPage(newCurrent);
    setLastPage(newCurrent + 12);
  };

  const slicesMockData = data.products.slice(currentPage, lastPage);

  let page = useMemo(() => {
    Math.ceil(data.products.length / slicesMockData.length);
  }, [data]);

  return (
    <section>
      {/* Breadcrumb */}
      <div className="relative min-h-[220px]">
        <CustomBreadcrumb
          title="Explore All Windows laptops"
          breadcrumbs={[
            { label: "Home", href: "/" },
            {
              label: categoryName,
              href: `/categories?category=${categoryName}`,
            },
            { label: subCategoryName?.toCapitalize() },
          ]}
        />
      </div>
      <div className="max-w-[1524px] w-[90%] mx-auto mb-[80px] flex gap-[24px] justify-between">
        <FilterSide />
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
                2,000+ products
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
                value={sortValue}
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
                <MenuItem value="Relevance">Relevance</MenuItem>
                <MenuItem value="History">History</MenuItem>
                <MenuItem value="Popular">Popular</MenuItem>
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
                2,000+ products
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
            {slicesMockData &&
              slicesMockData.length > 0 &&
              slicesMockData.map((item: any, index: number) => (
                <Grid
                  key={index}
                  size={{ xs: 12, md: 4, lg: 3 }}
                  component={motion.div}
                  variants={itemVariants}
                >
                  <ProductCard data={item} />
                </Grid>
              ))}
          </Grid>

          <div className="p-6 flex justify-center">
            <Stack spacing={2}>
              <Pagination
                count={page!}
                page={currentPage / 12 + 1}
                variant="outlined"
                shape="rounded"
                onChange={handlePageChange}
              />
            </Stack>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryProducts;
