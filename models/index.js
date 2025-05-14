// models/index.js
// Export all models from a single file for easier imports
module.exports = {
  User: require('./User'),
  Restaurant: require('./Restaurant'),
  MenuItem: require('./MenuItem'),
  Order: require('./Order'),
  Review: require('./Review')
};
