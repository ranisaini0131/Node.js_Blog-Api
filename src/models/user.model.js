
const User = (sequelize, DataTypes) => {
    const User = sequelize.define("User", {
        firstName: {
            type: DataTypes.STRING
        },

        lastName: {
            type: DataTypes.STRING
        },

        profilePhoto: {
            type: DataTypes.STRING
        },

        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },

        password: {
            type: DataTypes.STRING,
            allowNull: false
        },

        postCount: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },

        isBlocked: {
            type: DataTypes.BOOLEAN
        },
        isAdmin: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },

        role: {
            type: DataTypes.ENUM('Admin', 'Guest', 'Editor')

        },

        active: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        }
    });


    // Associations
    User.belongsToMany(User, {
        through: 'UserViews',
        as: 'viewers',
        foreignKey: 'viewedUserId'
    });

    User.belongsToMany(User, {
        through: 'UserFollowers',
        as: 'following',
        foreignKey: 'followerId',
    });

    User.belongsToMany(User, {
        through: 'UserFollows',
        as: "followers",
        foreignKey: 'followingId'
    });

    User.belongsToMany(Post, {
        through: 'UserPosts',
        as: 'posts'
    });

}

export default User;