(function() {
  angular.module('VirtApp', [
    "ui.router", 'satellizer'
    ])

    // .config(function($httpProvider) {

    //   // attach our auth interceptor to the http requests
    //   $httpProvider.interceptors.push('authInterceptor');
    // })

    // .run(['authService', function(authService){
    //   if (authService.isLoggedIn()) authService.setUser();
    // }]);

})();
