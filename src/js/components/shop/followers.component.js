class FollowersCtrl {
    constructor() {
        'ngInject';
        
        this.settings = {
            showMenu: false
        }
    }
    
    showMenus() {
        this.settings.showMenu = !this.settings.showMenu;
    }
}

let Followers = {
    bindings: {
        shop: '='
    },
    controller: FollowersCtrl,
    constrollerAs: '$ctrl',
    templateUrl: 'components/shop/followers.html'
};

export default Followers;