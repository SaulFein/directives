var app = angular.module('app', [])

app.directive('customNav', function() {
  return {
    return : 'E',
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
      scope.image = attrs.image;
    },
    template: '<div>Username: {{username}}, Pic: <img src ={{image}}></div>'
    }
})

app.directive('myDomDirective', function () {
  return {
    link: function ($scope, element, attrs) {
      element.bind('click', function () {
        element.html('ButtonClicked!');
      });
      element.bind('mouseenter', function () {
        element.css('background-color', 'red');
      });
      element.bind('mouseleave', function () {
        element.css('background-color', 'white');
      });
    }
  };
});

app.directive('myAttribute', function() {
  return {
    restrict: 'A',
    scope: {
      myAttribute: '='
    },
    templateUrl: './app/templates/attribute.html'
  };
});
