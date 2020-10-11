import Api from '../config/api';

const BotRepo = {
  index: (params) => {
    return Api.get('/app/bots', { params })
      .then(({ data }) => data)
      .catch(console.log);
  },
};

export default BotRepo;
