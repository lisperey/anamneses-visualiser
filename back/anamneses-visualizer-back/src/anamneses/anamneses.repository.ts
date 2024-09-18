import { Injectable } from '@nestjs/common';
import { InjectConnection } from 'nest-knexjs';
import { Knex } from 'knex';

@Injectable()
export class AnamnesesRepository {
  constructor(@InjectConnection() private readonly knex: Knex) {}
  async getListAnamnese(pacienteToken: string): Promise<any> {
    const anamneses: any = await this.knex('anm_anamnese')
      .select('ap.descricao as pergunta', 'ar.descricao as resposta')
      .innerJoin(
        'anm_anamnese_pergunta_resposta as aapr',
        'aapr.anamnese',
        'anm_anamnese.id',
      )
      .innerJoin('anm_pergunta as ap', 'ap.id', 'aapr.pergunta')
      .innerJoin('anm_resposta as ar', 'ar.id', 'aapr.resposta')
      .where('anm_anamnese.paciente', pacienteToken);
    return anamneses;
  }

  async getListPaciente(doctorToken: string): Promise<any> {
    const anamneses: any = await this.knex('anm_anamnese')
      .select('id', 'paciente', 'data')
      .where('dentista', doctorToken);
    return anamneses;
  }
}
