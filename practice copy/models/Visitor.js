const {DataTypes} = require("sequelize");

const Visitor = function (sequelize, Data) {
    const model = sequelize.define(
        "visitor",
        {
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
            },
            name: {
                type: DataTypes.STRING(10),
                allowNull: false,
            },
            comment: {
                type: DataTypes.TEXT("medium"),
            }
        }
    )
    return model;
};

module.exports = Visitor;