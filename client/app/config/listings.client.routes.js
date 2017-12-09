angular.module('listings').config(['$stateProvider', '$urlRouterProvider', 
  function($stateProvider) {
    //Listings state providing
    $stateProvider
      .state('listings', {
        url: '/listings', 
        abstract: true, 
        template: '<ui-view/>'
      })
      .state('listings.list', {
        url: '', 
        templateUrl: 'app/views/list-listings.client.view.html', 
        params: {
          successMessage: null
        }
      })
      .state('listings.create', {
        url: '/create', 
        templateUrl: 'app/views/create-listing.client.view.html'
      })
      .state('listings.view', {
        url: '/:listingId', 
        templateUrl: 'app/views/view-listing.client.view.html'
      })
      /*
        Create a state for editing an individual listing, and another for the map view. 
       */
  } 
]);