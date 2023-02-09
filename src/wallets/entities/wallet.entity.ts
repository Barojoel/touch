import { ApiProperty } from '@nestjs/swagger';
import { Wallet } from '@prisma/client';

export class WalletEntity implements Wallet {
  @ApiProperty()
  id: string;

  @ApiProperty()
  userId: string;

  @ApiProperty()
  balance: number;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
