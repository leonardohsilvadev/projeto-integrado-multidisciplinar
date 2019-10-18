
exports.up = function(knex) {
  return knex.schema.createTable('viagens', table => {
      table.increments('id').primary()
      table.string('motorista').notNull()
      table.datetime('horaInicio')
      table.datetime('horaFim')
      table.integer('motoristaId').references('id').inTable('motoristas').notNull()
      table.integer('veiculoId').references('id').inTable('veiculos').notNull()
      table.string('quilometros').notNull()
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('viagens')
};
