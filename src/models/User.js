const { Model, DataTypes } = require("sequelize");
const sequelize = require("./sequelize-client");

class User extends Model {
    get fullname() {
        return `${this.firstname} ${this.lastname}`;
    }
}

User.init(
    {
        firstname: {
            type: DataTypes.TEXT,
            allowNull: false, // Le firstname n'a pas le droit d'être NULL
        },
        lastname: {
            type: DataTypes.TEXT,
            allowNull: false, // Par défaut,cette valeur serait "true"
        },
        email: {
            type: DataTypes.TEXT,
            allowNull: false,
            /* unique: true */
        },
        password: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        role: {
            type: DataTypes.ENUM(["member", "admin"]), // ENUM = soit l'un soit l'autre, pas autre chose -> ça ne passerait pas la validation
            defaultValue: "member",
            allowNull: false,
        },
    },
    {
        sequelize,
        tableName: "user",
    }
);

module.exports = User;
