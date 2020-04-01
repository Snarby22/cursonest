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

}
