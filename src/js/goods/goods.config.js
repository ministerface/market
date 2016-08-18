function GoodsConfig($stateProvider) {
    'ngInject';
    
    $stateProvider
        .state('app.goods', {
            url: '/goods',
            templateUrl: 'goods/goods.html',
            title: 'Товары'
        });
}

export default GoodsConfig;