import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
import { ApiAcceptedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { TransactionEntity } from './entities/transaction.entity';

@Controller('transactions')
@ApiTags('Transactions (Income or Expenses)')
export class TransactionsController {
  constructor(private readonly transactionsService: TransactionsService) {}

  @Post('createT')
  @ApiAcceptedResponse({ type: TransactionEntity })
  create(@Body() createT: CreateTransactionDto) {
    return this.transactionsService.create(createT);
  }

  @Get('getT')
  @ApiOkResponse({ type: TransactionEntity, isArray: true })
  findAll() {
    return this.transactionsService.findAll();
  }

  @Get('getTrans')
  @ApiOkResponse({ type: TransactionEntity, isArray: true })
  findTrans() {
    return this.transactionsService.findTrans();
  }

  @Get(':getOneT')
  @ApiOkResponse({ type: TransactionEntity })
  findOne(@Param('getOneT') id: string) {
    return this.transactionsService.findOne(id);
  }

  @Patch(':updateT')
  @ApiOkResponse({ type: TransactionEntity })
  update(@Param('updateT') id: string, @Body() transUp: UpdateTransactionDto) {
    return this.transactionsService.update(id, transUp);
  }

  @Delete(':id')
  @ApiOkResponse({ type: TransactionEntity })
  remove(@Param('id') id: string) {
    return this.transactionsService.remove(id);
  }

  //Calculating the totals of all transactions
}
