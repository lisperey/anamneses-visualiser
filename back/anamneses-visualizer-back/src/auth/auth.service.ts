import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  validateApiKey(inputApiKey: string) {
    const apiKey = process.env.API_KEY;
    return inputApiKey === apiKey;
  }
}
