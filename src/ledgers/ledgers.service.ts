import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { CreateLedgerDto } from './dto/create-ledger.dto';
import { UpdateLedgerDto } from './dto/update-ledger.dto';

@Injectable()
export class LedgersService {
  constructor(private prisma: PrismaService) {}

  create(createLedgerDto: CreateLedgerDto) {
    return this.prisma.ledger.create({
      data: createLedgerDto,
    });
  }

  findAll() {
    return this.prisma.ledger.findMany({
      include: {
        Wallet: true,
        transaction: true,
      },
    });
  }

  findOne(id: string) {
    return this.prisma.ledger.findUnique({
      where: { id },
      include: {
        transaction: {
          select: {
            name: true,
            trnxType: true,
            balance: true,
          },
        },
      },
    });
  }

  update(id: string, updateLedgerDto: UpdateLedgerDto) {
    return this.prisma.ledger.update({
      where: { id },
      data: updateLedgerDto,
    });
  }

  remove(id: string) {
    return this.prisma.ledger.delete({
      where: { id },
    });
  }

  //Performing total sum of all wallets
  async totalLg() {
    const totalLg = await this.prisma.ledger.groupBy({
      by: ['walletId'],
      _sum: {
        balance: true,
      },
    });
    console.log(totalLg);
  }

  getTotal() {
    // return this.prisma.ledger.aggregate({
    return this.prisma.ledger.aggregate({
      _sum: {
        balance: true,
      },
    });

    //return response._sum.balance;
  }
}
