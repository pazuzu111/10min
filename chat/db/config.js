//log out query commands to console
const options = {
  query: (e) => {
    console.log(e.query);
  }
}

//setup pgp
const pgp = require('pg-promise')(options);

//setup database
function setDatabase() {
  if (process.env.NODE_ENV === 'development' || !process.env.NODE_ENV) {
    return pgp({
      database: 'ten',
      port: 5432,
      host: 'localhost',
    });
  } else if (process.env.NODE_ENV === 'production') {
    return pgp(process.env.DATABASE_URL);
  }
}

//set function to variable for easy use
const db = setDatabase();

//export to use in other files
module.exports = db;
