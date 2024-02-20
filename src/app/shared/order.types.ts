import {Product} from "./product.types";
import {User} from "./user.types";

export type Order = {
  id: number,
  user: User,
  orderPositions: OrderPosition[]
}
export type OrderCreation = Omit<Order, "id">;



export type OrderPosition = {
  id: number,
  order: Order,
  product: Product,
  quantity: number
}
export type OrderPositionCreation = Omit<OrderPosition, "id">;
