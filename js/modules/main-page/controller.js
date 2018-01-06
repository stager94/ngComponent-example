var MainPageController;
dependencies = ['$http'];

MainPageController = function($http) {
  vm = this;
  vm.sounds = [];
  $http({
    method: 'GET',
    url: 'http://localhost/server/sounds.json',
    params: {}
  }).then(function(response){
    console.log(response);
    vm.sounds = response.data.sounds;
  })
}

angular.module('app').controller('MainPageController', dependencies.concat(MainPageController));
