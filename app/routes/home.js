import Ember from 'ember';


/**
 * Main app route
 *
 * @class HomeRoute
 * @module routes/home
 * @extends Ember.Route
 * @public
 */
export default Ember.Route.extend({
  /**
   * Gets r/wallpapers top
   *
   * @method model
   * @return {Ember.RSVP.Promise} A promise which when resolves JSON of top of r/wallpapers
   * @public
   */
  model() {
    // Get /r/wallpapers JSON
    return $.getJSON('https://www.reddit.com/r/wallpapers.json');
  },
});
