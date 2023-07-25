interface Course { // Interface é um contrato que o objeto precisa seguir
    name: string;
    duration?: number;
    educator: string;
}

class CreateCourseService { // Service é uma classe que tem apenas um método
    execute({name, duration = 8, educator}: Course){ // O {} é o desestruturação do objeto
        console.log(name, duration, educator) // Aqui é o método
    }
}

export default new CreateCourseService();