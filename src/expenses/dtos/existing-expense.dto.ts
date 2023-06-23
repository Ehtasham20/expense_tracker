import { ObjectId } from "mongoose";

export class ExistingExpenseDTO {
    amount: number;
    date: Date;
    userId: ObjectId;
}