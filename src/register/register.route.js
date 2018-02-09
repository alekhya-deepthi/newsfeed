routes.$inject = ['$stateProvider'];
export default function routes($stateProvider) {
    $stateProvider
        .state('register', {
            url: '/register',
            template: require('./register.html'),
            controller: 'RegisterController',
            controllerAs: 'registerCtrl',
        });
}