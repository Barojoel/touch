import { ApiProperty } from '@nestjs/swagger';
import { Ledger } from '@prisma/client';

export class LedgerEntity implements Ledger {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  balance: number;

  @ApiProperty()
  walletId: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
