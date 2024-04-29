# LABMedical

Este projeto é uma aplicação desenvolvida para atender à demanda da empresa Medicine365 Inc, cuja função é realizar a gestão de inventário médico.
Desenvolvido utilizando o que há de mais moderno no mercado de desenvolvimento Front-End, o software web foi desenvolvido utilizando o Framework Angular 17 [Angular CLI](https://github.com/angular/angular-cli) version 17.2.3.

## Instalação de dependências
1. BANCO DE DADOS
    Nesta aplicação foi utilizado um modelo híbrido. onde a parte de login utiliza o LocalStorage do navegador como banco de dados. Sendo responsável por armazenar os dados de cadastro de usuário e o SessionStorage é utilizado como um fake JWT (JSON Web Token) que faz a validação de login.

    Para as demais funcionalidades foi utilizado o JSON-SERVER, uma API que simula um banco de dados. sua instalação é necessária.
    Execute os comandos no terminal:
    Instalação - npm install json-server
    Rodar a API - json-server --watch db.json

2.  LAYOUT E FUNCIONALIDADES
    Para a parte de layout e funcionalidades foram utilizados ferramentas para auxilar no desenvolvimento, realize a instalação das dependências para que o projeto funcione perfeitamente

    *   Angular - npm install
    *   Bootstrap - npm i bootstrap@5.3.3
    *   Angular Material - ng add @angular/material

## Servidor de testes

Execute o comando `ng serve`, para acessar uma versão de testes no link `http://localhost:4200/`.

## Páginas.
    O software está dividido em 2 etapas. Na primeira Etapa é a área de cadastro e login de usuários, sendo essa etapa acessível por qualquer pessoa.
    A segunda Etapa é composta pela aplicação de fato. Sendo a porta de entradas um Dashboard que apresenta brevemente as funcionalidades do sistema.
    contanto com um menu lateral e uma pequena barra de ferramentas do usuário. Ao centro do Dashboard há uma listagem dos pacientes cadastrados e um breve resumo da quantidade de pacientes, consultas e exames cadastrados na plataforma.
    Nos cards de usuário é possivel clicar no boitão "VER MAIS", o usuário verá as informações do paciente: Dados cadastrais (consultas e exames estão em desenvolvimento).

    Na página de prontuários o usuário pode pesquisar pelo paciente através da barra de pesquisa ou rolar a página através da lista de usuários, podendo ainda definir a quantidade de pacientes por página.
    O botão "+ CADASTRAR" é um atalho para adicionar um novo paciente.
    Nesta Lista há 3 botões de ação para cada paciente: visualizar, editar e deletar.
    - Visualizar: possui a mesma função do botão "VER MAIS" dos cards da tela inicial: Dados cadastrais (consultas e exames estão em desenvolvimento).
    - Editar: possui a função para editar os dados cadastrais do paciente (Editar consultas e exames estão em desenvolvimento).
    - Deletar: possui a função de deletar o paciente da plataforma (Use com Atenção!)

    Ainda na barra de ferramentas, existem 3 botões de ação que levam à páginas de cadastro (Novo Paciente, Nova Consulta e novo Exame), além de um botão de logout.
