export default class ApiService {
    constructor(AppConstants, store, $http) {
        'ngInject';

        this._Oauth = AppConstants.oAuthVK;
        this._$http = $http;
        this._store = store;

    }
    
    getAuth() {
        let client_id = this._Oauth.clientId;
        let scope = this._Oauth.scope;
        let redirect_uri = this._Oauth.redirect_uri;
        let response_type = this._Oauth.response_type;
        let url= this._Oauth.url+"?scope="+scope+"&client_id="+client_id+"&redirect_uri="+redirect_uri+"&response_type="+response_type;
        window.location.replace(url);
    }

    
    logOut() {
        this._store.set('access_token', '');
        this._store.set('user_id', '');
        window.location = '/';
    }

    getUserData (user_id) {
        let token = this._store.get('access_token');
        let url = 'https://api.vk.com/method/users.get?user_id='+user_id+'&access_token='+token+'&fields=photo_50&callback=JSON_CALLBACK';
        return this._$http.jsonp(url).then(function(data){
            return data.data.response[0];

        }, function(response){

        });






    }
    

}