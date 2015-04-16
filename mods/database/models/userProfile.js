// userProfile.js
// Seperate file which keeps sensitive information from being transfered

var UserProfileModel = function(cnf) {
    this.email = cnf.email,
    this.firstName = cnf.firstName,
    this.lastName = cnf.lastName
};

module.exports = UserProfileModel;