exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('users', function (table) {

    table.increments('id').primary();
    table.string('username').notNullable();
    table.string('Password').notNullable();
    table.timestamps(false,true);
    // TODO: DESCRIBE THE USER TABLE
  }).then(()=>{
    return knex.schema.createTableIfNotExists('items', function (table) {
      table.increments('id').primary();
      table.string('item');
      table.string('description');
      table.string('status').defaultTo('incompelete');
      table.integer('users_id').references('id').inTable('users').onDelete('cascade');
      // TODO: DESCRIBE THE USER TABLE
    });
  })
  // TODO: CREATE ANY OTHER TABLES YOU NEED
};

exports.down = function(knex, Promise) {
  // TODO: DROP OTHER TABLES

  return knex.schema.dropTable('users')
.then(()=> {
return knex.schema.dropTable('items')
})
};
