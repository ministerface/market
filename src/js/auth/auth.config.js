function AuthConfig($stateProvider) {
  'ngInject';

  $stateProvider
  .state('app.auth', {
    url: '/auth/',
    resolve: {
      userData: function(ApiService,  User) {
        User.applyToken();
      }
    }
  });

};

export default AuthConfig;
