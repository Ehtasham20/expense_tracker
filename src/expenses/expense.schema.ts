import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

import { Document, Types } from "mongoose";

export type ExpenseDocument = Expense & Document;

@Schema()
export class Expense {
    @Prop({required: true})
    amount: number;
    @Prop({required: true, unique: true})
    date: Date;
    @Prop({required: true})
    userId: Types.ObjectId;
}

export const ExpenseSchema = SchemaFactory.createForClass(Expense);