import { Module } from '@nestjs/common';
import { CarsController } from './cars.controller';
import { CarsService } from './cars.service';

// Modulo: Estructura
@Module({
  controllers: [CarsController],
  // Todos los servicios son providers
  providers: [CarsService],
  exports: [CarsService],
})
export class CarsModule {}
