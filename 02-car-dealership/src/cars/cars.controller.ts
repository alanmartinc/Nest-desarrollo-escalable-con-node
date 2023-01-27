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
} from '@nestjs/common';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { CarsService } from './cars.service';
import { CreateCarDto, UpdateCarDto } from './dto';

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
  updateCar(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateCarDto: UpdateCarDto,
  ) {
    return updateCarDto;
  }

  @Delete(':id')
  deleteCar(@Param('id', ParseIntPipe) id: number) {
    return {
      method: 'delete',
      id,
    };
  }
}
