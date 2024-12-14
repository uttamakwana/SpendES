import type { CategoryEnum } from '@enums';
import type { TRefId } from '@types';

type TExpenseEntity = {
 amount: number;
 description: string;
 createdBy: TRefId;
 category?: CategoryEnum;
 isSettled?: boolean;
}

export class ExpenseEntity {
 amount: TExpenseEntity["amount"];
 description: TExpenseEntity["description"];
 createdBy: TExpenseEntity["createdBy"];
 category?: TExpenseEntity["category"];
 isSettled?: TExpenseEntity["isSettled"];

 constructor({ amount, description, createdBy, category, isSettled }: TExpenseEntity) {
  if(amount < 0) {
   throw new Error("Amount cannot be negative!");
  }

  this.amount = amount;
  this.description = description;
  this.createdBy = createdBy;
  this.category = category;
  this.isSettled = isSettled;
 }

}
