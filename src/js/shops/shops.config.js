function ShopsConfig($stateProvider) {
    'ngInject';

    $stateProvider
        .state('app.shops', {
            abstract: true,
            url: '/shops',
            template: '<ui-view>Loading....</ui-view>'
        })
        .state('app.shops.list', {
            url: '',
            controller: 'ShopsCtrl',
            controllerAs: '$ctrl',
            templateUrl: 'shops/shops.html',
            title: 'Магазины',
            resolve: {
                shops: function(User, Shop) {
                    return Shop.getShops(User.current.user_id).then(
                        (shops) => {
                            return shops;
                            
                        },
                        (err) => $state.go('app.home')
                    ).then(
                        (shops) => {

                            let con = [];
                            shops.forEach(function (item, i, shops) {
                                con.push(item.cont.join());
                            });
                            let usersData = con.join();

                            return User.getData(usersData).then(
                                (users) => {

                                    shops.forEach(function (item, i, shops) {
                                        let contact = item.cont;
                                        shops[i].dataUser = [];

                                        contact.forEach(function (item1, k, contact) {

                                            if(item1) {

                                                users.forEach(function(item2, l, users){

                                                    if (item1 == item2.uid) {

                                                        shops[i].dataUser.push(item2);

                                                    }

                                                });

                                            }
                                        });

                                    });



                                    return shops;
                                }
                            );



                        }
                    );
                }
            }
        })
        .state('app.shops.detail', {
            url: '/:shop',
            controller: 'ShopPageCtrl',
            controllerAs: '$ctrl',
            templateUrl: 'shops/shop-page.html',
            title: 'Магазин',
            resolve: {
                
                shopDetail: function(Shop, $stateParams) {
                    return Shop.getShopDetail($stateParams.shop).then(
                        (data) => data,
                        (err) => $state.go('app.home')
                    );
                }
                /*
                followers: function (Group, $stateParams) {

                    return Group.getFollowers($stateParams.shop).then(
                        (data) => data,
                        (err) => $state.go('app.home')
                    );
                }
                
                albums: function (Shop, shopDetail) {
                    return Shop.getAlbums(shopDetail.gid).then(
                        (data) => console.log(data)
                        (err) => $state.go('app.home')
                    );
                }
                */
            }
        })
        .state('app.shops.followers', {
                url: '/:shop/followers',
                controller: 'ShopFollowersCtrl',
                controllerAs: '$ctrl',
                templateUrl: 'shops/shop-followers.html',
                title: 'Подписчики',
                resolve: {
                    followers: function(Shop, $stateParams) {
                        console.log($stateParams.shop);
                    }
                }
        });

}

export default ShopsConfig;