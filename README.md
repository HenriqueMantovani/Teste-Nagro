# Teste-Nagro
Repositório do teste da Nagro que consiste em uma API implementada em Node

# Descrição

A Api recebe cadastros de Usuários e Imóveis. E os Imóveis se relacionam com um ou mais usuários por meio do cadastro de Propostas.
Na tabela Proposta, tera os campos de telefone e descrição da proposta do usuário, além do user_id e imovel_id relacionados.
É feito autenticação, apenas se o usuário estiver logado

**Ferramentas**:

- A criação do servidor foi pelo Express
- O banco utilizado foi Postgres através de um container do Docker
- O Sequelize foi utilizado como ORM, para facilitar a criação, população e migração de banco de dados
- Utilizado o bcrypt.js para gerar hash da senha
- Utilizado o jsonwebtoken para gerar token JWT
