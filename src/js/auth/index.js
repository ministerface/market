import angular from 'angular';


let authModule = angular.module('app.auth', []);


import AuthConfig from './auth.config.js';
authModule.config(AuthConfig);



import AuthCtrl from './auth.controller.js';
authModule.controller('AuthCtrl', AuthCtrl);


export default authModule;
