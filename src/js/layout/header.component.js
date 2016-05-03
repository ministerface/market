class AppHeaderCtrl {
  constructor(AppConstants, User) {
    'ngInject';
    this._User = User;
    this.appName = AppConstants.appName;
  };
    

    logIn () {
        this._User.getToken();
    }

    logOut() {
      this._User.destroyToken();
    }
  
}

let AppHeader = {
  controller: AppHeaderCtrl,
    controllerAs: '$ctrl',
  templateUrl: 'layout/header.html'
};

export default AppHeader;
