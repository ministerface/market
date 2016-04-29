class HomeCtrl {
  constructor(AppConstants, OauthService, store) {
    'ngInject';

    this.appName = AppConstants.appName;
    this._OauthService = OauthService;
    console.log(store.get('access_token'));

  }

  getAuth () {
    this._OauthService.getAuth();
  }

}

export default HomeCtrl;
