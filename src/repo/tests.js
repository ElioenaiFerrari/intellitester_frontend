import Api from '../config/api';

const TestsRepo = {
  index: (bot_id, params) => {
    return Api.get(`/app/tests/${bot_id}`, params)
      .then(({ data }) => data)
      .catch(console.log);
  },

  update: (bot_id, params) => {
    return Api.put(`/app/tests/${bot_id}`, params)
      .then(({ data }) => data)
      .catch(console.log);
  },

  store: (bot_id, params) => {
    return Api.post(`/app/tests/${bot_id}`, params)
      .then(({ data }) => data)
      .catch(console.log);
  },

  destroy: (bot_id, params) => {
    return Api.delete(`/app/tests/${bot_id}`, { params })
      .then(({ data }) => data)
      .catch(console.log);
  },
};

export default TestsRepo;
