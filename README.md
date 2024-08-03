# Petshop Finder

![image](https://github.com/user-attachments/assets/7af95409-45b5-4a15-ad57-21e3a821998c)

Petshop Finder é uma aplicação web desenvolvida para ajudar o Sr. Eduardo a encontrar o melhor petshop em Belo Horizonte para realizar o banho de seus cães. A aplicação considera o preço do banho e a distância do petshop em relação ao canil para recomendar a melhor opção.

## Tecnologias Utilizadas

- **Frontend:** React
- **Backend:** Node.js com Express
- **Comunicação:** Axios

## Instruções para Executar o Sistema

### Pré-requisitos

- Node.js instalado 

### Clonando o Repositório

```sh
git clone https://github.com/ArthurFreitasJardim/PetShop-Finder.git
cd PetShop-Finder

###Instalando Dependências

### Backend

cd backend
npm install

###Frontend
cd ../frontend
npm install

###Executando o Backend

cd ../backend
npm run dev
O backend será executado em http://localhost:5000.

###Executando o Frontend

Abra um novo terminal e execute:

cd PetShop-Finder
cd frontend
npm run dev

O frontend será executado em http://localhost:3000.

###Executando testes

Abra um novo terminal e execute:

cd PetShop-Finder
cd backend
npm test
```
## Lista de premissas:

- Os preços dos banhos são consistentes para cada petshop e não variam além das condições específicas de dias da semana (finais de semana versus dias úteis).

- Para o petshop "Meu Canino Feliz", o preço durante os finais de semana é aumentado em 20%. Para outros petshops, os preços não mudam entre dias úteis e finais de semana (exceto onde explicitamente indicado).

- A distância dos petshops ao canil é fixa e não varia. A distância é usada para resolver empates no custo total.

- A interface do usuário é projetada para ser simples e direta, com apenas os campos necessários para a entrada de dados e visualização do resultado.

## Decisões de Projeto

- Backend para lógica: A lógica de cálculo e seleção do petshop é feita no backend.

- Tecnologias: React no frontend, Node.js com Express no backend e Axios na comunicação.

- Estilização: CSS básico, com possibilidade de melhorias futuras.

- Critério de desempate: Menor distância em caso de empate de preços.

- Logs de depuração: Logs no backend para facilitar a resolução de problemas.

- Componentes reutilizáveis: Uso de componentes reutilizáveis em React para fácil manutenção e expansão.

- Comando para testes.

## 
```sh
PetShop-Finder/
├── backend/              # Código do servidor e lógica de negócios
│   ├── node_modules/     # Dependências do Node.js
│   ├── src/              # Código-fonte do backend
│   ├── tests/            # Testes do backend
│   ├── .babelrc          # Configurações do Babel
│   ├── .gitignore        # Arquivos e pastas ignoradas pelo Git
│   ├── jest.config.js    # Configurações do Jest
│   ├── package-lock.json # Arquivo de bloqueio de versão do npm
│   ├── package.json      # Configurações do projeto e dependências do npm
│   └── server.js         # Arquivo principal do servidor
├── frontend/             # Código do cliente e interface do usuário
│   ├── node_modules/     # Dependências do Node.js
│   ├── public/           # Arquivos públicos (HTML, imagens, etc.)
│   ├── src/              # Código-fonte do frontend
│   ├── .gitignore        # Arquivos e pastas ignoradas pelo Git
│   ├── package-lock.json # Arquivo de bloqueio de versão do npm
│   └── package.json      # Configurações do projeto e dependências do npm
└── README.md             # Documentação do projeto
```
