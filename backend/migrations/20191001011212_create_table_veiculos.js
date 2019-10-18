
exports.up = function(knex) {
    return knex.schema.createTable('veiculos', table => {
        table.increments('id').primary()
        table.string('modelo').notNull()
        table.string('marca').notNull()
        table.string('ano').notNull()
        table.integer('empresaId').references('id').inTable('empresas').notNull()
    })
};

exports.down = function(knex) {
  return knex.schema.dropTable('veiculos')
};
