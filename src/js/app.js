import angular from 'angular';

// Конфиги приложения
import constants  from './config/app.constants';
import appConfig  from './config/app.config';
import appRun     from './config/app.run';

import AppCtrl     from './config/app.controller';

// Плагины
import 'angular-ui-router';
import 'angular-storage';
import 'angular-animate';
import 'angular-utils-pagination';


import './config/app.templates';

//Пиложение
import './layout';
import './components';
import './home';
import './auth';
import './services';
import './shops';
import './settings'
import './goods';
import './filters';

//Иньекции
const requires = [
  'ui.router',
  'angularUtils.directives.dirPagination',
  'ngAnimate',
  'angular-storage',
  'templates',
  'app.layout',
  'app.components',
  'app.filters',
  'app.home',
  'app.auth',
  'app.services',
  'app.shops',
  'app.settings',
  'app.goods'
];

window.app = angular.module('app', requires);

angular.module('app').constant('AppConstants', constants);

angular.module('app').config(appConfig);

angular.module('app').run(appRun);

angular.module('app').controller('AppCtrl', AppCtrl);

angular.bootstrap(document, ['app'], {
  strictDi: true
});

