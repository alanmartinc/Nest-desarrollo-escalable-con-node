import { Controller, Get } from '@nestjs/common';
import { SeedService } from './seed.service';

// SEED: Semilla para usar en desa para simular una Base de Datos
@Controller('seed')
export class SeedController {
  constructor(private readonly seedService: SeedService) {}

  @Get()
  runSeed() {
    return this.seedService.populateDB();
  }
}
