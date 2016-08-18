import angular from 'angular';

let layoutModule = angular.module('app.layout', []);

import AppTopbar from './topbar.component';
layoutModule.component('appTopbar', AppTopbar);

import AppFooter from './footer.component';
layoutModule.component('appFooter', AppFooter);

import AppSideMenu from './side-menu.component';
layoutModule.component('appSideMenu', AppSideMenu);

import AppRightBar from './right-bar.component';
layoutModule.component('appRightBar', AppRightBar);

export default layoutModule;
