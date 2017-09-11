// inicia minha aplicação
var app = angular.module("HelloWorld", []);

// inicia minha primeira controller(processamento)
app.controller('SomarCtrl', function($scope) {

    //model
    $scope.calculadora = { valorA: 0, valorB: 0 };

    //function
    $scope.calcular = function() {

        var valorA = parseInt($scope.calculadora.valorA);
        var valorB = parseInt($scope.calculadora.valorB);
        $scope.calculadora.resultado = valorA + valorB;
    }
});


app.controller('SubtrairCtrl', function($scope) {

    //model
    $scope.calculadora = { valorA: 0, valorB: 0 };

    //function
    $scope.calcular = function() {

        var valorA = parseInt($scope.calculadora.valorA);
        var valorB = parseInt($scope.calculadora.valorB);
        $scope.calculadora.resultado = valorA - valorB;
    }
});

app.controller('DividirCtrl', function($scope) {

    //model
    $scope.calculadora = { valorA: 0, valorB: 0 };

    //function
    $scope.calcular = function() {

        var valorA = parseInt($scope.calculadora.valorA);
        var valorB = parseInt($scope.calculadora.valorB);
        $scope.calculadora.resultado = valorA / valorB;
    }
});

app.controller('MultiplicarCtrl', function($scope) {

    //model
    $scope.calculadora = { valorA: 0, valorB: 0 };

    //function
    $scope.calcular = function() {

        var valorA = parseInt($scope.calculadora.valorA);
        var valorB = parseInt($scope.calculadora.valorB);
        $scope.calculadora.resultado = valorA * valorB;
    }
});