function AppConfig($stateProvider, $locationProvider, $urlRouterProvider, paginationTemplateProvider) {
  'ngInject';
  
  $locationProvider.html5Mode(true);

  $stateProvider
  .state('app', {
    abstract: true,
    templateUrl: 'layout/app-view.html',
    controller: 'AppCtrl',
    controllerAs: '$ctrl'
  });

  $urlRouterProvider.otherwise('/');
  
  paginationTemplateProvider.setPath('commons/pagination/pagination.html');
  
}

export default AppConfig;
