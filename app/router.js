import EmberRouter from '@ember/routing/router';
import config from 'ember-fermettedelacollineauxpins/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('order', { path: 'commandes' });
  this.route('user');
});
