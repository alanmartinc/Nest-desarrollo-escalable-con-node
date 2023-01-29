import { Injectable } from '@nestjs/common';
import { CarsService } from '../cars/cars.service';
import { CARS_SEED } from './data/cars.seed';
import { BrandsService } from '../brands/brands.service';
import { BRANDS_SEED } from './data/brands.seed';

@Injectable()
export class SeedService {
  constructor(
    private readonly carsService: CarsService,
    private readonly brandsService: BrandsService,
  ) {}

  populateDB() {
    this.carsService.fillCarsWithSeedData(CARS_SEED);
    this.brandsService.fillBrandsWithSeedData(BRANDS_SEED);
    return 'SEED executed';
  }
}
