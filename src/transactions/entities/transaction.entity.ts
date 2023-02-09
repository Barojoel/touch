import { ApiProperty } from '@nestjs/swagger';
import { Transaction } from '@prisma/client';

export class TransactionEntity implements Transaction {
  @ApiProperty()
  id: string;

  @ApiProperty()
  ledgerId: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  trnxType: string;

  @ApiProperty()
  balance: number;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
