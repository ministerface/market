import angular from 'angular';

let goodsModule = angular.module('app.goods', []);

import GoodsConfig from './goods.config';
goodsModule.config(GoodsConfig);

export default goodsModule;