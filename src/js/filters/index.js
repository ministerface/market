import angular from 'angular';

let filtersModule = angular.module('app.filters', []);

import TestFilter from './test.filter';
filtersModule.filter('test', TestFilter);

export default filtersModule;