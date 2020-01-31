/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */
const passport = require('passport');

module.exports.routes = {
  /** *************************************************************************
   *                                                                          *
   * Make the view located at `views/homepage.ejs` your home page.            *
   *                                                                          *
   * (Alternatively, remove this and add an `index.html` file in your         *
   * `assets` directory)                                                      *
   *                                                                          *
   ************************************************************************** */

  'post /api/v1/city': 'CityController.postCity',
  'get /api/v1/city/:id': 'CityController.getCity',
  'get /api/v1/cities': 'CityController.getCitys',
  'put /api/v1/city/:id': 'CityController.putCity',
  'delete /api/v1/city/:id': 'CityController.deleteCity',

  'post /api/v1/client': 'ClientController.postClient',
  'get /api/v1/client/:id': 'ClientController.getClient',
  'get /api/v1/clients': 'ClientController.getClients',
  'put /api/v1/client/:id': 'ClientController.putClient',
  'delete /api/v1/client/:id': 'ClientController.deleteClient',


  /** *************************************************************************
   *                                                                          *
   * More custom routes here...                                               *
   * (See https://sailsjs.com/config/routes for examples.)                    *
   *                                                                          *
   * If a request to a URL doesn't match any of the routes in this file, it   *
   * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
   * not match any of those, it is matched against static assets.             *
   *                                                                          *
   ************************************************************************** */
};
