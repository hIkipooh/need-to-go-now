
exports.up = function(knex, Promise) {
  return knex.schema.createTable("convini", t => {
    t
    .increments()
    .index();

    t
    .string('name', 50)
    .notNullable();

    t
    .string('address', 100)
    .notNullable();
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable("convini");
};
