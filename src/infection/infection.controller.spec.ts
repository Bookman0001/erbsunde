import { Test, TestingModule } from '@nestjs/testing'
import { InfectionController } from './infection.controller'

describe('InfectionController', () => {
  let controller: InfectionController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InfectionController],
    }).compile()

    controller = module.get<InfectionController>(InfectionController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
