import { Knex } from 'knex';
import { LoginDto } from './login.dto';
export declare class LoginRepository {
    private readonly knex;
    constructor(knex: Knex);
    getDoctor(body: LoginDto): Promise<any>;
}
