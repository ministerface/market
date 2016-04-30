class AuthCtrl {
  constructor($location, store) {
    'ngInject';
    var hs = $location.hash();
    var arr = hs.split('&');
    var access = arr[0].split('=');
    var access_token = access[1];
    var user = arr[2].split('=');
    var userID = user[1];
    
    store.set('access_token', access_token);
    store.set('user_id', userID);

    window.location = '/';
  }






}


export default AuthCtrl;
