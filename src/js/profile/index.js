import angular from 'angular';


let profileModule = angular.module('app.profile', []);


import ProfileConfig from './profile.config';
profileModule.config(ProfileConfig);


import ProfileCtrl from './profile.controller';
profileModule.controller('ProfileCtrl', ProfileCtrl);

import ProfileMainCtrl from './profile-main.controller';
profileModule.controller('ProfileMainCtrl', ProfileMainCtrl);

import ProfileSetupCtrl from './profile-setup.controller';
profileModule.controller('ProfileSetupCtrl', ProfileSetupCtrl);


export default profileModule;
