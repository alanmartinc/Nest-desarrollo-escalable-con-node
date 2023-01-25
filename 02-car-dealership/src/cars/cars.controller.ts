import { Controller, Get, Param } from '@nestjs/common';
import { CarsService } from './cars.service';

// Escuchan la solicitud y emiten una respuesta
@Controller('cars')
export class CarsController {
  // Inyeccion de dependecias para usar los datos del servicio
  constructor(private readonly CarsService: CarsService) {}
  @Get()
  getAllCars() {
    // Retorna todos los carros
    return this.CarsService.findAll();
  }

  @Get(':id')
  getCarById(@Param('id') id: string) {
    return this.CarsService.findOneById(+id);
  }
}
