import { Controller, Get } from '@nestjs/common';

@Controller('user')
export class UserController {
  @Get()
  get() {
    return `prueba`;
  }
}
