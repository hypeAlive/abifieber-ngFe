import {Product} from "./product.types";
import {User} from "./user.types";

export interface Order {
  id: number,
  user: User,
  orderPositions: OrderPosition[]
}

export interface OrderPosition {
  id: number,
  order: Order,
  product: Product,
  quantity: number
}
