import { ApiProperty } from '@nestjs/swagger';

export class CreateLedgerDto {
  @ApiProperty({ default: 'KCB/MSHWARI/POCHI LA BIASHARA' })
  name: string;

  @ApiProperty({ default: 0.0 })
  balance: number;

  @ApiProperty()
  walletId?: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
