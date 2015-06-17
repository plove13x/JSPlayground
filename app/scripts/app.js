(function(){
'use strict';


	window.App = Ember.Application.create();

	// App.Store = DS.Store.extend({
	// 	revision: 12,
	// 	adapter: 'DS.FixtureAdapter'
	// });

	App.Router.map(function() {
		this.route('index', {path: '/'});
		this.resource('about');
		this.resource('adaptiveInsights');
		this.resource('alexB');
	});


	// App.alexBRoute = Ember.Route.extend({			AlexB?

	// });


})();