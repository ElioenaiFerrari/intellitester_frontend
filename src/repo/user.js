import Api from '../config/api';

const UserRepo = {
  current: () => {
    return Api.get('/app/users/current')
      .then((v) => v)
      .catch(console.log);
  },
};

export default UserRepo;
