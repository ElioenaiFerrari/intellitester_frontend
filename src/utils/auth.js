const AuthUtil = {
  get_token: () => sessionStorage.getItem('token'),
};

export default AuthUtil;
