function HomeConfig($stateProvider) {
  'ngInject';

  $stateProvider
  .state('app.home', {
    url: '/',
    controller: 'HomeCtrl',
    controllerAs: '$ctrl',
    templateUrl: 'home/home.html',
    title: 'Панель управления',
    resolve: {
      shops: function(User, Shop) {
        return Shop.getShopsMain(User.current.user_id).then(
            (shops) => {
              return shops;

            },
            (err) => $state.go('app.home')
        ).then(
            (shops) => {

              let con = [];
              shops.forEach(function (item, i, shops) {
                con.push(item.cont.join());
              });
              let usersData = con.join();

              return User.getData(usersData).then(
                  (users) => {

                    shops.forEach(function (item, i, shops) {
                      let contact = item.cont;
                      shops[i].dataUser = [];

                      contact.forEach(function (item1, k, contact) {

                        if(item1) {

                          users.forEach(function(item2, l, users){

                            if (item1 == item2.uid) {

                              shops[i].dataUser.push(item2);

                            }

                          });

                        }
                      });

                    });



                    return shops;
                  }
              );



            }
        );
      }
    }
  })
  
};

export default HomeConfig;
