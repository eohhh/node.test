// customers.js
const selectAll = `SELECT id,
                   name,
                   email,
                   phone,
                   address
FROM customers
ORDER BY id`;

module.exports = {
  selectAll,
}