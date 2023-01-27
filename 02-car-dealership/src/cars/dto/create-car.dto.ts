import { IsString, MinLength } from 'class-validator';

// DTO (clases): Validaciones de la data
export class CreateCarDto {
  @IsString({ message: `The brand most be a cool string` })
  readonly brand: string;

  @IsString()
  @MinLength(3)
  readonly model: string;
}
