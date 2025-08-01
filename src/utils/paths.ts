import {
  BlogPaths,
  BrandsPaths,
  CategoriesPaths,
  InfoPaths,
  ProductsPaths,
  SearchPaths,
  SubCategoryPaths,
} from "@/types/types";

interface EndpointType {
  products: ProductsPaths;
  categories: CategoriesPaths;
  blog: BlogPaths;
  brands: BrandsPaths;
  subCategory: SubCategoryPaths;
  info: InfoPaths;
  search: SearchPaths;
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
  auth: {
    login: string;
    register: string;
  };
  productDetail: (productName: string) => string;
  wishlist: string;
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
      productById: (id) => `/products/${id}`,
      subcategoryProducts: (subcategoryName, page, limit, sortBy) =>
        `/products/productBySubCategory?subCategoryName=${subcategoryName}&page=${page}&limit=${limit}&sortBy=${sortBy}`,
      categoryProducts: (categoryName) =>
        `/products/productByCategory?title=${categoryName}`,
      bestSeller: (sortBy) => `/products/best-seller?sortBy=${sortBy}`,
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

    //? search
    search: {
      searchProducts: (query) => `/products/search?search=${query}`,
    },
  },

  //? URL paths
  urlPaths: {
    //? category page url
    category: {
      list: (query: string) => `/categories?category=${query}`,
    },

    //? subcategory page url
    subcategory: {
      list: (categoryName, subcategoryName) =>
        `/subcategories?categoryName=${categoryName}&subCategory=${subcategoryName}`,
    },

    //? auth url
    auth: {
      login: "/auth/login",
      register: "/auth/register",
    },

    //? product detail url
    productDetail(productName) {
      return `/product?/productName=${productName}`;
    },

    //? wishlist url
    wishlist: "/wishlist",
  },
};
