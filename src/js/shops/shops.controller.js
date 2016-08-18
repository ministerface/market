class ShopsCtrl {
    constructor(shops, Shop, $rootScope, $scope, testFilter) {
        'ngInject';
        this._shops = shops;
        this._Shop = Shop;

        this._testFilter = testFilter;

        
        this.shops = shops;
        let val ='';
        this._$scope = $scope;
        this.filteredData = shops;


        $rootScope.$on('search', (event, val) => {
            this.filteredShop(event, val);

        });

    }

    filteredShop(event, val) {


            this.filteredData = this._testFilter(this.shops, val);

    }





}



export default ShopsCtrl;