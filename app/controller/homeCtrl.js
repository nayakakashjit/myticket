// This is home page controller
angular.module('myTicket.controllers.homeCtrl', [])

.controller('HomeCtrl', ['$scope', 'Carousel', 'mainMovieSliderService', 'currentMovieSliderService','featuredMovieService', function ($scope, Carousel, mainMovieSliderService, currentMovieSliderService,featuredMovieService) {

        $scope.myInterval = 1000;
        $scope.sliderMainMovieData = [];
        $scope.sliderCurrentMovieData = [];


//        mainMovieSliderService.forEach(function (sliderData) {
//            $scope.sliderMainMovieData.push({
//                'img': sliderData.img,
//                'cap': sliderData.cap
//            });
//        });
        
         $scope.sliderMainMovieData = [];
            var promise = mainMovieSliderService.mainMovieSliderData();
            promise.then(function(data){
            console.log(data);
            $scope.sliderMainMovieData = data;
        });

        $scope.currentMovieSliderService = [];
        var promise = currentMovieSliderService.currentMovieSliderData();
            promise.then(function(data){
                $scope.currentMovieSliderService = data;
                console.log($scope.currentMovieSliderService)
            });
    
        $scope.featuredMovieService = [];
        var promise = featuredMovieService.feturedMovieData();
            promise.then(function(data){
                 console.log(data);
                $scope.featuredMovieService = data;
                console.log( $scope.featuredMovieService);
            })


}]);