import angular from 'angular';

let componentsModule = angular.module('app.components', []);

import ShowAuthed from './show-authed.directive';
componentsModule.directive('showAuthed', ShowAuthed);

import ShopPreview from  './shop/shop-preview.component';
componentsModule.component('shopPreview', ShopPreview);

import UserBadge from './user/user-badge.component';
componentsModule.component('userBadge', UserBadge);

import Followers from './shop/followers.component';
componentsModule.component('followers', Followers);

export default componentsModule;
