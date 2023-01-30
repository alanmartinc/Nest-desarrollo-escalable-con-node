import { join } from 'path';
import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { PokemonModule } from './pokemon/pokemon.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
    // Referencia a nuestra Base de Datos
    MongooseModule.forRoot('mongodb://localhost:27017/nest-pokemon'),
    PokemonModule,
  ],
})
export class AppModule {}
