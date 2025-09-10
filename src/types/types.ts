import { ChangeEvent } from "react";

export interface CategoryType {
  _id: string;
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
  link?: string;
}

export interface SubCategoryDataType {
  _id: string;
  subcategoryName: string;
  subCategoryImage: string;
  categoryId: {
    _id: string;
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
  _id: string;
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
  specifications: Record<string, string>;
  __v: number;
}
export interface Comment {
  user: string;
  message: string;
  rating: number;
}

export interface Category {
  _id: string;
  title: string;
}

export interface Brand {
  _id: string;
  brandName: string;
}

export interface Subcategory {
  _id: string;
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
  productById: (id: string | null) => string;
  subcategoryProducts: (
    subcategoryName: string,
    page: number,
    limit: number,
    sortBy?: string
  ) => string;
  categoryProducts: (categoryName: string) => string;
  bestSeller: (sortBy: string) => string;
}

export interface AuthType {
  login: string;
  register: string;
  profile: string;
  sendOtp: string;
  forgotPassword: string;
  resetPassword: string;
  verifyOtpByForgotPassword: string;
  refreshToken: string;
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

export interface SearchPaths {
  searchProducts: (query: string) => string;
}

export interface FavoritePaths {
  getFavorites: string;
  addFavorite: string;
  removeFavorite: (productId: string) => string;
}

export interface FormData {
  name: string;
  surname: string;
  birthDate: Date;
  phoneNumber: string;
  email: string;
  password: string;
  confirmPassword?: string;
}

export interface IFormInput {
  email: string;
  password: string;
}

export interface IForgotPasswordInput {
  email: string;
}

export type FormType = IFormInput | IForgotPasswordInput | FormData;

export interface FavoriteItem {
  createdAt: string;
  product: ProductDataType;
  updatedAt: string;
  _id: string;
  user: string;
}

export type FormElementProps = {
  id?: string | number;
  Icon?: React.ElementType;
  htmlFor?: string;
  placeholder?: string;
  value?: string;
  name?: string;
  identification?: string;
  label?: string;
  type?: string;
  readonly?: boolean;
  onChange?: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
};

export enum OrderStatus {
  PENDING = "PENDING",
  PROCESSING = "PROCESSING",
  COMPLETED = "COMPLETED",
  CANCELLED = "CANCELLED",
}

export interface OrderProductType {
  id: number;
  name: string;
  image: string;
  quantity: number;
  color: string;
}

export interface OrderHistoryType {
  id: number | string;
  orderNumber: string;
  product: OrderProductType;
  totalPayment: number;
  orderDate: string;
  status: string;
}

export type FooterListType = {
  id: number;
  heading: string;
  list: string[];
};

export interface AboutType {
  id: number;
  heading?: string;
  description: string;
}
