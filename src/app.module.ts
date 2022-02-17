import { Module } from '@nestjs/common'
import { HttpModule } from '@nestjs/axios'
import { ConfigModule } from '@nestjs/config'

import { AppController } from './app.controller'
import { AppService } from './app.service'
import { InfectionController } from './infection/infection.controller'
import { InfectionSerive } from './infection/infection.service'
import { InfectionModule } from './infection/infection.module'

@Module({
  imports: [InfectionModule, HttpModule, ConfigModule.forRoot()],
  controllers: [AppController, InfectionController],
  providers: [AppService, InfectionSerive],
})
export class AppModule {}
