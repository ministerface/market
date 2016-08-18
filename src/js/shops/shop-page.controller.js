class ShopPageCtrl {
    constructor($rootScope, shopDetail, $state) {
        'ngInject';

        $rootScope.setPageTitle('Магазинчик');
        
        this.details = shopDetail.info[0];
        console.log(shopDetail);

        this.followers =  shopDetail.followers.users;

        $state.current.title = this.details.name;
        
        
    }
}


export default ShopPageCtrl;