import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
//import { LibroDto } from '../../libro-dto';
//import { LibroDtosinId } from '../../libro-dtosin-id';
//import { RestService } from '../rest/rest.service';

import { Libro } from '../interfaces/libro-mongo';
import { LibroService } from '../services/libro.service';

@Controller('libro')
export class LibroController {

  private id: number = 0;
  constructor(private restService: LibroService) { }

  @Get() // listado
  async findAll(): Promise<Libro[]> {
      return this.service.list();   // buscar los datos en la BBDD
  }

 @Post() // añadir un objeto
  async addOne(@Body() item: Libro): Promise<Libro> {
        // recoger el libro y meterlo en la BBDD
      return this.service.add(item)
  }

  @Get(':id') // mostrar libro
 async getById(@Param('id') id: string): Promise<Libro> {
       // Capturar e id y consultar a la BBDD
     return this.service.get(id);

  @Put(':id') // modificar libro
       modifyById(@Param('id') id: string, @Body() item: Libro): Promise<Libro> {
       // Capturar el id y buscarlo en la BBDD y luego guardar los cambios
       return this.service.update(id, item);
  }

  @Delete(':id') // borrar
      deleteById(@Param('id') id: string): Promise<Libro> {
     // coger el id consultar a la bbdd y luego borrar el libro
      return this.service.delete(id);
  }

}
