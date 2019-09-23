module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('proposes', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: { model: 'users', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: true,
      },
      phone: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      propose_description: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      imovel_id: {
        type: Sequelize.INTEGER,
        references: { model: 'imovels', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: true,
      },
      created_at: {
        type: Sequelize.DATE, // Armazena a data de criação
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE, // Armazena a data de edição
        allowNull: false,
      },
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable('proposes');
  },
};
