const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');

class EndUser extends Model {
    async hashPassword() {
        if (this.password) {
            this.password = await bcrypt.hash(this.password, 10);
        }
    }
}

EndUser.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [10]
            }
        }
    }
);

EndUser.beforeCreate(async (user) => {
    await user.hashPassword();
});

module.exports = EndUser;

