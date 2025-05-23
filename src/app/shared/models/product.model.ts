import { BaseEntity } from "./base-entity.model";

export interface Product extends BaseEntity {
  id: number;
  name: string;
  price: number;
  categoryId: number;
}
