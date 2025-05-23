# Lab Product Management
Este é um projeto Angular para gerenciamento de produtos com suporte a listagem, cadastro, edição e exclusão. O estado da aplicação é gerenciado com NgRx Store , e os dados são mockados usando JSON Server .

## Tecnologias Utilizadas
1. Angular <br>
2. NgRx (Store, Effects, Entity) <br>
3. JSON Server - Para simular uma API REST<br>
4. Concurrently - Rodar múltiplos scripts em paralelo <br>
5. [Husky + Lint-Staged + Commitlint + Prettier + ESLint + Stylelint] - Ferramentas de qualidade de código e padronização

## Começando
### 1. Instalar dependências
npm install

### 2. Iniciar a aplicação e a API mockada
npm run start:all

- A aplicação roda em http://localhost:4200
- A API mockada roda em http://localhost:3000

## Qualidade de Código
O projeto utiliza as seguintes ferramentas para garantir boas práticas:

1. ESLint : Valida regras de estilo e padrões TypeScript<br>
2. Stylelint : Garante consistência em arquivos SCSS<br>
3. Prettier : Formata automaticamente o código<br>
4. Husky + Lint-Staged : Aplica validações antes de commits<br>
5. Commitlint : Garante mensagens de commit no padrão Angular

## Funcionalidades Implementadas
- CRUD de Produtos;<br>
- Gerenciamento de Estado com NgRx (Store + Effects);<br>
- Mock de API com JSON Server;<br>
- Rotas Lazy Load (se aplicável);<br>
- Estilização modular com SCSS avançado

## Lint & Format
Validar e formatar código:<br>
npm run lint

## Requisitos
Node.js >= 18.x<br>
npm >= 9.x
