export default class OauthService {
    constructor(AppConstants, $http) {
        'ngInject';

        this._Oauth = AppConstants.oAuthVK;
        this._$http = $http;


    }

    
    getAuth() {
        let client_id = this._Oauth.clientId;
        let scope = this._Oauth.scope;
        let redirect_uri = this._Oauth.redirect_uri;
        let response_type = this._Oauth.response_type;

        let url= this._Oauth.url+"?scope="+scope+"&client_id="+client_id+"&redirect_uri="+redirect_uri+"&response_type="+response_type;
        window.location.replace(url);

    }

}