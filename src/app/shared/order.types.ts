import {Product} from "./product.types";
import {User} from "./user.types";

export interface Order {
  user: User,
  orderPositions: OrderPosition[]
}

export interface OrderPosition {
  product: Product,
  quantity: number
}
