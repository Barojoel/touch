import { ApiProperty } from '@nestjs/swagger';

export class CreateTransactionDto {
  @ApiProperty()
  ledgerId: string;

  @ApiProperty({ default: 'Deposits' })
  name: string;

  @ApiProperty({ default: 'Income' })
  trnxType: string;

  @ApiProperty()
  balance: number;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
