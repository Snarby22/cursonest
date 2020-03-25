"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const libro_dto_1 = require("../../libro-dto");
const libro_dtosin_id_1 = require("../../libro-dtosin-id");
let LibroController = class LibroController {
    findAll() {
        return [];
    }
    addOne(createDto) {
        const libroDTO = new libro_dto_1.LibroDto();
        libroDTO.id = 1;
        libroDTO.titulo = createDto.titulo;
        libroDTO.autor = createDto.autor;
        libroDTO.fecha = createDto.fecha;
        return libroDTO;
    }
    getById(params) {
        const libroDTO = new libro_dto_1.LibroDto();
        libroDTO.id = params.id;
        libroDTO.titulo = 'El Quijote';
        libroDTO.autor = 'Cervantes';
        libroDTO.fecha = '01/01/2020';
        return libroDTO;
    }
    modifyById(params, updateDto) {
        const libroDTO = new libro_dto_1.LibroDto();
        libroDTO.id = params.id;
        libroDTO.titulo = updateDto.titulo;
        libroDTO.autor = updateDto.autor;
        libroDTO.fecha = updateDto.fecha;
        return libroDTO;
    }
    deleteById(params) {
        const libroDTO = new libro_dto_1.LibroDto();
        libroDTO.id = params.id;
        libroDTO.titulo = 'El Quijote';
        libroDTO.autor = 'Cervantes';
        libroDTO.fecha = '01/01/2020';
        return libroDTO;
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Array)
], LibroController.prototype, "findAll", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [libro_dtosin_id_1.LibroDtosinId]),
    __metadata("design:returntype", libro_dto_1.LibroDto)
], LibroController.prototype, "addOne", null);
__decorate([
    common_1.Get('/:id'),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", libro_dto_1.LibroDto)
], LibroController.prototype, "getById", null);
__decorate([
    common_1.Put('/:id'),
    __param(0, common_1.Param()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, libro_dtosin_id_1.LibroDtosinId]),
    __metadata("design:returntype", libro_dto_1.LibroDto)
], LibroController.prototype, "modifyById", null);
__decorate([
    common_1.Delete('/:id'),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", libro_dto_1.LibroDto)
], LibroController.prototype, "deleteById", null);
LibroController = __decorate([
    common_1.Controller('libro')
], LibroController);
exports.LibroController = LibroController;
//# sourceMappingURL=libro.controller.js.map