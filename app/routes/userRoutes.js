var userController = require('../controller/userController');

var userRoutes = function (app) {
    app.route('/users').get(userController.getAllUsers),
    app.route('/users/:id').get(userController.getUserById),
    app.route('/users').post(userController.addUser)
    app.route('/users/:id').delete(userController.deleteUser)

};

module.exports = userRoutes;