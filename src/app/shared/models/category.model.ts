import { BaseEntity } from "./base-entity.model";

export interface Category  extends BaseEntity {
  id: number;
  name: string;
}
