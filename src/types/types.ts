export interface CategoryType {
  id: string;
  title: string;
  icon: string;
}

export interface BlogType {
  blogName: string;
  blogImage: string;
  blogDescription: string;
}

export interface BrandsType {
  brandName: string;
  brandImage: string;
}

export interface OfferType {
  id: number;
  title: string;
  subtitle: string;
  icon: string;
}

export interface SubCategoryDataType {
  id: string;
  subcategoryName: string;
  subCategoryImage: string;
  categoryId: {
    id: string;
    title: string;
  };
}

export interface ProductType {
  currentPage: number;
  totalPages: number;
  products: ProductDataType[];
  limit: number;
}

export interface ProductDataType {
  id: string;
  productName: string;
  productDescription: string;
  quantity: number;
  image: string;
  price: number;
  discount: boolean;
  discountPercent: number;
  discountPrice: number;
  rating: number;
  comment: Comment[];
  category: Category;
  brand: Brand;
  subcategory: Subcategory;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface Comment {
  user: string;
  message: string;
  rating: number;
}

export interface Category {
  id: string;
  title: string;
}

export interface Brand {
  id: string;
  brandName: string;
}

export interface Subcategory {
  id: string;
  subcategoryName: string;
}

//? Info data type for the footer
export interface InfoDataType {
  address: string;
  phoneNumber: string;
  email: string;
}

//? Product paths for the API
export interface ProductsPaths {
  create: string;
  list: string;
  subcategoryProducts: (
    subcategoryName: string,
    page: number,
    limit: number,
    sortBy?: string
  ) => string;
  categoryProducts: (categoryName: string) => string;
}

export interface CategoriesPaths {
  list: string;
  create: string;
}

export interface BlogPaths {
  list: string;
  create: string;
}

export interface BrandsPaths {
  list: string;
  create: string;
}

export interface SubCategoryPaths {
  list: string;
  create: string;
  subcategoryProducts: (subcategoryName: string) => string;
}

export interface InfoPaths {
  list: string;
}
