
exports.up = function(knex) {
    return knex.schema.createTable('empresas', table => {
        table.increments('id').primary()
        table.string('nome').notNull()
    })
};

exports.down = function(knex) {
  return knex.schema.dropTable('empresas')
};
