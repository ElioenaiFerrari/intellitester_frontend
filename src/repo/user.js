import Api from '../config/api';

const UserRepo = {
  current: () => {
    return Api.get('/app/users/current')
      .then(({ data }) => data)
      .catch(console.log);
  },
};

export default UserRepo;
