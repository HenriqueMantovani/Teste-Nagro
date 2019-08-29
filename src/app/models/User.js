import Sequelize, { Model } from 'sequelize';
import bcrypt from 'bcryptjs';

class User extends Model {
  static init(sequelize) {
    // sequelize recebe a variável do arquivo "index.js" que guarda a conexao BD

    // chamando o metodo init da class Model
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        password: Sequelize.VIRTUAL, // Nunca aparece no banco de dados
        password_hash: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    // Antes de qualquer User ser criado, sera exec esse codigo de trecho 1º
    this.addHook('beforeSave', async user => {
      if (user.password) {
        user.password_hash = await bcrypt.hash(user.password, 8); // Criptografia
      }
    });

    return this;
  }

  // Compara se a senha que ele esta tentando logar bate com a do BD
  checkPassword(password) {
    return bcrypt.compare(password, this.password_hash);
  }
}

export default User;
