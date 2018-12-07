angular.module('myTicket.controllers.NowShowingCtrl', [])


// this is another way to write controller
// -----------------------------------------
//.controller('NowShowingCtrl',['$scope','latestMovieService',function($scope,latestMovieService){
//    
//    $scope.latestMovieData = [];
//    
//    var promise = latestMovieService.fetchLatestMovie();
//            promise.then(function(data){
//            console.log(data);
//            $scope.latestMovieData = data;
//        });
//    
//}]);


.controller('NowShowingCtrl',function($scope,latestMovieService){
    
    $scope.latestMovieData = [];
      var promise = latestMovieService.fetchLatestMovie();
            promise.then(function(data){
            console.log(data);
            $scope.latestMovieData = data;
        });
});