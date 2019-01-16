module.exports = (sequelize, type) => {

    return sequelize.define('user', {
        id: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        firstName: type.STRING,
        lastName: type.STRING,
        username: type.STRING,
        age: type.INTEGER,
        gender: type.STRING,
        status: type.INTEGER,
        createdOn: type.DATE,
        updatedOn: type.DATE
    },{
        timestamps: false,
        freezeTableName: true,  
        tableName: 'user'
    })
}