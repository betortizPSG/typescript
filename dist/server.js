"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = require("./routes");
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
app.get('/', routes_1.createCourse); // método get da rota createCourse que está no arquivo routes.ts
app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
});
