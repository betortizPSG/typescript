"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCourse = void 0;
const CreateCourseService_1 = __importDefault(require("./CreateCourseService"));
function createCourse(req, res) {
    CreateCourseService_1.default.execute({
        duration: 10,
        name: "NodeJS",
        educator: "Dani" // Aqui é o objeto sendo passado como parâmetro para o método execute
    });
    CreateCourseService_1.default.execute({
        name: "ReactJS",
        educator: "Diego" // Aqui é o objeto sendo passado como parâmetro para o método execute
    });
    return res.json();
}
exports.createCourse = createCourse;
