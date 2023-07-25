import { Request, Response } from "express";
import CreateCourseService from "./CreateCourseService";

export function createCourse(req: Request, res: Response) {
    CreateCourseService.execute({ // Aqui é o método sendo chamado e passando os parâmetros do objeto
        duration: 10, // Aqui é o objeto sendo passado como parâmetro para o método execute
        name: "NodeJS", // Aqui é o objeto sendo passado como parâmetro para o método execute
        educator: "Dani" // Aqui é o objeto sendo passado como parâmetro para o método execute
    });

    CreateCourseService.execute({ // Aqui é o método sendo chamado e passando os parâmetros do objeto
        name: "ReactJS", // Aqui é o objeto sendo passado como parâmetro para o método execute
        educator: "Diego" // Aqui é o objeto sendo passado como parâmetro para o método execute
    });
    return res.json();
}