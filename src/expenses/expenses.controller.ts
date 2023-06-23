import { Controller, Post, Get, Body, Param, UseGuards, Req } from '@nestjs/common';
import { JwtGuard } from 'src/auth/guards/jwt.guard';
import { ExpenseService } from './expense.service';
import { ExpenseDetails } from './expense-details.interface';
import { NewExpenseDTO } from './dtos/new-expense.dto';


@Controller('expense')
export class ExpenseController {

    constructor(private expenseService: ExpenseService) {}

    @UseGuards(JwtGuard)
    @Post('create')
    register(@Req() expense: NewExpenseDTO): Promise<ExpenseDetails | null> {
            return this.expenseService.create(expense)
        }

        @UseGuards(JwtGuard)
        @Get('')
        getAll(@Req() req: any): Promise<any | null> {
                return this.expenseService.getAllExpenses(req)
            }
}
