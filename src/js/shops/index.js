import angular from 'angular';

let shopsModule = angular.module('app.shops', []);

import ShopsConfig from './shops.config';
shopsModule.config(ShopsConfig);

import  ShopsCtrl from './shops.controller';
shopsModule.controller('ShopsCtrl', ShopsCtrl);

import ShopPageCtrl from './shop-page.controller';
shopsModule.controller('ShopPageCtrl', ShopPageCtrl);

import ShopFollowersCtrl from './shop-followers.controller';
shopsModule.controller('ShopFollowersCtrl', ShopFollowersCtrl);

export default shopsModule;