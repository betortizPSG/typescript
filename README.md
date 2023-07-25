# Configuração do ambiente de desenvolvimento

## Iniciar um projeto
```bash
yarn init -y
```
### Passo 1:
## Instalar dependencias
```bash
yarn add express
```
- O express não entende o comando para executar typescript. Por isso a necessidade de instalar a biblioteca @types/express.
## Instalar dependencias de desenvolvimento
```bash
yarn add nodemon -D
yarn add typescript -D
yarn add @types/express -D
```
### Passo 2:
- Criar uma a pasta `src` e dentro dessa pasta o arquivo `server.ts`.
- Configurar o servidor `server.ts`.
```ts
import express from 'express';

const app = express();

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
    }
);

app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
    }
);
```
- Inicializar o typescript com o comando abaixo:
```bash
yarn tsc --init
```
- Esse comando irá criar o arquivo `tsconfig.json`
- Dentro do arquivo `tsconfig.json` procurar o código `outDir` descomentar e substituir o `./` por `./dist`
```ts
    // "inlineSourceMap": true,                          /* Include sourcemap files inside the emitted JavaScript. */
    // "outFile": "./",                                  /* Specify a file that bundles all outputs into one JavaScript file. If 'declaration' is true, also designates a file that bundles all .d.ts output. */
     "outDir": "./dist",                                   /* Specify an output folder for all emitted files. */
    // "removeComments": true,                           /* Disable emitting comments. */
    // "noEmit": true, 
```