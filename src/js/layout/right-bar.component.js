class AppRightBarCtrl {
    constructor(Condition) {
        'ngInject';
        
        this._Condition = Condition;
    }
    
    toggleRightBar() {
        this._Condition.toggleRightBar();
    }
}

let AppRightBar = {
    controller: AppRightBarCtrl,
    controllerAs: '$ctrl',
    templateUrl: 'layout/right-bar.html'
};

export default AppRightBar;