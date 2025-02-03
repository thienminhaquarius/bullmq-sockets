import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { IUser } from './dto';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get('/all')
  findAll() {
    return this.userService.findAll();
  }

  @Post('/create')
  create(@Body() user: IUser) {
    return this.userService.create(user);
  }
}
