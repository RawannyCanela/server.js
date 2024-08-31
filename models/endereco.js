const{ Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database')

class Endereco extends Model {}

Endereco.init({
    Id:{
        type:DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: 'Id',
    },
    Cep: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'Cep',
    },
    Logradouro: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'Logradouro',

    },
    Numero: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'Numero',
    },
    Complemento: {
        type: DataTypes.STRING,
        field: 'Complemento',
    },
    Bairro: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'Bairro',
    },
    Cidade: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'Cidade',
    },
    Estado: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'Estado',
    },
    MunicipioIBGE: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'MunicipioIBGE',
    },
}, {
    sequelize,
    modelName: 'Endereco',
    tableName: 'endereços',
    timestamps: false,
});

module.exports = { Endereco };