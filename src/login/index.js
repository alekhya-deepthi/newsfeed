import angular from 'angular';
import uirouter from 'angular-ui-router';
import routes from './login.route';
import LoginController from './login.controller';

export default angular.module('newsfeed.login', [uirouter])
    .config(routes)
    .controller('LoginController',LoginController)
    .name;