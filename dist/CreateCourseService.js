"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CreateCourseService {
    execute({ name, duration = 8, educator }) {
        console.log(name, duration, educator); // Aqui é o método
    }
}
exports.default = new CreateCourseService();
