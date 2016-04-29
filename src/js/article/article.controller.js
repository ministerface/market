class ArticleCtrl {
  constructor($location, store) {
    'ngInject';
    var hs = $location.hash();
    var arr = hs.split('&');
    var access = arr[0].split('=');
    var access_token = access[1]
    store.set('access_token', access_token);
    window.location = '/';

  }
}


export default ArticleCtrl;
