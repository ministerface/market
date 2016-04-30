import angular from 'angular';

// Конфиги приложения
import constants  from './config/app.constants';
import appConfig  from './config/app.config';
import appRun     from './config/app.run';

// Плагины
import 'angular-ui-router';
import 'angular-storage';

import './config/app.templates';

//Пиложение
import './layout';
import './components';
import './home';
import './profile';
import './auth';
import './services';

//Иньекции
const requires = [
  'ui.router',
  'templates',
  'app.layout',
  'app.components',
  'app.home',
  'app.profile',
  'app.auth',
  'app.services',
  'angular-storage'
];


window.app = angular.module('app', requires);

angular.module('app').constant('AppConstants', constants);

angular.module('app').config(appConfig);

angular.module('app').run(appRun);

angular.bootstrap(document, ['app'], {
  strictDi: true
});
