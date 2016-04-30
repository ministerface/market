class HomeCtrl {
  constructor(AppConstants,store, ApiService, userData) {
    'ngInject';

    this._ApiService = ApiService;
    this.appName = AppConstants.appName;
    this.userId = store.get('user_id');
    this.dataUser = userData;
    console.log(this.dataUser);

  }










}

export default HomeCtrl;
