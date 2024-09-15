"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnamnesesModule = void 0;
const common_1 = require("@nestjs/common");
const anamneses_controller_1 = require("./anamneses.controller");
const anamneses_repository_1 = require("./anamneses.repository");
const anamneses_service_1 = require("./anamneses.service");
let AnamnesesModule = class AnamnesesModule {
};
exports.AnamnesesModule = AnamnesesModule;
exports.AnamnesesModule = AnamnesesModule = __decorate([
    (0, common_1.Module)({
        imports: [],
        controllers: [anamneses_controller_1.AnamnesesController],
        providers: [anamneses_service_1.AnamnesesService, anamneses_repository_1.AnamnesesRepository],
    })
], AnamnesesModule);
//# sourceMappingURL=anamneses.module.js.map