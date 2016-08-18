class AppTopbarCtrl {
  constructor(AppConstants, User,$rootScope,$state, Condition, $scope) {
    'ngInject';
    
    this.appName = AppConstants.appName;
    this._User = User;
    this._Condition = Condition;
    this._$rootScope = $rootScope;
    
    this.currentUser = this._User.current;
    this.title = $state.current.title;

    $scope.$watch('$ctrl.search', function (val) {
      $rootScope.$emit('search', val);
    });

    $rootScope.$on('$stateChangeSuccess', (event, toState) => {
      this.title = toState.title;
    });
    
  };

  toggleRightBar() {
    this._Condition.toggleRightBar();
  }

  changeSearch() {
    this._$rootScope.$emit('search', this.search);
  }
  
  logIn () {
    this._User.getToken();
  }

  logOut() {
    this._User.destroyToken();
  }
  
}

let AppTopbar = {
  controller: AppTopbarCtrl,
    controllerAs: '$ctrl',
  templateUrl: 'layout/topbar.html'
};

export default AppTopbar;
