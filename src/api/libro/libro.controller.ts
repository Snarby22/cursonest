import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { LibroDto } from '../../libro-dto';
import { LibroDtosinId } from '../../libro-dtosin-id';

@Controller('libro')
export class LibroController {

  @Get() // listado
  findAll(): LibroDto[] {
    // buscar los datos en la BBDD
    return [];
  }

  @Post() // añadir un objeto
  addOne(@Body() createDto: LibroDtosinId): LibroDto {
     // recoger el libro y meterlo en la BBDD
     const libroDTO = new LibroDto();
     libroDTO.id = 1;
     libroDTO.titulo = createDto.titulo;
     libroDTO.autor = createDto.autor;
     libroDTO.fecha = createDto.fecha;
     return libroDTO;
   }

   @Get('/:id') // mostrar
   getById(@Param() params): LibroDto {
     // Capturar e id y consultar a la BBDD
     const libroDTO = new LibroDto();
     libroDTO.id = params.id;
     libroDTO.titulo = 'El Quijote';
     libroDTO.autor = 'Cervantes'
     libroDTO.fecha = '01/01/2020';
     return libroDTO;
  }

  @Put('/:id') // modificar un objeto
  modifyById(@Param() params, @Body() updateDto: LibroDtosinId): LibroDto {
    // Capturar el id y buscarlo en la BBDD y luego guardar los cambios
    const libroDTO = new LibroDto();
    libroDTO.id = params.id;
    libroDTO.titulo = updateDto.titulo;
    libroDTO.autor = updateDto.autor;
    libroDTO.fecha = updateDto.fecha;
    return libroDTO;
 }

 @Delete('/:id') // borrar
 deleteById(@Param() params): LibroDto {
   // coger el id consultar a la bbdd y luego borrar el libro
   const libroDTO = new LibroDto();
   libroDTO.id = params.id;
   libroDTO.titulo = 'El Quijote';
   libroDTO.autor = 'Cervantes'
   libroDTO.fecha = '01/01/2020';
   return libroDTO;
 }
}
