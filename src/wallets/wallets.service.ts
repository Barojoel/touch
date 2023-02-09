import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { CreateWalletDto } from './dto/create-wallet.dto';
import { UpdateWalletDto } from './dto/update-wallet.dto';

@Injectable()
export class WalletsService {
  constructor(private prisma: PrismaService) {}

  create(createWalletDto: CreateWalletDto) {
    return this.prisma.wallet.create({ data: createWalletDto });
  }

  findAll() {
    return this.prisma.wallet.findMany({
      orderBy: {
        balance: 'desc',
      },
      take: 10,
    });
  }

  //Computing total overal wallets amount
  async findWallet() {
    const wallets = await this.prisma.wallet.findMany({
      include: {
        ledgers: {
          include: {
            transaction: {
              select: {
                balance: true,
              },
            },
          },
        },
      },
    });

    for (let wallet of wallets) {
      for (let ledgers of wallet.ledgers) {
        let transaction_sum = 0;
        for (let transaction of ledgers.transaction) {
          transaction_sum += transaction.balance;
        }
        (ledgers as any).vote_sum = transaction_sum;
      }
    }
  }

  //End of overal wallets balance calculations

  findOne(id: string) {
    return this.prisma.wallet.findUnique({
      where: { id },
      include: {
        user: {
          select: {
            email: true,
          },
        },
        ledgers: {
          select: {
            id: true,
            name: true,
            balance: true,
          },
        },
      },
    });
  }
  async findTot() {
    const aggregations = await this.prisma.wallet.aggregate({
      _sum: {
        balance: true,
      },
    });

    console.log('Total Wallet Balance:' + aggregations._sum.balance);
  }

  update(id: string, updateWalletDto: UpdateWalletDto) {
    return this.prisma.wallet.update({
      where: { id },
      data: updateWalletDto,
    });
  }
  remove(id: string) {
    return this.prisma.wallet.delete({ where: { id } });
  }

  findTotalBalance() {
    return this.prisma.wallet.groupBy({
      by: ['id'],
      _sum: {
        balance: true,
      },
      _count: {
        balance: true,
      },
    });
  } //End
}
