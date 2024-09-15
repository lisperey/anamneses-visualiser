import { AnamnesesRepository } from './anamneses.repository';
export declare class AnamnesesService {
    private readonly anamnesesRepository;
    constructor(anamnesesRepository: AnamnesesRepository);
    getAnamneses(pacienteToken: string): Promise<any>;
    getPacientes(doctorToken: string): Promise<any>;
}
