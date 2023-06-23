import { Types } from "mongoose";

export interface ExpenseDetails {
    id: string;
    amount: number;
    date: Date;
    userId: Types.ObjectId
}