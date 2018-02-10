import angular from 'angular';
import uirouter from 'angular-ui-router';
import routes from './register.route';
import RegisterController from './register.controller';

export default angular.module('newsfeed.register', [uirouter])
    .config(routes)
    .controller('RegisterController',RegisterController)
    .name;