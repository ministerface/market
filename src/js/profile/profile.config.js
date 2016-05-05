function ProfileConfig($stateProvider) {
  'ngInject';

  $stateProvider
  .state('app.profile', {
    abstract: true,
    url: '/profile',
    controller: 'ProfileCtrl',
    controllerAs: '$ctrl',
    templateUrl: 'profile/profile.html',
    resolve: {
      userData: function(User) {
        return User.current;
      }
    }
  })

      .state('app.profile.main', {
          url:'',
          controller: 'ProfileMainCtrl',
          controllerAs: '$ctrl',
          templateUrl: 'profile/profile-main.html',
          title: 'Профиль'
      })

    .state('app.profile.setup', {
          url:'/setup',
          controller: 'ProfileSetupCtrl',
          controllerAs: '$ctrl',
          templateUrl: 'profile/profile-setup.html',
          title: 'Настройки приложения'
    });

};

export default ProfileConfig;
