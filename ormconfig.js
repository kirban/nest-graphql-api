module.exports = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'kirbanan',
  password: 'zxcvb928374ytrewq',
  database: 'fitautoapp',
  entities: [__dirname + '/../**/*.model{.ts,.js}'],
  migrations: ['dist/src/db/migrations/*.js'],
  cli: {
    migrationsDir: 'src/db/migrations',
  },
};
