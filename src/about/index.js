import angular from 'angular';
import uirouter from 'angular-ui-router';
import routes from './about.route';
import AboutController from './about.controller';

var  loginComponent=angular.module('newsfeed.login', [uirouter])
    .config(routes)
    .controller('AboutController', AboutController)
    .name;
    export default loginComponent;