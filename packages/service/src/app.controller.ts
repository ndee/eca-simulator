import { calculateAcquiredBitcoin } from '@bg-eca-simulator/calculator';
import { IEcaPurchase } from '@bg-eca-simulator/calculator/dist/interfaces';
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getHello(): Promise<string> {
    return JSON.stringify(await calculateAcquiredBitcoin({} as IEcaPurchase));
  }
}
