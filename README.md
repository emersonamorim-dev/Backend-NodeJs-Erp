# Backend-NodeJs-Erp

Codificação de Backend em NodeJs com uso de framework Express para facilitar a implementação dos principais Endpoints para consulta e requisição via Postman


Requisições via Postman:

GET consultar todos os produtos
http://localhost:3000/products

GET consultar um produto pelo ID
http://localhost:3000/products/1

POST para adicionar um novo produto
http://localhost:3000/products/

PUT para atualizar um produto pelo ID
http://localhost:3000/products/1

DELETE para deletar um produto pelo ID
http://localhost:3000/products/1


#Aplicação está conteirnerizada com Dockerfile e Docker-compose.yml

Segue os comandos para rodar aplicação:

#Suba a a imagem do Docker:
docker build -t backend-node-erp .
e

#Execute o contêiner do Docker:
docker run -p 3000:3000 backend-node-erp
