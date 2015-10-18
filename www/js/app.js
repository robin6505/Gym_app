// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('gymapp', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
		//kopieer .state gedeelte, handig voor doorklikken schermen
		//aan button in view toevoegen: ng-click="nextPage('Pagename')"
		$stateProvider
        .state('login', {
            url: '/login',
            templateUrl: 'templates/login.html',
			controller: 'SimpleCtrl'
        })
		.state('signup', {
            url: '/signup',
            templateUrl: 'templates/signup.html',
			controller: 'SimpleCtrl'
        })
		.state('app', {
            url: '/app',
			abstract: true,
            templateUrl: 'templates/menu.html',
			controller: 'SimpleCtrl'
        })
		.state('app.main', {
            url: '/main',
			abstract: true,
			views: {
				'menuContent': {
					templateUrl: 'templates/main.html'
				}
			}
		})
		.state('app.main.home', {
            url: '/home',
			views: {
				'home-tab': {
					templateUrl: 'templates/home.html'
				}
			}
		})
        .state('app.main.programs', {
            url: '/programs',
			views: {
				'programs-tab': {
					templateUrl: 'templates/programs.html'
				}
			}
		})
		.state('app.main.history', {
            url: '/history',
			views: {
				'history-tab': {
					templateUrl: 'templates/history.html'
				}
			}
		})
		.state('app.settings', {
            url: '/settings',
			views: {
				'menuContent': {
					templateUrl: 'templates/settings.html',
					controller: 'SimpleCtrl'
				}
			}
		})
		.state('app.about', {
            url: '/about',
			views: {
				'menuContent': {
					templateUrl: 'templates/about.html',
					controller: 'SimpleCtrl'
				}
			}
		})
		.state('app.feedback', {
            url: '/feedback',
			views: {
				'menuContent': {
					templateUrl: 'templates/feedback.html',
					controller: 'SimpleCtrl'
				}
			}
		})
		.state('app.weekView', {
            url: '/programs/weeks',
			views: {
				'menuContent': {
					templateUrl: 'templates/weekView.html',
					controller: 'SimpleCtrl'
				}
			}
		})
		.state('app.dayView', {
            url: '/programs/weeks/days',
			views: {
				'menuContent': {
					templateUrl: 'templates/dayView.html',
					controller: 'SimpleCtrl'
				}
			}
		})
		.state('app.exerciseView', {
            url: '/programs/weeks/days/exercises',
			views: {
				'menuContent': {
					templateUrl: 'templates/exerciseView.html',
					controller: 'SimpleCtrl'
				}
			}
		})
		.state('app.currentDayView', {
            url: '/home/current',
			views: {
				'menuContent': {
					templateUrl: 'templates/currentDayView.html',
					controller: 'SimpleCtrl'
				}
			}
		})
        
	

        $urlRouterProvider.otherwise('/login');
    });