import Sequelize, { Model } from 'sequelize';

class Propose extends Model {
  static init(sequelize) {
    // sequelize recebe a variável do arquivo "index.js" que guarda a conexao BD

    // chamando o metodo init da class Model
    super.init(
      {
        phone: Sequelize.STRING,
        date: Sequelize.DATE,
        propose_description: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
    // this.belongsTo(models.User, { field: 'user_name', as: 'userName' });
    this.belongsTo(models.Imovel, { foreignKey: 'imovel_id', as: 'imovel' });
  }
}

export default Propose;
