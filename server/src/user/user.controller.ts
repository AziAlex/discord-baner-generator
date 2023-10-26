import {Body, Controller, Get} from '@nestjs/common';
import {UserService} from './user.service';
import {IUser} from "./models/types";

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {
  }

  @Get()
  findAll(@Body() dto: IUser) {

  }
}
