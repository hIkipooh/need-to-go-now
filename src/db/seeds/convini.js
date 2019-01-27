const conviniList = require('./initialDB')
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('needtogonow')
    .del()
    .then(function () {
      // Inserts seed entries
      allPromises = [];
      const insertConvini = convini => {
        return knex('needtogonow').insert([
          {
            name: convini.name,
            address: convini.adress
          }
        ]);
      }
      conviniList.forEach(convini => {
        allPromises.push(insertConvini(convini));
      })
      return Promise.all(allPromises);
    });
};
