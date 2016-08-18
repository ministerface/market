export default class ApiService {
    constructor(AppConstants, $http) {
        'ngInject';

        this._Oauth = AppConstants.oAuthVK;
        this._$http = $http;
        
        this.current = null;
    }
    
    getUserData (user_id) {
        let token = this._store.get('access_token');
        let param = {
            user_id: user_id,
            access_token: token,
            fields: 'photo_50,home_town'
        };

        let paramUrl = Object.keys(param).map(function(key) {
            return key + '=' + param[key];
        }).join('&');
        
        let url = 'https://api.vk.com/method/users.get?'+paramUrl+'&callback=JSON_CALLBACK';
        return this._$http.jsonp(url).then(function(data){
            return data.data.response[0];

        }, function(response){

        });
    }

    getUserGroup (user_id) {
        let token = this._store.get('access_token');
        let param = {
            user_id: user_id,
            access_token: token,
            filter: 'admin',
            extended: 1,
            fields: 'name,market,photo_50,members_count'

        };

        let paramUrl = Object.keys(param).map(function(key) {
            return key + '=' + param[key];
        }).join('&');
        
        let url = 'https://api.vk.com/method/groups.get?'+paramUrl+'&callback=JSON_CALLBACK';
        return this._$http.jsonp(url).then(function(data){
            return data.data.response;
        }, function(response){
        });
    }
    
}