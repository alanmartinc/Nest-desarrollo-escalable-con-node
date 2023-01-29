import { Car } from 'src/cars/interfaces/car.interface';
import { v4 as uuid } from 'uuid';

// SEED: Semilla para usar en desa para simular una Base de Datos
export const CARS_SEED: Car[] = [
  {
    id: uuid(),
    brand: 'Toyota',
    model: 'Corolla',
  },
  {
    id: uuid(),
    brand: 'Honda',
    model: 'Civic',
  },
  {
    id: uuid(),
    brand: 'Jeep',
    model: 'Cherokee',
  },
];
