exports.seed = function(knex, Promise) {
  return Promise.join(
    knex('users').del(),
    knex('items').del(),

    // TODO: DELETE ALL ENTRIES IN EXISITING TABLES

    // Insert seed entries
    knex('users').insert({username: 'alice', password: 'alice'}), // :(
    knex('users').insert({username: 'bob', password: 'bob'}),
    knex('items').insert({item:'Bike',description: 'World Best Bike is avalible for sell'})
    // TODO: INSERT DATA INTO TABLES
  );
};
