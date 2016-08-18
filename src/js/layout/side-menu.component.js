class AppSideMenuCtrl {
    constructor(AppConstants, User,  Condition) {
        'ngInject';

        this.appName = AppConstants.appName;
        this._User = User;
        this._Condition =  Condition;

        this.currentUser = this._User.current;
    };
    
    logout() {
        this._User.destroyToken();
    }
    
}

let AppSideMenu = {
    controller: AppSideMenuCtrl,
    controllerAs: '$ctrl',
    templateUrl: 'layout/side-menu.html'
};

export default AppSideMenu;