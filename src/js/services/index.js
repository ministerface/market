import angular from 'angular';

let servicesModule = angular.module('app.services', []);


import ApiService from './api.service.js';
servicesModule.service('ApiService', ApiService);


export default servicesModule;
