function HomeConfig($stateProvider) {
  'ngInject';

  $stateProvider
  .state('app.home', {
    url: '/',
    controller: 'HomeCtrl',
    controllerAs: '$ctrl',
    templateUrl: 'home/home.html',
    title: 'Панель управления',
    resolve: {
          userData: function(ApiService, store) {
            return ApiService.getUserData(store.get('user_id')).then(
                  (userData) => userData
                  
            );
          }
    }
  })
  
};

export default HomeConfig;
