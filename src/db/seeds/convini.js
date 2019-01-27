exports.seed = function(knex, Promise) {
  const conviniList = require('./../initialDB')
  // Deletes ALL existing entries
  return knex('convini')
    .del()
    .then(function () {
      // Inserts seed entries
      allPromises = [];
      const insertConvini = convini => {
        return knex('convini').insert([
          {
            name: convini.name,
            address: convini.address
          }
        ]);
      }
      conviniList.forEach(convini => {
        allPromises.push(insertConvini(convini));
      })
      return Promise.all(allPromises);
    });
};
