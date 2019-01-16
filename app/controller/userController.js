var { getResponseObject } = require('../helper/helperMethods');
const { User } = require('../database/sequelize')

getAllUsers = (req, res) => {

    User.findAll().then(users => {

        let response;
        if (!users) {
            response = getResponseObject(100, 'Unable to get users at the moment');
            res.json(response);
        }
        else {
            response = getResponseObject(1, 'Get User List Successful', users);
            res.json(response);
        }
    });
};

getUserById = (req, res) => {

    User.findById(req.params.id).then(user => {
        let response;
        if (!user) {
            response = getResponseObject(102, 'Unable to get user at the moment');
            res.json(response);
        }
        else {
            response = getResponseObject(1, 'User Fetched Successfully', user);
            res.json(response);
        }
    });
}

addUser = (req, res) => {

    User.create(req.body)
        .then(user => {

            if (!user) {
                let response = getResponseObject(101, 'Unable To Create User');
                res.send(response);
            }
            else {
                let response = getResponseObject(1, 'User Created Successfully', user);
                res.send(response);
            }

        })
        .catch(error => {
            let response = getResponseObject(101, error.original.sqlMessage);
            res.send(response);
        });
}

deleteUser = (req, res) => {

    User.destroy({
        where: {
            id: req.params.id
        },
    })
        .then(rows => {
            console.log(row + ' deleted from user');
            let response = getResponseObject(1, 'User Deleted Successfully');
            res.send(response);
        })
        .catch(err => {
            let response = getResponseObject(104, err);
            res.send(response);
        });
}

module.exports = {
    getAllUsers: getAllUsers,
    getUserById: getUserById,
    addUser: addUser,
    deleteUser: deleteUser
};