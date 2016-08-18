import angular from 'angular';

let servicesModule = angular.module('app.services', []);

import ApiService from './api.service.js';
servicesModule.service('ApiService', ApiService);

import UserService from './user.service.js';
servicesModule.service('User', UserService);

import GroupService from './group.service';
servicesModule.service('Group', GroupService);

import ShopService from './shop.service';
servicesModule.service('Shop', ShopService);

import ConditionService from './condition.servise';
servicesModule.service('Condition', ConditionService);

export default servicesModule;
