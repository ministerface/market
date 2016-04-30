class AppHeaderCtrl {
  constructor(AppConstants, ApiService, store) {
    'ngInject';
    this._ApiService = ApiService;
    this.appName = AppConstants.appName;
      this.autorised = (store.get('access_token')) ? true : false;
  };
    

    getAuth () {
        this._ApiService.getAuth();
    }
    
    logOut() {
        this._ApiService.logOut();
    }
  
}

let AppHeader = {
  controller: AppHeaderCtrl,
    controllerAs: '$ctrl',
  templateUrl: 'layout/header.html'
};

export default AppHeader;
