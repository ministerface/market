function AuthConfig($stateProvider) {
  'ngInject';

  $stateProvider
    .state('app.auth', {
        url: '/auth/',
        title: 'auth',
        resolve: {
            userData: function(ApiService,  User) {
                User.applyToken();
            }
        }
    })
    .state('login', {
        url: '/login',
        controller: 'LoginCtrl',
        controllerAs: '$ctrl',
        templateUrl: 'auth/login.html',
        title: 'Авторизация'
    });

}

export default AuthConfig;
