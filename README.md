# 01-dwbe-node-basico

# Fundamentos de Desenvolvimento Back-End com Node

## Objetivo

Compreender os conceitos iniciais do desenvolvimento back-end com Node: criar o primeiro projeto.

---

## Node

O Node.js é um ambiente de execução JavaScript gratuito e de código aberto que funciona em Windows, Mac, Linux e outros sistemas operacionais.

Ele permite executar código JavaScript fora de um navegador Web, possibilitando o desenvolvimento do lado do servidor.

Construído sobre o mecanismo JavaScript V8 do Chrome, o Node.js foi projetado para criar aplicativos de rede escaláveis com eficiência.

O Node.js gerencia muitas conexões simultâneas com sobrecarga mínima, sendo indicado para:

- Aplicações em tempo real (chats, jogos, ferramentas de colaboração).
- APIs e microsserviços.
- Aplicações de streaming de dados.
- Ferramentas de linha de comando.
- Aplicações Web no lado do servidor.

Sua arquitetura não bloqueante e orientada a eventos a torna eficiente para cargas de trabalho com grande volume de entrada/saída.

---

## NPM (Node Package Manager)

O NPM (Node Package Manager) é, simultaneamente:

1. Um registro online (repositório) público em que desenvolvedores do mundo inteiro compartilham bibliotecas de código aberto: https://www.npmjs.com/. Exemplo:
https://www.npmjs.com/package/express

2. Uma ferramenta de linha de comando que instalamos junto com o Node.js para gerenciar essas bibliotecas (instalar, atualizar, remover) em nossos computadores.

Quando iniciamos um projeto back-end, precisamos preparar o ambiente para que o Node e o NPM saibam como gerenciar o ciclo de vida da aplicação.

---

## Configuração do Ambiente

Requisitos:
- Instalar o Node.js: https://nodejs.org/

- No Linux, e no GitHub Codespaces:
   
```bash
sudo apt install nodejs npm
```

Verificando a instalação:
   
```bash
node -v
```

```bash
npm -v
```

---
## Criar um Projeto Usando o Node

Executar o comando:

```bash
npm init
```

- Informar o nome do projeto, ou apenas pressionar a tecla <ENTER>: meu-app

- Informar a versão, ou apenas pressionar a tecla <ENTER>: <ENTER>

- Informar uma descrição para o projeto: meu aplicativo back-end

- Informar o arquivo principal (inicial) da aplicação (entry point), ou apenas pressionar a tecla <ENTER>: <ENTER>

- Informar um comando de teste, ou apenas pressionar a tecla <ENTER>: <ENTER>

- Informar o repositório do projeto no GitHub, ou apenas pressionar a tecla <ENTER>: <ENTER>

- Informar as palavras-chave do projeto, ou apenas pressionar a tecla <ENTER>: Web Back-end

- Informar o nome do autor do projeto, ou apenas pressionar a tecla <ENTER>: <informar seu nome>

- Informar a licença do projeto, ou apenas pressionar a tecla <ENTER>: <ENTER>

- Informar o tipo do projeto: module

Analisar o JSON gerado. Se estiver correto, informar: <ENTER>, yes, ou y. Se estiver errado, pressionar qualquer outra tecla.

```javascript
{
   "name": "meu-app",
   "version": "1.0.0",
   "description": "meu aplicativo back-end",
   "main": "index.js",
   "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1"
   },
   "repository": {
      "type": "git",
      "url": "git+https://github.com/wdiasmaciel/01-node.git"
   },
   "keywords": [
      "Web",
      "Back-end"
   ],
   "author": "Wesley",
   "license": "ISC",
   "type": "module",
   "bugs": {
      "url": "https://github.com/wdiasmaciel/01-node/issues"
   },
   "homepage": "https://github.com/wdiasmaciel/01-node#readme"
}
```

--- 

## package.json

Analisar o arquivo package.json, gerado após a execução do comando npm init.

## Valores Default

Executar o comando npm init com a flag (tag) yes (-y), para iniciar o arquivo package.json com valores default (sem precisar informar as respostas para as perguntas de criação do projeto):

```bash
npm init -y
```
   
```javascript
{
    "name": "01-dwbe-node-basico",
    "version": "1.0.0",
    "description": "",
    "main": "index.js",
    "scripts": {
       "test": "echo \"Error: no test specified\" && exit 1"
    },
    "repository": {
      "type": "git",
      "url": "git+https://github.com/wdiasmaciel/01-node.git"
    },
    "keywords": [],
    "author": "",
    "license": "ISC",
    "type": "commonjs",
    "bugs": {
      "url": "https://github.com/wdiasmaciel/01-node/issues"
    },
    "homepage": "https://github.com/wdiasmaciel/01-node#readme"
}
```

---

## Estrutura

No VS Code, analisar o arquivo e a estrutura de diretório criada.

---

## Diretório node_modules

`node_modules`: diretório (pasta) em que o Node baixa as dependências (comum em qualquer projeto criado com Node, npm). O nome desse diretório deve estar no arquivo .gitignore, pois seu conteúdo é extenso e facilmente recuperado quando se tem os arquivos:

- `package-lock.json`
- `package.json`

---

## Arquivo package-lock.json

`package-lock.json`: este é um arquivo gerado e gerenciado automaticamente pelo npm sempre que você instala, atualiza ou remove um pacote. Ele congela o estado exato da sua pasta node_modules. Suas funções incluem:

- Versões Fixas: registra a versão, o endereço de download e o hash de autenticação (integridade) de cada pacote instalado.

- Prevenção de Erros de Ambiente: garante que, quando outro desenvolvedor baixar seu projeto (ou você fizer o deploy em um servidor), o sistema instale as mesmas versões que você usou no seu computador, eliminando o problema de "funciona na minha máquina".

- Otimização de Instalação: acelera processos de instalação criando uma estrutura determinística de dependências e subdependências.

**OBS**: esse arquivo precisa ser versionado.

---

## Arquivo package.json

`package.json`: este é o arquivo de configuração principal e manifesto do seu projeto Node. Ele é editado conforme o projeto cresce e suas principais funções incluem:

- Metadados: define informações como o nome do projeto, versão e tipo (type).

- Scripts de Atalho: armazena comandos personalizados executáveis via terminal usando npm run.

- Dependências: lista todos os pacotes externos que o projeto precisa para rodar. Exemplo: express.

- Gerenciamento de Versões Flexíveis: controla o intervalo de versões que o projeto aceita usando regras como o acento circunflexo (^), permitindo atualizações automáticas menores para corrigir bugs sem quebrar o código.

**OBS**:

O package.json funciona como o "mapa" ou identidade do projeto, enquanto o package-lock.json é o "contrato de construção" que trava as versões exatas das dependências e subdependências. Eles trabalham juntos para garantir que o projeto funcione de forma idêntica em qualquer computador.

---

## .gitignore

Criar o arquivo `.gitignore` em seu projeto. Esse arquivo lista os arquivos e diretórios que devem ser ignorados pelo Git, arquivos que não devem ser “versionados”. No caso, deve conter o diretório `node_modules/`.

---

## README.md

`README.md`: arquivo que descreve o projeto. Funciona como um "cartão de visitas" ou manual de instruções do projeto. 

Em repositórios, como o GitHub, é a primeira página que os visitantes, colaboradores ou recrutadores leem para entender o que é o seu software e como utilizá-lo.

--- 

## Olá, Mundo!

Criar o arquivo `exemplo1.js` com o conteúdo abaixo:

```javascript
console.log("Olá, Mundo!");
```

Na seção de `script` do arquivo `package.json`, criar a entrada abaixo:

```javascript
"exe1": "node exemplo1.js" 
```

Exemplo:

```javascript
"scripts": {
   "test": "echo \"Error: no test specified\" && exit 1",
   "exe1": "node exemplo1.js" 
}
```

No terminal, executar:

```bash
npm run exe1
```

Incluir as automações dos demais exemplos na seção de `script` do arquivo `package.json`. Exemplo:

```javascript
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "exe01": "node 01-estrutura-sequencial.js",
    "exe01": "node 02-estrutura-sequencial.js",
    "exe01": "node 03-estrutura-sequencial.js",
    "exe02": "node 02-estrutura-sequencial.js",
    "exe03": "node 03-estrutura-condicional.js",
    "exe04": "node 04-estrutura-condicional.js",
    "exe05": "node 05-estrutura-de-repeticao.js",
    "exe06": "node 06-estrutura-de-repeticao.js",
    "exe07": "node 07-estrutura-de-repeticao.js",
    "exe08": "node 08-vetor.js",
    "exe09": "node 09-objeto.js",
    "exe10": "node 10-funcao.js"
  }
```

--- 

# GitHub

Execute o comando abaixo:

```bash
git add . && git commit -m "Exemplo" && git push
```

---

# Exercício

Resolva os exercícios a seguir criando um arquivo JavaScript para cada um. Sempre que possível, crie também um script no `package.json` para executar o exercício com `npm run`. Não é necessário instalar bibliotecas externas.

## Exercício 1: Boletim do aluno

Crie o arquivo `exercicio1.js` para calcular a média de três notas de um aluno.

Requisitos:

- Declare o nome do aluno e três notas usando variáveis.
- Calcule e mostre a média com duas casas decimais.
- Informe `Aprovado` quando a média for maior ou igual a 7; caso contrário, informe `Reprovado`.
- Teste o programa com pelo menos dois conjuntos diferentes de notas.

Exemplo de saída:

```text
Aluno: Ana
Média: 8.33
Situação: Aprovado
```

## Exercício 2: Tabuada e somatório

Crie o arquivo `exercicio2.js` para exibir a tabuada de um número inteiro de 1 a 10.

Requisitos:

- Armazene o número da tabuada em uma variável.
- Use um laço `for` para mostrar as dez multiplicações.
- Ao final, mostre a soma dos dez resultados da tabuada.

Exemplo para o número 5:

```text
5 x 1 = 5
...
5 x 10 = 50
Soma dos resultados: 275
```

## Exercício 3: Análise de uma lista

Crie o arquivo `exercicio3.js` com um vetor contendo pelo menos seis números inteiros.

Requisitos:

- Percorra o vetor usando um laço.
- Mostre o maior valor, o menor valor e a soma dos elementos.
- Calcule e mostre a média dos valores.
- Conte quantos números são pares e quantos são ímpares.

Exemplo de resultado:

```text
Maior: 18
Menor: 3
Soma: 57
Média: 9.50
Pares: 3
Ímpares: 3
```

## Exercício 4: Cadastro de produtos

Crie o arquivo `exercicio4.js` com um vetor de objetos. Cada objeto deve representar um produto e conter `nome`, `preco` e `estoque`.

Requisitos:

- Criar o vetor com pelo menos quatro produtos.
- Use um laço para mostrar o nome e o preço de cada produto.
- Calcule o valor total do estoque de cada produto (`preco * estoque`).
- Mostre qual produto possui o maior valor total em estoque.
- Mostre apenas os produtos cujo estoque seja maior que zero.

Exemplo de saída:

```text
Produto: Teclado | Preço: R$ 80.00 | Valor em estoque: R$ 240.00
Produto com maior valor em estoque: Monitor
```

