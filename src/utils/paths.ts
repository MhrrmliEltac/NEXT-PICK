import {
  BlogPaths,
  BrandsPaths,
  CategoriesPaths,
  InfoPaths,
  ProductsPaths,
  SubCategoryPaths,
} from "@/types/types";

interface EndpointType {
  products: ProductsPaths;
  categories: CategoriesPaths;
  blog: BlogPaths;
  brands: BrandsPaths;
  subCategory: SubCategoryPaths;
  info: InfoPaths;
}

interface UrlPaths {
  category: {
    [key: string]: ((query: string) => string) | string;
  };
  subcategory: {
    [key: string]:
      | ((categoryName: string, subcategoryName: string) => string)
      | string;
  };
}

interface Paths {
  endpoints: EndpointType;
  urlPaths: UrlPaths;
}

export const path: Paths = {
  //? API paths
  endpoints: {
    //? products
    products: {
      create: "/products/create",
      list: "/products/list",
      subcategoryProducts: (subcategoryName, page, limit, sortBy) =>
        `/products/productBySubCategory?subCategoryName=${subcategoryName}&page=${page}&limit=${limit}&sortBy=${sortBy}`,
      categoryProducts: (categoryName) =>
        `/products/productByCategory?title=${categoryName}`,
    },

    //? categories
    categories: {
      list: "/category/list",
      create: "/category/create",
    },

    //? blog
    blog: {
      list: "/blog/list",
      create: "/blog/create",
    },

    //? brands
    brands: {
      list: "/brands/list",
      create: "/brands/create",
    },

    //? subcategory
    subCategory: {
      list: "/subcategory/subcategories",
      create: "/subcategory/create",
      subcategoryProducts: (subcategoryName: string) =>
        `/subcategory/subcategories?title=${subcategoryName}`,
    },

    //? info
    info: {
      list: "/info/list",
    },
  },

  //? URL paths
  urlPaths: {
    category: {
      list: (query: string) => `/categories?category=${query}`,
    },
    subcategory: {
      list: (categoryName, subcategoryName) =>
        `/subcategories?categoryName=${categoryName}&subCategory=${subcategoryName}`,
    },
  },
};
