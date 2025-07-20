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
  subcategoryName: string;
  subCategoryImage: string;
  categoryId: {
    _id: string;
  };
}

export type ProductDataType = {
  
}
