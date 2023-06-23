import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { ExpenseDetails } from './expense-details.interface';


import {Model} from 'mongoose';
import { ExpenseDocument } from './expense.schema';
import { NewExpenseDTO } from './dtos/new-expense.dto';
@Injectable()
export class ExpenseService {
    constructor(@InjectModel('Expense') private readonly expenseModel: Model<ExpenseDocument>) 
    {}

    _getExpenseDetails(expense: ExpenseDocument): ExpenseDetails {
        return {
            id: expense._id,
            amount: expense.amount,
            date: expense.date,
            userId: expense.userId
        }
    }
    async create(
        req: Readonly<any>): Promise<ExpenseDetails | any> {

            const {amount} = req.body;
            const date = new Date()
            const userId = req.user.id
            
            const newExpense = new this.expenseModel({
                amount,
                date,
                userId
            });
            newExpense.save()

            return this._getExpenseDetails(newExpense)
    }

    async getAllExpenses(
        req: Readonly<any>): Promise<ExpenseDetails | any> {

            const userId = req.user.id

            return this.expenseModel.find({userId: userId})
    }
}
