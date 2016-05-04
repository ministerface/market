export default class User {
    constructor(AppConstants, store, $http, $location, $state) {
        'ngInject';

        this._Oauth = AppConstants.oAuthVK;
        this._$http = $http;
        this._store = store;
        this._$location = $location;
        this._$state = $state;
        this.current = (store.get('currentUser')) ? store.get('currentUser') : null;


    }

    getToken() {
        let client_id = this._Oauth.clientId;
        let scope = this._Oauth.scope;
        let redirect_uri = this._Oauth.redirect_uri;
        let response_type = this._Oauth.response_type;
        let url= this._Oauth.url+"?scope="+scope+"&client_id="+client_id+"&redirect_uri="+redirect_uri+"&response_type="+response_type;
        window.location.replace(url);
    }

    applyToken() {
        let hs = this._$location.hash();
        let arr = hs.split('&');
        let access = arr[0].split('=');
        let access_token = access[1];
        let user = arr[2].split('=');
        let userID = user[1];

        this.current = {
            access_token: access_token,
            user_id: userID
        };

        this.getUserData(this.current.user_id);


    }

    destroyToken() {
        this._store.set('currentUser', '');
        this.current = null;
        this._$state.go('app.home');
    }

    getUserData (user_id) {

        let param = {
            user_id: user_id,
            access_token: this.current.access_token,
            fields: 'photo_50,home_town'
        };


        let paramUrl = Object.keys(param).map(function(key) {
            return key + '=' + param[key];
        }).join('&');

        let url = 'https://api.vk.com/method/users.get?'+paramUrl+'&callback=JSON_CALLBACK';

        return this._$http.jsonp(url).then(
            (data) => {
                this.current.data = data.data.response[0];
                this._store.set('currentUser', this.current);
                window.location = '/';
            },
            (err) => {
                console.log(err);
            }
        );

    }

    





}