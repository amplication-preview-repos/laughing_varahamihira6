import { Order } from "../order/Order";

export type Product = {
  createdAt: Date;
  description: string | null;
  id: string;
  name: string | null;
  orders?: Array<Order>;
  price: number | null;
  updatedAt: Date;
};
