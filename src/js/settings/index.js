import angular from 'angular';

let settingsModule = angular.module('app.settings', []);

import SettingsConfig from './settings.config';
settingsModule.config(SettingsConfig);


export  default settingsModule;