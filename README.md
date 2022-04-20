# Boas vindas ao repositório Desafio Sanp

Projeto feito durante processo seletivo para o cargo de desenvolvedor back-end jr para a Sanp

# [](https://github.com/leoncomunicador/desafio-sanp)Sumário

-   [Comentários sobre o desafio](https://github.com/leoncomunicador/desafio-sanp#coment%C3%A1rios-sobre-o-desafio)
-   [Construção do desafio](https://github.com/leoncomunicador/desafio-sanp#constru%C3%A7%C3%A3o-do-desafio)
-   [Tecnologias envolvidas](https://github.com/leoncomunicador/desafio-sanp#tecnologias-envolvidas)
-   [Requisitos do desafio](https://github.com/leoncomunicador/desafio-sanp#requisitos-do-desafio)
-   [Requisitos desenvolvidos](https://github.com/leoncomunicador/desafio-sanp#requisitos-desenvolvidos)
-   [Referências](https://github.com/leoncomunicador/desafio-sanp#refer%C3%AAncias)
-   [Instalação e uso](https://github.com/leoncomunicador/desafio-sanp#instala%C3%A7%C3%A3o-e-uso)

----------

# [](https://github.com/leoncomunicador/desafio-sanp)Comentários sobre o desafio

Projeto muito bom para praticar o CRUD utilizando o JWT para fazer validações de usuários cadastrados.

----------

# [](https://github.com/leoncomunicador/desafio-sanp)Construção do desafio

Inicialmente optei por criar um CRUD, utilizando a arquitetura MSC e acrescentando o JWT para fazer validações.

No arquivo index.js, foi colocado todo o esqueleto necessário para rodar a aplicação, e optei por utilizar middlewares para tratar casos de erro.


----------

# [](https://github.com/leoncomunicador/desafio-sanp#tecnologias-envolvidas)Tecnologias envolvidas:

[Express](https://expressjs.com/pt-br/): Utilizado para criação da rota POST

[JWT](https://jwt.io): Utilizado para validar login e senha

----------

# [](https://github.com/leoncomunicador/desafio-sanp#requisitos-do-desafio)Requisitos do desafio:

-   API com um To Do feito em Node.JS e validações com o JWT para verificar se o usuário é cadastrado ou não.
    
 

----------

# [](https://github.com/leoncomunicador/desafio-lemon-energia#requisitos-desenvolvidos)Requisitos desenvolvidos:

1.  Criação da API
2.  Validação do usuário para cadastrar, atualizar ou excluir tarefas.


----------


# [](https://github.com/leoncomunicador/desafio-lemon-energia#refer%C3%AAncias)Referências

Totalmente baseado no desafio com o link:  [https://lemonenergy.notion.site/Teste-Backend-Lemon-9958a9678c0d4ac99185850fdb9716fc](https://lemonenergy.notion.site/Teste-Backend-Lemon-9958a9678c0d4ac99185850fdb9716fc)

----------

# [](https://github.com/leoncomunicador/desafio-lemon-energia#instala%C3%A7%C3%A3o-e-uso)Instalação e uso

Para executar o projeto sua máquina deve satisfazer os requisitos abaixo.

Pré-requisitos

-   node v17.5.0
-   npm 8.6.0
-   git version 2.25.1

[Download node js](https://nodejs.org/en/)

[Download git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

### [](https://github.com/leoncomunicador/desafio-lemon-energia#clonando-o-projeto)Clonando o projeto

Abra o terminal de sua máquina

> Caso queira use um dos atalhos abaixo de acordo com o seu sistema operacional
> 
> -   _Linux_: Ctrl+Alt+T
> -   _MacOS_: COMMAND + ESPAÇO
> -   _Windows_: Tecla do Windows + R

e digite o comando abaixo para clonar o projeto.

`git clone git@github.com:leoncomunicador/desafio-sanp.git`
Ainda Entre na pasta

cd desafio-sanp

### [](https://github.com/leoncomunicador/desafio-lemon-energia#instalando-as-depend%C3%AAncias)Instalando as dependências

npm install

### [](https://github.com/leoncomunicador/desafio-lemon-energia#executando-o-projeto)Executando o projeto

npm run dev

----------

### [](https://github.com/leoncomunicador/desafio-lemon-energia#executando-o-projeto-1)Executando o projeto

A api permite uso das rotas GET, POST, PUT e DELETE  na rota /tasks.

Para cadastrar um novo usuário com email e password é utilizado a rota /users e o método POST.

Para pegar o token e utilizar na rota /tasks, deve ser acessado a rota /login preenchendo no JSON os campos email e password, com seus respectivos emails e senhas corretas.

