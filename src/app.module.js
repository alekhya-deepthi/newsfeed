import './less/styles.less';
import angular from 'angular';
import uirouter from 'angular-ui-router';
import routes from './app.routes';
import home from './home';
import about from './about'

angular.module('MyApp', [uirouter, home, about])
    .config(routes);

if (process.env.NODE_ENV !== 'production') {
    console.log('Looks like we are in development mode!');
}

