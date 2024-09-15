import { AnamnesesService } from './anamneses.service';
export declare class AnamnesesController {
    private readonly anamnesesService;
    constructor(anamnesesService: AnamnesesService);
    getAnamneses(pacienteToken: string): Promise<any>;
    getPacientes(doctorToken: string): Promise<any>;
}
