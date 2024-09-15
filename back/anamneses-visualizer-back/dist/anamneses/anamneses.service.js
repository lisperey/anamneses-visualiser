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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnamnesesService = void 0;
const common_1 = require("@nestjs/common");
const anamneses_repository_1 = require("./anamneses.repository");
let AnamnesesService = class AnamnesesService {
    constructor(anamnesesRepository) {
        this.anamnesesRepository = anamnesesRepository;
    }
    async getAnamneses(pacienteToken) {
        const anamneses = await this.anamnesesRepository.getListAnamnese(pacienteToken);
        if (!anamneses) {
            throw new common_1.HttpException('Anamneses not found', common_1.HttpStatus.NOT_FOUND);
        }
        return anamneses;
    }
    async getPacientes(doctorToken) {
        const pacientes = await this.anamnesesRepository.getListPaciente(doctorToken);
        return pacientes;
    }
};
exports.AnamnesesService = AnamnesesService;
exports.AnamnesesService = AnamnesesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [anamneses_repository_1.AnamnesesRepository])
], AnamnesesService);
//# sourceMappingURL=anamneses.service.js.map