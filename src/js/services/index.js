import angular from 'angular';

// Create the module where our functionality can attach to
let servicesModule = angular.module('app.services', []);

// Services
import UserService from './user.service';
servicesModule.service('User', UserService);

import OauthService from './oauth.service';
servicesModule.service('OauthService', OauthService);


export default servicesModule;
