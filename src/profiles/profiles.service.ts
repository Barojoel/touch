import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';

@Injectable()
export class ProfilesService {
  constructor(private prisma: PrismaService) {}

  async create(createProfileDto: CreateProfileDto) {
    return await this.prisma.profile.create({
      data: createProfileDto,
    });
  }

  async findAll() {
    return await this.prisma.profile.findMany({});
  }

  async findOne(id: string) {
    return await this.prisma.profile.findUnique({
      where: { id },
      include: {
        user: true,
      },
    });
  }

  async update(id: string, updateProfileDto: UpdateProfileDto) {
    return await this.prisma.profile.update({
      where: { id },
      data: updateProfileDto,
    });
  }

  async remove(id: string) {
    return await this.prisma.profile.delete({
      where: { id },
    });
  }
}
