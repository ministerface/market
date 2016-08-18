export default class Group {
    constructor(User, $http) {
        'ngInject';

        this._User = User;
        this._$http = $http;
        this.shopGroup = null;

        if(User.current) {
            this.getUserGroup(this._User.current.user_id);
        }
    }

    getUserGroup (user_id) {
        
        let param = {
            user_id: user_id,
            access_token: this._User.current.access_token,
            filter: '',
            extended: 1,
            fields: 'name,market,photo_50,members_count'

        };
        
        let paramUrl = Object.keys(param).map(function(key) {
            return key + '=' + param[key];
        }).join('&');
        
        let url = 'https://api.vk.com/method/groups.get?'+paramUrl+'&callback=JSON_CALLBACK';
        return this._$http.jsonp(url).then(
            (data) => {
                this.shopGroup = data.data.response;
               return data.data.response;
            },
            (err) => {
                console.log(err);
            }
        );

    }

    getFollowers(gid) {
        let param = {
            group_id: gid,
            count: 6,
            access_token: this._User.current.access_token,
            fields: 'name,photo_50,online,city,country'

        };

        let paramUrl = Object.keys(param).map(function(key) {
            return key + '=' + param[key];
        }).join('&');

        let url = 'https://api.vk.com/method/groups.getMembers?'+paramUrl+'&callback=JSON_CALLBACK';
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