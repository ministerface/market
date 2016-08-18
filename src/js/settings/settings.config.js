function SettingsConfig($stateProvider) {
    'ngInject';
    
    $stateProvider
        .state('app.settings', {
            url: '/settings',
            abstract: true,
            templateUrl: 'settings/settings.html'
        })
        .state('app.settings.main', {
            url: '',
            templateUrl: 'settings/settings-main.html',
            title: 'Настройки'
        })
        .state('app.settings.profile', {
            url:'/profile',
            templateUrl: 'settings/profile/profile.html',
            title:'Профиль'
        });
        
}

export default SettingsConfig; 