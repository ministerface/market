function AppRun(AppConstants, $rootScope, User, $state, $location) {
  'ngInject';

  if (!User.current && $location.path() != '/auth/') {
    $state.go('login');
  }
  $rootScope.$on('$stateChangeStart',function(){
    $rootScope.stateIsLoading = true;
  });
  
  $rootScope.$on('$stateChangeSuccess', (event, toState) => {
    $rootScope.setPageTitle(toState.title);
    $rootScope.stateIsLoading = false;
  });
  
  $rootScope.setPageTitle = (title) => {
    $rootScope.pageTitle = '';
    if (title) {
      $rootScope.pageTitle += title;
      $rootScope.pageTitle += ' \u2014 ';
    }
    $rootScope.pageTitle += AppConstants.appName;
  };

}

export default AppRun;
