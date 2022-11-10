import { Module } from '@nestjs/common';
import { UserService } from './user/user.service';

@Module({
  controllers: [],
  providers: [UserService],
  exports: [],
})
export class UserApplicationModule {}
