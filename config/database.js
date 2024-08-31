const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('apinode', 'postgres', 'vinimendes', {
    host: 'localhost',
    dialect: 'postgres',
    define: {
        timestamps: true,
        underscored: true,
    },
});

module.exports = sequelize;
