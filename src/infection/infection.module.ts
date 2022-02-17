import { HttpModule } from '@nestjs/axios'
import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'

import { InfectionSerive } from './infection.service'

@Module({
  imports: [
    HttpModule.registerAsync({
      useFactory: () => ({
        timeout: 5000,
      }),
    }),
    ConfigModule.forRoot(),
  ],
  providers: [InfectionSerive],
})
export class InfectionModule {}
