
# 📖 README - Main MS

Este é o serviço bff integrado ao **Main ms** para fornecer a funcionalidade desejada.

## 🔧 Passos para instalação e execução no Docker

### 1. Clonar o repositório
Primeiro, clone o repositório do serviço.

```bash
git clone https://github.com/devcapixaba/bff-service.git
cd bff-service
```

### 2. Instalar dependências
Instale as dependências do projeto.

```bash
npm install
```

### 3. Criar uma rede compartilhada
Crie uma rede Docker para que os serviços se comuniquem (caso não exista a rede já criada junto ao main-ms).

```bash
docker network create shared-network
```

### 4. Build do Docker
Crie a imagem do Docker para o serviço.

```bash
docker-compose up --build
```

### 5. Subir o serviço no Docker
Execute o serviço no Docker, conectando-o à rede compartilhada.

```bash
docker network connect shared-network bff-service-app-1
```

### 6. Acessar o serviço principal
O serviço principal estará acessível em:  
[http://localhost:3001](http://localhost:3001)

### 7. Acessar o playground graph ql para executar as requisições:
O serviço principal estará acessível em:  
[http://localhost:3001/api/graphql](http://localhost:3000/api/graphql)

### 8. Executar a criação de um usuário:

```bash
mutation {
  createUser(data: { name: "diego", email: "diego@email.com", password: "password123" }) {
    id
    name
    email
  }
}

```

### 8. Executar a procura de um usuário pelo id:

```bash
query {
  user(id: "22c25597-f0c2-4114-88bf-df6a613f6fd8") {
    id
    name
    email
  }
}

```