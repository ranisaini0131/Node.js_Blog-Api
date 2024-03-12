import sequelize, { DataTypes } from "sequelize"

export const Post = sequelize.define("Post", {

    title: {
        type: DataTypes.STRING,
        allowNull: false,
        trim: true
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    category_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Category',
            key: 'id'
        }
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'User',
            key: 'id'
        }
    },
    photo: {
        type: DataTypes.STRING,
        allowNull: false
    }
})


// Define associations
Post.belongsTo(User, {
    foreignKey: 'user_id'
});

Post.belongsTo(Category, {
    foreignKey: 'category_id'
});

Post.belongsToMany(User, {
    through: 'PostViews',
    as: 'numView',
    foreignKey: 'post_id'
});

Post.belongsToMany(User, {
    through: 'PostLikes',
    as: 'likes',
    foreignKey: 'post_id'
});

Post.belongsToMany(User, {
    through: 'PostDisLikes',
    as: 'disLikes',
    foreignKey: 'post_id'
});

