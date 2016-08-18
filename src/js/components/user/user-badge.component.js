class UserBadgeCtrl {
    constructor(User) {
        'ngInject';
    }
}

let UserBadge = {
    bindings: {
        users: '='
    },
    controller: UserBadgeCtrl,
    controllerAs: '$ctrl',
    templateUrl: 'components/user/user-badge.html'
};

export default UserBadge;