import { Controller, Get, Param } from '@nestjs/common';

// Escuchan la solicitud y emiten una respuesta
@Controller('cars')
export class CarsController {
  private cars = ['Toyota', 'Honda', 'Jeep'];

  @Get()
  getAllCars() {
    return this.cars;
  }

  @Get(':id')
  getCarById(@Param('id') id: string) {
    return this.cars[id];
  }
}