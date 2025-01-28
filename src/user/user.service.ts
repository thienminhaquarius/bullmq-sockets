import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma.service';
import { IUser } from './dto';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.user.findMany();
  }

  async create(user: IUser) {
    return this.prisma.user.create({
      data: {
        email: user.email,
        name: user.email,
      },
    });
  }
}
