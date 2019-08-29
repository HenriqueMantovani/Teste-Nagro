import Sequelize, { Model } from 'sequelize';

class Imovel extends Model {
  static init(sequelize) {
    // sequelize recebe a variável do arquivo "index.js" que guarda a conexao BD

    // chamando o metodo init da class Model
    super.init(
      {
        address: Sequelize.STRING,
        price: Sequelize.FLOAT,
        area: Sequelize.FLOAT,
        rooms: Sequelize.INTEGER,
        bathrooms: Sequelize.INTEGER,
        description: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  /*  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
  }
  */
}

export default Imovel;
