import Api from '../config/api';

const TestsRepo = {
  index: (bot_id, params) => {
    return Api.get(`/app/tests/${bot_id}`, { params })
      .then(({ data }) => data)
      .catch(console.log);
  },
};

export default TestsRepo;
