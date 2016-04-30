function AuthConfig($stateProvider) {
  'ngInject';

  $stateProvider
  .state('app.auth', {
    url: '/auth/',
    controller: 'AuthCtrl',
    controllerAs: '$ctrl'
  });

};

export default AuthConfig;
