import { Controller, Get, Param } from '@nestjs/common';
import { DashboardService } from './dashboard.service';

@Controller('dashboard')
export class DashboardController {
  constructor(private readonly dashboardService: DashboardService) {}

  @Get('/:token')
  async get(@Param('token') doctorToken: string) {
    return await this.dashboardService.getData(doctorToken);
  }

}
