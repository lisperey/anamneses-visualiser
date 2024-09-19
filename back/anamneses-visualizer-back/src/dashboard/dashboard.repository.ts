import { Injectable } from '@nestjs/common';
import { InjectConnection } from 'nest-knexjs';
import { Knex } from 'knex';

@Injectable()
export class DashboardRepository {
  constructor(@InjectConnection() private readonly knex: Knex) {}
  async getAnamneseData(dentistaToken: string): Promise<any> {
    const data: any = await this.knex('anm_anamnese')
      .select(
        this.knex.raw(
          'DATE_FORMAT(FROM_UNIXTIME(data), "%m/%Y") AS mes_ano, COUNT(*) as quantidade',
        ),
      )
      .where('dentista', dentistaToken)
      .groupByRaw(
        'EXTRACT(YEAR FROM FROM_UNIXTIME(data)), EXTRACT(MONTH FROM FROM_UNIXTIME(data))',
      )
      .orderByRaw('EXTRACT(MONTH FROM FROM_UNIXTIME(data))');
    return data;
  }
}
