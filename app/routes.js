angular.module('myTicket.router', [])

    .config(function ($stateProvider, $urlRouterProvider) {

        $stateProvider

            .state('home', {
                url: '/home',
                templateUrl: 'app/views/home.html',
                controller: 'HomeCtrl'

            })
            .state('now-showing', {
                url: '/now-showing',
                templateUrl: 'app/views/now-showing.html',
                controller: 'NowShowingCtrl'
            })
            .state('movie-single', {
                url: '/movie-single',
                templateUrl: 'app/views/movie-single.html'
            })
            .state('movie-select-show', {
                url: '/movie-select-show',
                templateUrl: 'app/views/movie-select-show.html'
            })
            .state('pic-a-movie', {
                url: '/pic-a-movie',
                templateUrl: 'app/views/pic-a-movie.html'
            })
            .state('movie-payment', {
                url: '/movie-payment',
                templateUrl: 'app/views/movie-payment.html'
            })
            .state('support',{
                url:'/support',
                templateUrl:'app/views/support.html'
            })
            .state('contact',{
                url:'/contact',
                templateUrl:'app/views/contact.html'
            })
            .state('offers',{
                url:'/offers',
                templateUrl:'app/views/offers.html'
            })
            .state('about',{
                url:'/about',
                templateUrl:'app/views/about.html'
            })
            .state('faq',{
                url:'/faq',
                templateUrl:'app/views/faq.html'
            })
            .state('404',{
                url:'/404',
                templateUrl:'app/views/404.html'
        })
            ;

        $urlRouterProvider.otherwise('/home');

    });

