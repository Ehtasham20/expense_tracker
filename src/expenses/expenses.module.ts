import { Module } from '@nestjs/common';
import { ExpenseController } from './expenses.controller';
import { ExpenseService } from './expense.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ExpenseSchema } from './expense.schema';

@Module({
  imports: [MongooseModule.forFeature([{name: 'Expense', schema: ExpenseSchema}])],
  controllers: [ExpenseController],
  providers: [ExpenseService],
})
export class ExpensesModule {}
