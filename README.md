## [CSC-03] Monitoring Smart Greenhouse
> Projeto simulado de Internet das Coisas - estufa inteligente

### Estrutura de pastas e arquivos
O projeto, ainda que completamente emulado, seguiu a proposta de estruturação inicial - cada módulo é representado por uma pasta.
```bash
|-- dashboard
|   |-- public
|   |   |-- ...
|   |   |-- index.html
|   |-- src
|   |   |-- components
|   |   |-- pages
|   |   |-- ...
|   |   |-- App.js
|   |   |-- index.js
|   |   |-- package.json
|-- database
|   |-- data_greenhouse.json
|-- hardware
|   |-- measure.py
|-- server
|   |-- package.json
```

### Execução do projeto
Após clonar o repositório em sua máquina, siga os passos descritos abaixo.
** é necessário ter python, Node, npm e yarn instalados previamente.
```
## na pasta 'dashboard', instalar os pacotes presentes no package.json
$ cd dashboard
$ npm install
$ cd ..
## na pasta 'server', instalar o pacote 'json-server' presente no package.json
$ cd server
$ npm install
$ cd ..
## instalar o pacote requests para comunicação http python com o servidor
$ python3 -m pip install requests
```

Depois da configuração inicial, é possível executar o projeto a partir das etapas a seguir.

Inicialmente, é necessário manter o servidor rodando em background. Para isso, executá-lo dentro da pasta `./server`.
```
$ cd server
$ yarn start
```

Para o módulo correspondente ao nó sensor juntamente ao gateway, basta executar `./hardware/measure.py`. Também é necessário manter o arquivo rodando em background para que sejam gerados e salvos os dados fictícios de medição.
```
$ cd hardware
$ python3 measure.py
```
Para executar o front-end React - dashboard - na pasta `./dashboard`.
```
$ cd dashboard
$ yarn start
```