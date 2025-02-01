## readme DOT-Test-VR 
 Este projeto utiliza Cypress para realizar testes de UI no modo interativo e também no modo headless

## Breve Descrição do Projeto 
 projeto automação de testes, feature: loja Virtual validar compra em carrinho

## Pre-requisitos
Este projeto requer cypress versão "14.0.1", chai: 5.0.3, Node.js v20.18.0 e npm na versão 10.8.2 ou superior.

##Instalação
npm install cypress --save-dev + Run npm install (or npm i for the short version) para instalar as dependências.

##Recomendação
Recomendo fazer um fork deste projeto, pois há exeções que foram necessárias no arquivo e2e.js (antigo index.js) devido a erros desconhecidos do app.

## Tests
 
 Você pode rodar os testes simulando desktop ou mobile seja no modo hadless (backend) ou interativo (browser). Os testes estão divididos em duas specs (positivos e negativos), foram aplicados tecnicas de caixa preta como análise de valor limite e particionamento por equivalência para os campos de valor e quantidade.

 ## Para Testes Desktop
 insira no terminal: 
 npm test: para testes em modo headless
 npx cypress open para testes em modo interativo

## Para Testes Mobile
insira no terminal: 
npm run test: mobile para testes em modo headless simulando mobile.
cypress open --config viewportWidth=410 viewportHeight=860 :para testes no modo interativo simulando mobile. 

Obrigado pela oportunidade!