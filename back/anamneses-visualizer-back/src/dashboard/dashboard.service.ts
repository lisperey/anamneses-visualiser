import { Injectable } from '@nestjs/common';
import { DashboardRepository } from './dashboard.repository';

@Injectable()
export class DashboardService {
  constructor(private readonly dashboardRepository: DashboardRepository) {}

  async getData(doctorToken: string) {
    const data = await this.dashboardRepository.getAnamneseData(doctorToken);
    return data;
  }
}
