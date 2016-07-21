(function() {
  angular.module('VirtApp')
         .controller('VenuesController', VenuesController);

  VenuesController.$inject = [];

    function VenuesController() {
        var vm = this;

    //define function declarations
    function createVenue() {
            vm.message = '';
        // use the create function in the userService
        venueDataService.create(vm.venueData)
          .success(function(data) {
            vm.venueData = {};
            vm.message = data.message;
            console.log(vm.message);
          });

          $state.go('homePage');
      };
    }
})();
