import { UserAdapterInterfaceModule } from '@base-nestjs/user/adapter/interface';
import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [UserAdapterInterfaceModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
