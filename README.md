# Compasso App

Teste de recrutamento

Desenvolvido com [Sails.js](https://sailsjs.com) e [MongoDB](https://www.mongodb.com/).

## Execução

É possível executar o aplicativo usando Docker. Para construir e executar:

`docker-compose up`

A aplicação utiliza a porta 1337.

## Rotas

- POST /api/v1/city': Insere nova cidade
- GET /api/v1/city/:id': Busca cidade por ID
- GET /api/v1/cities': Busca todas as cidades
- PUT /api/v1/city/:id': Altera uma cidade
- DELETE /api/v1/city/:id': Deleta uma cidade

* POST /api/v1/client': Insere novo cliente
* GET /api/v1/client/:id': Busca cliente por ID
* GET /api/v1/clients': Busca todos os clientes
* PUT /api/v1/client/:id': Altera um cliente
* DELETE /api/v1/client/:id': Deleta um cliente

## Entidades

### Cliente

- id (ObjectId): Identificador virtual
- city (ObjectId): Referência ao ID da cidade
- age (String): Idade do cliente
- birthDate (Date): Data de Nascimento
- gender (String): Gênero/Sexo do cliente (male/female)
- fullName (String): Nome completo do cliente
- updatedAt (Datetime): Data e hora da última alteração
- createdAt (Datetime): Data e hora de criação

**Exemplo:**

```json
{
  "__v": 0,
  "updatedAt": "2020-01-31T04:12:18.953Z",
  "createdAt": "2020-01-31T04:12:18.953Z",
  "fullName": "Huberto Kaiser Filho",
  "gender": "male",
  "birthDate": "1991-03-04T00:00:00.000Z",
  "age": 28,
  "city": "5e33a16a12fa0c0d9b1d2baf",
  "_id": "5e33a922e148e90012bcd17a",
  "id": "5e33a922e148e90012bcd17a"
}
```

### Cidade

- id (ObjectId): Identificador
- name (String): Nome da cidade
- state (String): Nome do estado
- updatedAt (Datetime): Data e hora da última alteração
- createdAt (Datetime): Data e hora de criação

**Exemplo:**

```json
{
  "__v": 0,
  "updatedAt": "2020-01-31T04:17:44.937Z",
  "createdAt": "2020-01-31T04:17:44.937Z",
  "name": "Porto Alegre",
  "state": "Rio Grande do Sul",
  "_id": "5e33aa68dcdc71001238adaf",
  "id": "5e33aa68dcdc71001238adaf"
}
```

## Requisitos da entrega

### Cadastrar cidade

**Método:** POST
**Rota:** /api/v1/city
**Body:**

```json
{
  "name": "Porto Alegre",
  "state": "Rio Grande do Sul"
}
```

### Cadastrar cliente

**Método:** POST
**Rota:** /api/v1/client
**Body:**

```json
{
  "fullName": "Huberto Kaiser Filho",
  "gender": "male",
  "birthDate": "03/04/1991",
  "age": "28",
  "city": "5e33a16a12fa0c0d9b1d2baf"
}
```

### Consultar cidade pelo nome

**Método:** GET
**Rota:** /api/v1/cities?name=Pelotas

### Consultar cidade pelo estado

**Método:** GET
**Rota:** /api/v1/cities?state=Rio%20Grande%20do%20Sul

### Consultar cliente pelo nome

**Método:** GET
**Rota:** /api/v1/clients?name=Huberto%20Kaiser%20Filho

### Consultar cliente pelo ID

**Método:** GET
**Rota:** /api/v1/client/5e33a922e148e90012bcd17a

### Consultar cliente pelo ID

**Método:** DELETE
**Rota:** /api/v1/client/5e33a922e148e90012bcd17a

### Alterar o nome do cliente

**Método:** PUT
**Rota:** /api/v1/client/5e33a922e148e90012bcd17a
**Body:**

```json
{
  "fullName": "Huberto Kaiser Filho"
}
```
