import type { OrderHistoryType } from "@/types/types";

export const orderHistory: OrderHistoryType[] = [
  {
    id: 1,
    orderNumber: "#1044567",
    product: {
      id: 234,
      name: "iPhone 13 Pro Max 256GB Sierra Blue",
      image: "https://i.ebayimg.com/images/g/kigAAOSw3nRnux11/s-l1200.jpg",
      quantity: 1,
      color: "Sierra Blue",
    },
    totalPayment: 2399,
    orderDate: "2023-08-15",
    status: "Being processed",
  },
  {
    id: 2,
    orderNumber: "#4927562",
    product: {
      id: 235,
      name: "iPhone 13 Pro Max 256GB Sierra Blue",
      image:
        "https://5.imimg.com/data5/ECOM/Default/2022/9/EL/LR/BY/5388819/tx-smd-ww-smw-waveproi7-03-1-250x250.jpg",
      quantity: 1,
      color: "Sierra Blue",
    },
    totalPayment: 2399,
    orderDate: "2023-08-15",
    status: "Being processed",
  },
  {
    id: 3,
    orderNumber: "#4927562",
    product: {
      id: 235,
      name: "iPhone 13 Pro Max 256GB Sierra Blue",
      image:
        "https://5.imimg.com/data5/ECOM/Default/2022/9/EL/LR/BY/5388819/tx-smd-ww-smw-waveproi7-03-1-250x250.jpg",
      quantity: 1,
      color: "Sierra Blue",
    },
    totalPayment: 2399,
    orderDate: "2023-08-15",
    status: "Cancelled",
  },
];
