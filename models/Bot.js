// //import db
// const db = require('../db/config');

// //declare model object
// const Messages = {};
// // const Messages2 = {};

// //db query command to find all data in table
// Messages.findAll = () => {
//   return db.query(`SELECT * FROM bot1 ORDER BY id ASC`);
// }

// //db query command to update data selected
// Messages.update = (bot) => {
//   return db.one(
//   `UPDATE bot1 SET
//     name = $1,
//     message = $2
//     WHERE id = $3
//     RETURNING *`, [bot.name, bot.message, bot.id]);
// };

// //db query command to delete data selected
// Messages.destroy = id => {
//   return db.none(
//     `DELETE FROM bot1
//     WHERE id = $1`, [id]);
// };

// //export to use in other files
// module.exports = Messages;
