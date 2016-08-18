class ShopPreviewCtrl {
    constructor(Shop) {
        'ngInject';
        
        this._Shop = Shop;
        
        this.textGoods = this.declension(this.shop.count, ['товар','товара','товаров']);
        this.textFollower = this.declension(this.shop.data.members_count, ['подписчик','подписчика','подписчиков']);
        
        this.priceMin = this.shop.data.market.price_min.slice(0,-2);
        this.priceMax = this.shop.data.market.price_max.slice(0,-2);
        this.manager = this.shop.cont;
    }

    declension(num, expressions) {
        let result;
        let count = num % 100;
        if (count >= 5 && count <= 20) {
            result = expressions['2'];
        } else {
            count = count % 10;
            if (count == 1) {
                result = expressions['0'];
            } else if (count >= 2 && count <= 4) {
                result = expressions['1'];
            } else {
                result = expressions['2'];
            }
        }
        return result;
    }

}


let ShopPreview = {
    bindings: {
        shop: '='
    },
    controller:ShopPreviewCtrl,
    controllerAs: '$ctrl',
    templateUrl: 'components/shop/shop-preview.html'
};

export default ShopPreview;