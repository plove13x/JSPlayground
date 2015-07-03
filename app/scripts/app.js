(function(){
'use strict';


	window.App = Ember.Application.create();

	// App.Store = DS.Store.extend({
	// 	revision: 12,
	// 	adapter: 'DS.FixtureAdapter'
	// });

	App.Router.map(function() {
		this.route('index', {path: '/'});
		this.resource('adaptiveInsights');
		this.resource('codility');
		this.resource('sipree');
		this.resource('upsight');
	});


	// App.alexBRoute = Ember.Route.extend({			AlexB?

	// });


})();