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


app.directive("user", function() {
    return {
        restrict: 'E',
        link: function(scope, element, attrs) {
            scope.username = attrs.username;
            scope.avatar = attrs.avatar;
        },
        template: '<div>Username: {{username}}, Avatar: <img src ={{avatar}}></div>'
    }
})
