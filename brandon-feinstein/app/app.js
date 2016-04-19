var app = angular.module('app', [])

app.directive('customNav', function() {
  return {
    return : 'E',
    // this location is relative to index.html. NOT the current file
    templateUrl: './app/templates/navbar.html'
  }
})

app.directive('book', function() {
    return {
        restrict: 'E',
        scope: {
            data: '='
        },
        templateUrl: './app/templates/book-widget.html'
    }
})

app.directive("restricted", function() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            // Some auth check function
            var isAuthorized = checkAuthorization();
            if (!isAuthorized) {
                element.css('display', 'none');
            }
        }
    }
})
