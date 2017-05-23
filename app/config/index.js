import dbConfig from './db';

export default (env) => ({
  db: dbConfig[env],
});
