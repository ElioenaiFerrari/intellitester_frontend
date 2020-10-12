import Api from '../config/api';

const BotRepo = {
  index: (params) => {
    return Api.get('/app/bots', params)
      .then(({ data }) => data)
      .catch(console.log);
  },

  store: (params) => {
    return Api.post('/app/bots', params)
      .then(({ data }) => data)
      .catch(console.log);
  },

  destroy: (bot_id) => {
    return Api.delete(`/app/bots/${bot_id}`)
      .then(({ data }) => data)
      .catch(console.log);
  },
};

export default BotRepo;
