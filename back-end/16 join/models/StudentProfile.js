const {DataTypes} = require("sequelize");

const studentProfileModel = (sequelize) => {
    const studentProfile = sequelize.define("studentProfiles", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING(15),
            allowNull: false,
        },
        major: {
            type: DataTypes.STRING(31),
            allowNull: false,
        }
    });
    return studentProfile;
};

module.exports = studentProfileModel;