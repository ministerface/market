const AppConstants = {
  appName: 'Merchant',
  oAuthVK: {
    url: 'https://oauth.vk.com/authorize',
    clientId: '5439694',
    redirect_uri: 'http://localhost:4000/auth/',
    //clientId: '5462103',
    //redirect_uri: 'https://icesurprice.ru/auth/',
    display: 'page',
    scope: 'market,friends,status,email,notifications,stats,offline,groups',
    response_type: 'token',
    v: '5.52'
  }
};

export default AppConstants;
