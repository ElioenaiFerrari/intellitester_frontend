import Api from '../config/api';

const AuthRepo = {
  signin: ({ email, password }) => {
    return Api.post('/auth/signin', { email, password })
      .then(({ data }) => data)
      .catch(console.log);
  },
};

export default AuthRepo;
