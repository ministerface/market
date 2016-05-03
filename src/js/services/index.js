import angular from 'angular';

let servicesModule = angular.module('app.services', []);


import ApiService from './api.service.js';
servicesModule.service('ApiService', ApiService);

import UserService from './user.service.js';
servicesModule.service('User', UserService);

import GroupService from './group.service';
servicesModule.service('Group', GroupService);

export default servicesModule;
