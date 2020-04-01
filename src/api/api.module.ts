import { Module } from '@nestjs/common';
import { LibroController } from './libro/libro.controller';
import { RestService } from './rest/rest.service';


import { MongooseModule } from '@nestjs/mongoose';
import { LibroSchema } from './libro/schemas/libro.schema';
import { LibroService } from './libro/services/libro.service';


@Module({
  controllers: [LibroController],
  providers: [RestService, LibroService],
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Libro', // modelo
        schema: LibroSchema, // esquema
        collection: 'libros' // coleccion
      }
    ])
  ],
})
export class ApiModule { }
