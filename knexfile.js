module.exports = {
//add connection info
  development: {
    client:'sqlite3',
    connection: {
      filename: './db.sqlite3',
      host: '127.0.0.1:8080',
      user: 'david'
    }
  }

};
