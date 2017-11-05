var logItem;

activityTracker.controller("homeController",["$scope", "$log", "$http", function($scope, $log, $http){

    $scope.logItem = {};
    logItem = $scope.logItem;
    $scope.otherUnitField = false;
    $scope.postStatus = 0;

    $scope.activityNames = [
		"Pranayaamam",
		"Routine Exercise",
		"Running",
		"Skipping",
		"Jumping",
		"Gymming",
		"Study - Data Science",
		"Study - Development",
		"Absolute Studying",
		"Absolute Practice",
		"Study - Artful"
	]
	$scope.activityUnits = ["hours", "count", "other"];

    $scope.changeUnit = function(unit){
    	logItem.unit=unit;
    	if(logItem.unit==='other')
    		$scope.otherUnitField = true;
    	else
    		$scope.otherUnitField = false;
    	console.log($scope.otherUnitField);
    }

    $scope.logThisActivity = function(elt, event){
    	 $http({
			method: 'POST',
			url: '/i_did_this',
			data: $scope.logItem
		}).then(function(res) {
			console.log(res);
			$scope.postStatus = res.data.post_status;
			if(res.err)
				$log.log("error: " + res.data.err)
			// $scope.logItem = {};
		}, function(error){
			$log.log(error);
		});
    }

}]);