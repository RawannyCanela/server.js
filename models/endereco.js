const { Model, Datatypes } = require('sequelize');

class Endereco extends Model {}

Endereco.init({
    Id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    Cep: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Logradouro: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Numero: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Complemento: {
        type: DataTypes.STRING,
    },
    Bairro: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Cidade: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Estado: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    MunicipioIBGE: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    sequelize,
    modelName: 'Endereco',
    tableName: 'enderecos', //Define o nome da tabela no bd
    timestamps: true, //Define se quer ou não os campos createAt e updateAt
});

module.exports = Endereco;