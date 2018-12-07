angular.module('myTicket.services', [])

    .constant('LATESTMOVIE_URL', 'app/data/currentmovie.json') // now showing page
    .constant('SLIDER_IMAGE_URL', 'app/data/mainMovieSliderData.json') // home page
    .constant('CURRENT_MOVIE_SLIDER', 'app/data/currentMovieSliderData.json') // home page
    .constant('FEATURED_MOVIE_URL', 'app/data/featured_movie.json') // home page

    .factory('currentMovieSliderService', function ($q, $http, CURRENT_MOVIE_SLIDER) {
        var currentMovieSliderData = function () {
            var deffered = $q.defer();
            $http.get(CURRENT_MOVIE_SLIDER).then(function successCallback(response) {
                    var slider_data = response.data;
                    deffered.resolve(slider_data);

                }, function errorCallback(response) {

                    console.log(response);
                    deffered.reject();
                });
            return deffered.promise;
        };

        return {
            currentMovieSliderData: currentMovieSliderData
        };
    })
    

        .factory('featuredMovieService', function ($q, $http, FEATURED_MOVIE_URL) {
            var feturedMovieData = function(){
                var deffered = $q.defer();
                $http.get(FEATURED_MOVIE_URL).then(function successCalback(response){
                    var feature_movie_data = response.data;
                    deffered.resolve(feature_movie_data);
                },
                function errorCallback(response){
                    console.log(response);
                    deffered.reject();
                });
                return deffered.promise;
            };
    
        return{
            
            feturedMovieData:feturedMovieData
        };
    
        })

    .factory('mainMovieSliderService', function ($q, $http, SLIDER_IMAGE_URL) {
        var mainMovieSliderData = function () {
            var deffered = $q.defer();
            $http.get(SLIDER_IMAGE_URL)
                .then(function successCallback(response) {
                        var slider_data = response.data;
                        deffered.resolve(slider_data);
                    },
                    function errorCallback(response) {
                        console.log(response);
                        deffered.reject();
                    });

            return deffered.promise;

        };

        return {
            mainMovieSliderData: mainMovieSliderData
        };

    })

    .factory('latestMovieService', function ($q, $http, LATESTMOVIE_URL) {

        var fetchLatestMovie = function () {
            var deffered = $q.defer();
            $http.get(LATESTMOVIE_URL)
                .success(function (json) {
                    var jsonData = json;
                    deffered.resolve(jsonData);

                })
                .error(function (error) {
                    console.log("Details Data error : " + error);
                    deffered.reject();
                });

            return deffered.promise;
        };

        return {
            fetchLatestMovie: fetchLatestMovie
        };

    })

    
