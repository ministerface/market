class LoginCtrl {
    constructor(AppConstants, User) {
        'ngInject';
        this.appName = AppConstants.appName;
        this._User = User;
    }

    login() {
        this._User.getToken();
    }
}

export default LoginCtrl;