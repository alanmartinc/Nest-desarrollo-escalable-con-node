import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { CarsService } from './cars.service';

// Controlador: Escuchan la solicitud y emiten una respuesta
@Controller('cars')
export class CarsController {
  // Inyeccion de Dependecias: Usan los datos del servicio (CarsService)
  constructor(private readonly CarsService: CarsService) {}
  @Get()
  getAllCars() {
    // findAll: Retorna todos los carros
    return this.CarsService.findAll();
  }

  @Get(':id')
  // Pipes: Transforma la data recibida
  getCarById(@Param('id', ParseIntPipe) id: number) {
    return this.CarsService.findOneById(id);
  }
}
