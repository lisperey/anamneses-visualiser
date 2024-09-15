import { Knex } from 'knex';
export declare class AnamnesesRepository {
    private readonly knex;
    constructor(knex: Knex);
    getListAnamnese(pacienteToken: string): Promise<any>;
    getListPaciente(doctorToken: string): Promise<any>;
}
