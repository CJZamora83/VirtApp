(function() {
  "use strict";

  angular
  .module("VirtApp")
  .controller("UsersController", UsersController);

UsersController.$inject = ["$state"];

function UsersController($state) {
  var vm = this;

  vm.user = login;
  vm.isLoggedIn = authService.isLoggedIn;
  vm.currentUser = userDataService;

  //form data for login
  vm.loginData;

  function userLogin() {
    authService.login(vm.loginData.email, vm.loginData.password)
      .then(function(res) {
        $log.log(res.data);
        $state.go();
      });
    };
  }
})();
