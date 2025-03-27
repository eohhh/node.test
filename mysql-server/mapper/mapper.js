// mapper.js
const mariaDB = require('mariadb/callback'); // mariadb는 콜백함수..
const sqlList = require('./sql/customers.js');

// DB에 접속하기 위한 정보. (실제DB의 아이디 비번...등이 같아야 접속가능 id : dev01 pw :1234 처럼.)
const connectionPool = mariaDB.createPool({
  host : process.env.DB_HOST,
  port : process.env.DB_PORT,
  password : process.env.DB_PWD,
  user : process.env.DB_USER,
  
  database : process.env.DB_DATABASE,
  connectionLimit : process.env.DB_LIMIT,
  // 선택이지만 권장사항.
  permitSetMultiParamEntries : true,
  insertIdAsNumber : true,
  bigIntAsNumber : true,
  });

  
const query = (alias, values) => {
  return new Promise((resolve, reject) => {
    let executeSql = sqlList[alias];
    connectionPool.query(executeSql, values, (err, result) => {
      if(err) {
        reject({err});
      } else {
        resolve(result);
      }
    });   
  })
    .catch(err => {
      console.log(err);
      return err;
    });
};

module.exports = {
  query,
}