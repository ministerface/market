const AppConstants = {
  api: 'http://localhost:3000/api',
  jwtKey: 'jwtToken',
  appName: 'Market VK',
  oAuthVK: {
    url: 'https://oauth.vk.com/authorize',
    clientId: '5439694',
    redirect_uri: 'http://localhost:4000/article/',
    display: 'page',
    scope: 'market',
    response_type: 'token',
    v: '5.52'
  }

};

export default AppConstants;
