module.exports = (sequelize, DataTypes) => {
    let alias = 'Genre';
    
    let cols = {
        id: {
            type: DataTypes.INTEGER(11).UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        ranking: {
            type: DataTypes.INTEGER(10).UNSIGNED,
            allowNull: false
        },
        active: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        }
    };
    
    let config = {
        tableName: 'genres',
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: false,
    };
    
    const Genre = sequelize.define(alias, cols, config);
    
    return Genre;
}
