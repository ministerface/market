export default class Shop {
    constructor(User, $http) {
        'ngInject';
        
        this._User = User;
        this._$http = $http;

    }
    
    getCountGoods (owner_id) {

        let param = {
            owner_id: '-'+owner_id,
            access_token: this._User.current.access_token,
            count: 199
        };
        
        let paramUrl = Object.keys(param).map(function(key) {
            return key + '=' + param[key];
        }).join('&');

        let url = 'https://api.vk.com/method/market.get?'+paramUrl+'&callback=JSON_CALLBACK';

        return this._$http.jsonp(url).then(
            (data) => {
                return data.data.response[0];
              

            },
            (err) => {
                console.log(err);
            }
        );

    }

    getShops (user_id) {

        let param = {
            user_id: user_id,
            access_token: this._User.current.access_token
        };


        let paramUrl = Object.keys(param).map(function(key) {
            return key + '=' + param[key];
        }).join('&');

        let url = 'https://api.vk.com/method/execute.getShops?'+paramUrl+'&https=1&callback=JSON_CALLBACK';

        return this._$http.jsonp(url).then(
            (data) => {
               return data.data.response;
                //console.log(data);
            },
            (err) => {
                console.log(err);
            }
        );

    }

    getShopsMain (user_id) {

        let param = {
            user_id: user_id,
            access_token: this._User.current.access_token
        };


        let paramUrl = Object.keys(param).map(function(key) {
            return key + '=' + param[key];
        }).join('&');

        let url = 'https://api.vk.com/method/execute.getShopsMain?'+paramUrl+'&https=1&callback=JSON_CALLBACK';

        return this._$http.jsonp(url).then(
            (data) => {
                return data.data.response;
            },
            (err) => {
                console.log(err);
            }
        );

    }



    getShopDetail(gid) {

        let param = {
            group_id: gid,
            access_token: this._User.current.access_token
        };

        let paramUrl = Object.keys(param).map(function(key) {
            return key + '=' + param[key];
        }).join('&');

        let url = 'https://api.vk.com/method/execute.getShop?'+paramUrl+'&https=1&callback=JSON_CALLBACK';

        return this._$http.jsonp(url).then(
            (data) => {
                return data.data.response;
            },
            (err) => {
                console.log(err);
            }
        );

    }

    getAlbums(gid) {

        let param = {
            owner_id: '-'+gid,
            count: 100,
            access_token: this._User.current.access_token
        };

        let paramUrl = Object.keys(param).map(function(key) {
            return key + '=' + param[key];
        }).join('&');

        let url = 'https://api.vk.com/method/market.getAlbums?'+paramUrl+'&callback=JSON_CALLBACK';

        return this._$http.jsonp(url).then(
            (data) => {
                return data.data.response;

            },
            (err) => {
                console.log(err);
            }
        );

    }




}