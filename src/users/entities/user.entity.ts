import { ApiProperty } from '@nestjs/swagger';
import { User } from '@prisma/client';

export class UsersEntity implements User {
  @ApiProperty()
  id: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
