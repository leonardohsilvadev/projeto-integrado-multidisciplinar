module.exports = {
    client: 'postgresql',
    connection: {
      database: 'andromeda',
      user:     'postgres',
      password: '101214'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
};