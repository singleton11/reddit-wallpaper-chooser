import Ember from 'ember';


/**
 * Application route
 *
 * Transits to home route
 *
 * @class ApplicationRoute
 * @module routes/application
 * @extends Ember.Route
 * @public
 */
export default Ember.Route.extend({

  /**
   * Transits to home route
   *
   * @method beforeModel
   * @return {undefined}
   * @public
   */
  beforeModel() {
    this.transitionTo('home');
  }
});
