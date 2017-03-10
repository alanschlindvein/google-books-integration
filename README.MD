# [google-books-integration](https://santosguilherme.github.io/google-books-integration/dist/index.html)

Web app desenvolvida em [React](https://facebook.github.io/react/), integrando-se com a
[API do Google Books](https://developers.google.com/books/docs/overview),
para consultar livros e visualizar mais detallhes sobre o mesmo.

[Cliquei aqui para acessa-lo](https://santosguilherme.github.io/google-books-integration/dist/index.html)

## Requisitos do usuário
* Como usuário eu quero pesquisar um livro por palavra-chave e ver o resultado na
mesma página;
* Como usuário eu quero conseguir fazer paginação do resultado da pesquisa;
* Como usuário eu quero marcar um livro como favorito;
* Como usuário eu quero clicar em um livro na listagem e ver uma página com mais
informações do livro;
* _Como usuário eu gostaria que a palavra-chave pesquisada fosse destacada no
resultado da pesquisa. (Não atendido)_

## Arquitetura

O projeto foi desenvolvido utilizando a biblioteca [React](https://facebook.github.io/react/),
 por ser uma biblioteca que é consolidada no mercado e possuir bastante contribuidores.

 Foi utilizando o
[generator-fountain-webapp](https://github.com/FountainJS/generator-fountain-webapp)
do [FountainJS](http://fountainjs.io) para criar a sua estrutura inicial.

O [generator](https://github.com/FountainJS/generator-fountain-webapp) já
traz algumas outras bibliotecas configuradas no projeto como o [Webpack](https://webpack.js.org/)
para gerenciar os módulos utilizados no app, o [Babel](https://babeljs.io/)
para pode compilar os códigos em [ES6](http://es6-features.org) e o
[Gulp](http://gulpjs.com/), junto com o [NPM](https://www.npmjs.com/)
para gerenciar as execuções de tarefas.

Foi utilizado a biblioteca [react-redux](https://github.com/reactjs/react-redux)
para facilitar a comunicação do [React](https://facebook.github.io/react/)
com o [Redux](http://redux.js.org/), que é responsável por gerenciar os estados da aplicação,
como por exemplo, as ações executadas nos componentes do React.

Outra biblioteca utilizada para o controle dos dados na aplicação,
foi o [redux-saga](https://github.com/redux-saga/redux-saga), ela facilitou
as chamadas necessárias para recuperar os dados
([Middleware](http://redux.js.org/docs/advanced/Middleware.html))
da API do Google Book e também do
[localStorage](https://developer.mozilla.org/pt-BR/docs/Web/API/Window/Window.localStorage)
(onde os livros favoritos foram salvos) nos estados gerenciados pelo react-redux.

Outras dependências menores foram utilizadas como:
[classnames](https://github.com/JedWatson/classnames) para aplicar classes
nos componentes do React e [react-moment](https://github.com/headzoo/react-moment)
para tratar as datas que são recebidas da API do Google Books.

O [Material-UI](material-ui.com) é uma biblioteca de componentes visuais
desenvolvida em React e implementando as diretrizes do
[Google Material Design](https://material.io/guidelines/).

As customizaões visuais do app, foram escritos utilizando o pré-processador
[SASS](http://sass-lang.com/), pois torna os arquivos de estilos mais padronizados,
 fáceis de manter e desacoplados.

Nos testes unitários, foi utilizado a biblioteca do [Jasmine](https://jasmine.github.io/) para
escrever os testes do app e executados com o [Karma](https://karma-runner.github.io/1.0/index.html).

## Instruções para executar o projeto localmente

**Pré requisitos:**
* Possuir o [Git](https://git-scm.com/) instalado.
* Possuir o [NodeJS](https://nodejs.org/en/) instalado.

Clonar ou baixar o projeto do Github.
```
    git clone https://github.com/santosguilherme/google-books-integration.git
```
Após clonar ou baixar, acessar a pasta do projeto.

Instalar as dependências do projeto.
```
    npm install
```

Executar o comando para subir um servidor em [localhost:3000](http://localhost:3000/).
```
      npm run serve
  ```

Executar a tarefa para rodar os testes.
```
    npm run test
```

Executar a tarefa para gerar o build do projeto (gerado dentro da pasta **build**).
```
    npm run build
```
