module.exports = {
  dialect: 'postgres',
  host: '192.168.99.109',
  username: 'postgres',
  password: 'docker',
  database: 'apinagro',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
