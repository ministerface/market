class AppHeaderCtrl {
  constructor(AppConstants, User) {
    'ngInject';
    this._User = User;
    this.appName = AppConstants.appName;

    this.currentUser = this._User.current;
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
