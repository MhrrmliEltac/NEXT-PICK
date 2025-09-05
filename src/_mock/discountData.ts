export interface DiscountDataType {
  id: number;
  header: string;
  description: string;
  image: string;
}

export const discountInfoData: DiscountDataType[] = [
  {
    id: 1,
    header: "Extra 20% off all Air Fryers",
    description:
      "Don’t wait—grab your new air fryer today and save big! Offer valid for a limited time only.",
    image: "/a501dc67c58d59cd3bddfdd030cf94ce8c34c5bd.jpg",
  },
  {
    id: 2,
    header: "Save €50 Today!",
    description:
      "Say goodbye to dust and hello to effortless cleaning with our latest Robotic Vacuum Cleaner!",
    image: "/117804496bbdf36b780361c46eb953fb0d51d938.jpg",
  },
];
