(function() {
  "use strict";

  angular
  .module("VirtApp")
  .controller("UsersController", UsersController);

  UsersController.$inject = ["$state", 'userDataService'];

  function UsersController($state, userDataService) {
    var vm = this;

    vm.userDS = userDataService;

  }

})();
