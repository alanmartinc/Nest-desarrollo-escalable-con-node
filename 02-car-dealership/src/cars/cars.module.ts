import { Module } from '@nestjs/common';
import { CarsController } from './cars.controller';

// Estructura
@Module({
  controllers: [CarsController],
})
export class CarsModule {}
