const { DataTypes } = require('sequelize');

const User = (sequelize) => {
    return sequelize.define('homework', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false, //NOT NULL
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        done: {
            type: DataTypes.TINYINT(1),
            allowNull: false,
        }
        
    },
    {
        freezeTableName: true,
        createdAt: false,
        updatedAt: false,
    });
    
};

module.exports = User;