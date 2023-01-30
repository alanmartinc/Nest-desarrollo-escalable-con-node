import { IsString, MinLength } from 'class-validator';


export class UpdateBrandDto {
  @IsString()
  @MinLength(1)
  name: string;
}
