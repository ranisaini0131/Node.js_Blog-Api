import sequelize, { DataTypes } from "sequelize"

export const Category = sequelize.define("Category", {
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'User',
            key: 'id'
        }
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: true
});

// Define associations
Category.belongsTo(User, {
    foreignKey: 'user_id'
});