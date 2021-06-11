/*
 * const userData
 */
const userData = require('../data/userData');

/**
 * 
 * @returns 
 */
exports.getUsers =  function (){
    return userData.getUsers();
}

/**
 * 
 * @param {*} userId 
 * @returns 
 */
exports.getUser = function (userId) {
    return userData.getUser(userId);
}

/**
 * 
 * @param {*} userId 
 * @returns 
 */
exports.deleteUser = function (userId) {
    return userData.deleteUser(userId);
}

/**
 * 
 * @param {*} user 
 * @returns 
 */
exports.saveUser = function (user) {
    return userData.saveUser(user);
}