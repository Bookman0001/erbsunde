import { Controller, Get, Header } from '@nestjs/common'

import { InfectionSerive } from './infection.service'

@Controller('infection')
export class InfectionController {
  constructor(private infectionService: InfectionSerive) {}

  @Get()
  @Header('Cache-Control', 'none')
  async getTotalInfection() {
    return await this.infectionService.fetchTotalInfection()
  }
}
