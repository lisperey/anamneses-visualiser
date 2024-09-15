import { LoginService } from './login.service';
import { LoginDto } from './login.dto';
export declare class LoginController {
    private readonly loginService;
    constructor(loginService: LoginService);
    get(body: LoginDto): Promise<any>;
}
