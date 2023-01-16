//Mario's Functions tope high level

/**
 * Execute different queries with params
 * @param {string} sql
 * @param {*} params
 * @returns
 */

const executeQuery = (sql, params = []) => {
  return new Promise((resolve, reject) => {
    db.query(sql, params, (err, result) => {
      if (err) return reject(err);
      resolve(result);
    });
  });
};

/**
 * Execute different queries with params when we need a only one result
 * @param {string} sql
 * @param {*} params
 * @returns
 */
const executeQueryOne = (sql, params = []) => {
  return new Promise((resolve, reject) => {
    db.query(sql, params, (err, result) => {
      if (err) return reject(err);
      if (result.length === 0) return resolve(null);
      resolve(result[0]);
    });
  });
};

module.exports = { executeQuery, executeQueryOne };
