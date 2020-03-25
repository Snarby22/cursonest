import { LibroDto } from '../../libro-dto';
import { LibroDtosinId } from '../../libro-dtosin-id';
export declare class LibroController {
    findAll(): LibroDto[];
    addOne(createDto: LibroDtosinId): LibroDto;
    getById(params: any): LibroDto;
    modifyById(params: any, updateDto: LibroDtosinId): LibroDto;
    deleteById(params: any): LibroDto;
}
