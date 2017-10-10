angular.module('customers').controller('CustomersController', ['$scope', 'Customers','$stateParams', '$state', 
  function($scope, $stateParams, $state, Customers) {
    $scope.customers = Customers;

    $scope.create = function(isValid) {
        $scope.error = null;

        if (!isValid) {
            $scope.$broadcast('show-errors-check-validity', 'articleForm');
    
            return false;
          }

      
    }







    $scope.addCustomer = function() {
        $scope.customers.push({
            'name':$scope.name,
            'email':$scope.email,
            'password':$scope.password
        });
        $scope.name='';
        $scope.email='';
        $scope.password='';
    };  
    $scope.deleteListing = function(index) {};
    $scope.showDetails = function(index) {};
  }
]);