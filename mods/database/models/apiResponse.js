// apiResponse.js
// Data transfer class to move the data from the controller.

var ApiResponse = function (cnf) {
    this.success = cnf.success;
    this.extras = cnf.extras;
};

module.exports = ApiResponse;