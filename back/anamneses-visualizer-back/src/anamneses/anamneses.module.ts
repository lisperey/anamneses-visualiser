import { Module } from '@nestjs/common';
import { AnamnesesController } from './anamneses.controller';
import { AnamnesesRepository } from './anamneses.repository';
import { AnamnesesService } from './anamneses.service';

@Module({
  imports: [],
  controllers: [AnamnesesController],
  providers: [AnamnesesService, AnamnesesRepository],
})
export class AnamnesesModule {}
