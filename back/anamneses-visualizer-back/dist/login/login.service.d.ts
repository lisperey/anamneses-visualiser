import { LoginRepository } from './login.repository';
import { LoginDto } from './login.dto';
export declare class LoginService {
    private readonly loginRepository;
    constructor(loginRepository: LoginRepository);
    getTokenDoctor(body: LoginDto): Promise<any>;
}
