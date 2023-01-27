import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  ParseUUIDPipe,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';

// Controlador: Escuchan la solicitud y emiten una respuesta
@Controller('cars')
export class CarsController {
  // Inyeccion de Dependecias: Usan los datos del servicio (CarsService)
  constructor(private readonly CarsService: CarsService) {}

  // CRUD BASICO: create, read, update and delete
  @Get()
  getAllCars() {
    // findAll: Retorna todos los carros
    return this.CarsService.findAll();
  }

  @Get(':id')
  // Pipes: Transforma la data recibida
  getCarById(@Param('id', new ParseUUIDPipe({ version: '4' })) id: string) {
    return this.CarsService.findOneById(id);
  }

  @Post()
  createCar(@Body() createCarDto: CreateCarDto) {
    return this.CarsService.create(createCarDto);
  }

  @Patch(':id')
  updateCar(@Param('id', ParseIntPipe) id: number, @Body() body: any) {
    return body;
  }

  @Delete(':id')
  deleteCar(@Param('id', ParseIntPipe) id: number) {
    return {
      method: 'delete',
      id,
    };
  }
}
