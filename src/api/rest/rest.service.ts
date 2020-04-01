import { Injectable } from '@nestjs/common';
import { LibroDto } from '../../libro-dto';

@Injectable()
export class RestService {

    private libros: LibroDto[] = [];

    constructor() {
        this.libros = [];
    }

    getLibros(): LibroDto[] {
        return this.libros;
    }

    addLibro(libro: LibroDto) {
        this.libros.push(libro);
    }


    getLibro(id: number): Libro {

           let logger = this.logger;
           let response: Libro = new Libro();
           this.getLibros().forEach(function (libro) {
               logger.log('Libro ID : ' + libro.id);
               if (libro.id == id) {
                   response = libro;
               }
           });
           return response;
       }

}
