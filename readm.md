# Death Stranding Landing Page

Este projeto é uma landing page dedicada ao jogo Death Stranding, apresentando informações sobre o jogo, trailers, imagens e outros conteúdos relevantes.

## Funcionalidades

* Apresentação do jogo Death Stranding.
* Exibição de trailers e imagens do jogo.
* Informações sobre os dispositivos compatíveis com o jogo.
* Seção de perguntas frequentes (FAQ).
* Design responsivo para diferentes dispositivos.

## Tecnologias Utilizadas

* HTML5
* SCSS
* JavaScript
* Gulp
* Sass

## Instalação

1.  Certifique-se de ter o Node.js e o npm instalados.
2.  Clone o repositório:

    ```bash
    git clone https://github.com/rafaelscdev/projetoDeathStranding
    ```

3.  Navegue até o diretório do projeto:

    ```bash
    cd projetoDeathStranding
    ```

4.  Instale as dependências do projeto:

    ```bash
    npm install
    ```

## Scripts

* `npm run dev`: Inicia o servidor de desenvolvimento com `gulp watch`, que observa as alterações nos arquivos SCSS e JavaScript e recarrega o navegador.
* `npm run build`: Compila os arquivos SCSS e JavaScript para produção utilizando `gulp`.

## Dependências

* Gulp: Automatizador de tarefas.
* gulp-sass: Compilador SCSS para CSS.
* sass: Compilador Sass.
* gulp-imagemin: Otimizador de imagens.
* gulp-uglify: Minificador de arquivos JavaScript.

## Como Executar o Projeto

1.  Clone o repositório.
2.  Navegue até o diretório do projeto.
3.  Instale as dependências do projeto (consulte a seção "Instalação").
4.  Inicie o servidor de desenvolvimento:

    ```bash
    npm run dev
    ```

5.  Abra o arquivo `index.html` no seu navegador (geralmente em `http://localhost:3000`).

## Como Construir para Produção

1.  Execute o seguinte comando para construir os arquivos para produção:

    ```bash
    npm run build
    ```

2.  Os arquivos compilados estarão na pasta `dist/`.

## Estrutura de Pastas

* `dist/`: Contém os arquivos CSS, JavaScript e imagens compilados.
* `src/`: Contém os arquivos SCSS e JavaScript originais.
* `assets/`: Contém arquivos de fontes e outros recursos.
* `images/`: Contém as imagens utilizadas no projeto.

## Personalização

Para personalizar o projeto, você pode modificar os arquivos SCSS em `src/scss/` e os arquivos JavaScript em `src/scripts/`. Após fazer as alterações, você precisará compilar os arquivos usando o Gulp.

## Contribuição

Contribuições são bem-vindas! Se você encontrar algum problema ou tiver sugestões de melhorias, sinta-se à vontade para abrir uma issue ou enviar um pull request.

## Licença

Este projeto está sob a licença [ISC](LICENSE).

## Autor

* [rafaelscorreadev](https://github.com/rafaelscdev)