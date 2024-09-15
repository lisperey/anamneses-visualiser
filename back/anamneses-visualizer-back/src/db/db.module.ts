import { Global, Module } from '@nestjs/common';
import { KnexModule } from 'nest-knexjs';
import { ConfigService, ConfigModule } from '@nestjs/config';

@Global()
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    KnexModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        config: {
          client: 'mysql',
          connection: configService.get<string>('DB_URI'),
        },
      }),
      inject: [ConfigService],
    }),
  ],
})
export class DbModule {}
