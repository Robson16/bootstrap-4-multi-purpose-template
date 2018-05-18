# Bootstrap Landing Page Template

## Necessary resources:

- Node.js
- Gulp
- Bower

Node.js is used to use Gulp for task automation (SASS Compiler, image optimizer, image minification, etc.) and Bower for dependency manager (Jquery, Bootstrap, etc.).

## Installation

Run the node.js commands after cloning the project:

#### Install dependencies on package.json

```bash
npm install
```

Download all dependencies of bower.json

```bash
bower install
```

## Gulp Server

The Gulp script used has a server configured, which when active, which for example, already compiles the SASS files or when any file is modified in the project, that server when active, does the update of the browser.
To start it just run the command below through the terminal inside the project folder:

```bash
gulp server
```

To create the DIST folder, which you will use to publish the files that are already optimized and minified, just run the file:

```bash
gulp
```

It will call the default task of the gulp script, which will create the folder ready to publish.

## Contribution

Feel free to contribute, this is not the best project in the world, there is always something to improve, I count on everyone to do it!

=========================================================================

# Bootstrap Landing Page Template

## Recursos Necessários:

- Node.js
- Gulp
- Bower

Utiliza-se Node.js para poder se usar o Gulp para automatizador de tarefas (Compilador SASS, otimizador de imagens, minificação de imagens, etc...) e Bower para gerenciador de dependencias (Jquery, Bootstrap, etc..).

## Instalação

Rode os comandos de node.js após clonar o projeto:

#### Instalar as dependencias do package.json

```bash
npm install 
```

Baixar todas as dependencias do bower.json

```bash
bower install
```

## Servidor Gulp

o script Gulp utilizador tem um servidor configurado, que quando ativo, já faz a compilação dos arquivos SASS, quando qualquer arquivo for modificado no projeto, esse servidor quando aivo, faz a atualização do navegador,
para inicia-lo apenas execute o comando abaixo pelo terminal dentro da pasta do projeto:

```bash
gulp server
```

Para montar a pasta DIST, que é a qual voce ira usar para publicar os arquivos, aos quais já estaram otimizados e minificados, execute apenas o camando:

```bash
gulp
```

Ele ira fazer a chamada da tarefa padrão do sript gulp, que montara a pasta pronta para publicar.

## Contribuição

Fiquem a vontade para contribuir, esse não é projeto mais bem feito do mundo, sempre tem o que melhorar, conto com todos para isso!