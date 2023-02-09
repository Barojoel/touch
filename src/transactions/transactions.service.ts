import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';

@Injectable()
export class TransactionsService {
  constructor(private prisma: PrismaService) {}

  create(createTrans: CreateTransactionDto) {
    return this.prisma.transaction.create({
      data: createTrans,
    });
  }

  findAll() {
    return this.prisma.transaction.findMany({});
  }
  //Get the Transactions with the string word balance.
  findTrans() {
    return this.prisma.transaction.findMany({});
  }
  findOne(id: string) {
    return this.prisma.transaction.findUnique({
      where: { id },
    });
  }

  update(id: string, updTrans: UpdateTransactionDto) {
    return this.prisma.transaction.update({
      where: { id },
      data: updTrans,
    });
  }

  remove(id: string) {
    return this.prisma.transaction.delete({
      where: { id },
    });
  }
}
