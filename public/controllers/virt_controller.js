(function() {
  angular.module('VirtApp')
         .controller('VirtsController', VirtsController);

  VirtsController.$inject = [];

    function VirtsController() {
        var vm = this;

    //define function declarations
    function createVirt() {
            vm.message = '';
        // use the create function in the userService
        virtDataService.create(vm.virtData)
          .success(function(data) {
            vm.virtData = {};
            vm.message = data.message;
            console.log(vm.message);
          });

          $state.go('homePage');
      };
    }
})();
