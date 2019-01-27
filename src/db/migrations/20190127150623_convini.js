
exports.up = function(knex, Promise) {
  return knex.schema.createtable("convini", t => {
    t
    .increments()
    .index();

    t
    .string('storename', 20)
    .notNullable();
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable("convini");
};
