import { ConfigService } from '@nestjs/config'
import { HttpService } from '@nestjs/axios'
import { Injectable } from '@nestjs/common'
import { firstValueFrom } from 'rxjs'
import { z } from 'zod'

import { Infection } from './infection.interface'

@Injectable()
export class InfectionSerive {
  constructor(
    private httpService: HttpService,
    private config: ConfigService
  ) {}

  private validateSchema(data: unknown): Infection {
    const resInfection = z.object({
      date: z.number(),
      pcr: z.number(),
      hospitalize: z.number(),
      positive: z.number(),
      severe: z.number(),
      discharge: z.number(),
      death: z.number(),
      symptom_confirming: z.number(),
    })
    return resInfection.parse(data)
  }

  private resToMessage(infection: Infection): string {
    const { pcr, hospitalize, positive, severe } = infection
    return `本日までの累計PCR検査数は${pcr}、累計入院者数は${hospitalize}、累計陽性者数は${positive}、累計重症者数は${severe}です`
  }

  async fetchTotalInfection() {
    return await firstValueFrom(
      this.httpService.get(`${this.config.get('API_BASE_URL')}/total`)
    ).then((res) => {
      return this.resToMessage(this.validateSchema(res.data))
    })
  }
}
