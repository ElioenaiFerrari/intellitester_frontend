import 'dotenv/config';

const Env = {
  get: (key) => process.env[key],
  set: (key, value) => (process.env[key] = value),
};

export default Env;
