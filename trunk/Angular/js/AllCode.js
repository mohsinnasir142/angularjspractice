// THIS FUNCTION IS COMMENTED BECAUSE I AM USING ANOTHER WAYS TO CREATE CONTROLLER

//function CustomerController($scope){
//
//    $scope.customer=  customer=[
//        {name:'mohsin',city:'Lahore'},
//        {name:'Ali',city:'jehlum'},
//        {name:'adnan',city:'multan'},
//        {name:'shakeel',city:'gujrat'},
//        {name:'bilal',city:'sialkot'},
//        {name:'simple',city:'chakwal'},
//        {name:'waseem',city:'multan'}  ,
//        {name:'ahmad',city:'Lahore'}
//    ]
//}

var myApp = angular.module('demoApp', ['ngRoute', 'ngGrid', 'ngDragDrop']);
//myApp.controller('CustomerController',CustomerController);        // Controller can be made by this technique  . Second Parameter can be any function that return the some values



myApp.config(function ($routeProvider) {
    $routeProvider
        .when('/view1',
        {
            controller: 'CustomerController',
            templateUrl: 'Partials/View1.html'
        })
        //Define a route that has a route parameter in it (:customerID)
        .when('/view2',
        {
            controller: 'CustomerController',
            templateUrl: 'Partials/View2.html'
        })

        .when('/AllCustomerView',
        {
            controller: 'AllCustomerController',
            templateUrl: 'Partials/AllCustomer.html'
        })

        .when('/OrdersByCustomerID/:CustomerID',
        {
            controller: 'CustomerOrdersController',
            templateUrl: 'Partials/OrdersByCustomerID.html'
        })

        .when('/tabularview',
        {
            controller: 'TabularViewController',
            templateUrl: 'Partials/tabularView.html'
        })

        .when('/form',
        {
            controller: 'formController',
            templateUrl: 'Partials/form.html'
        })

        .otherwise({ redirectTo: '/view1' });
});
myApp.directive('helloWorld', function () {
    return {
        restrict: 'AE',
        replace: true,
        template: '<p style="background-color:{{color}}">Hello World',
        link: function (scope, elem, attrs) {
            elem.bind('click', function () {
                elem.css('background-color', 'white');
                scope.$apply(function () {
                    scope.color = "white";
                });
            });
            elem.bind('mouseover', function () {
                elem.css('cursor', 'pointer');
            });
        }
    };
});
myApp.factory('simpleFactory', function () {
   var customer =[
        {name:'mohsin',city:'Lahore'},
        {name:'Ali',city:'jehlum'},
        {name:'adnan',city:'multan'},
        {name:'shakeel',city:'gujrat'},
        {name:'bilal',city:'sialkot'},
        {name:'simple',city:'chakwal'},
        {name:'waseem',city:'multan'}  ,
        {name:'ahmad',city:'Lahore'}
   ];

   var factory = {};
   factory.getCustomer = function () {
       return customer;
   };
   factory.postCustomer = function () {

   };
   return factory;

});
myApp.controller('CustomerController', function ($scope, simpleFactory) {
    $scope.customer = [];
    init();
    function init() {
        $scope.customer = simpleFactory.getCustomer();
    }

    //ASSIGN VALUES TO CONTROLLER
    
    //$scope.customer=[
    //    {name:'mohsin',city:'Lahore'},
    //    {name:'Ali',city:'jehlum'},
    //    {name:'adnan',city:'multan'},
    //    {name:'shakeel',city:'gujrat'},
    //    {name:'bilal',city:'sialkot'},
    //    {name:'simple',city:'chakwal'},
    //    {name:'waseem',city:'multan'}  ,
    //    {name:'ahmad',city:'Lahore'}
    //];

    //ANOther way to assign value to controller is FACTORY 

    $scope.AddCustomer=function(){
        $scope.customer.push({
            name:$scope.newCustomer.name,
            city:$scope.newCustomer.city
        });
        $('#mainDiv').append('<b>append</b>');
        $(document).ready(function () {
            $.ajax({
                type: "GET",
                url: "http://www.inorthwind.com/Service1.svc/getAllCustomers",
                dataType: "json",
                cache: false,
                success: function (result) {
                    alert("XML File is loaded!");
                    alert(result);
                },
                error:function(error){
                    alert('error'+error);
                }
            });
        });

    }   ;
});


myApp.factory('AllCustomerFactory', function ($http) {
    var Allcustomer = [];
    var factory = {};
    factory.getAllCustomer = function () {

        /* FIRST WAY TO ACCESS THE SERVICE DATA */

        //$http.get('http://www.inorthwind.com/Service1.svc/getAllCustomers').success(function (data) {
        //    Allcustomer = data;
        //});

        /* SECOND WAY TO ACCESS THE SERVICE DATA */

        //$http({ method: 'GET', async: false, url: 'http://www.inorthwind.com/Service1.svc/getAllCustomers' }).
        //    success(function (data, status, headers, config) {
        //        Allcustomer = data;
        //            }).
        //    error(function (data, status, headers, config) {
        //        alert('error' + error);
        //            });

        /* THIRD WAY TO ACCESS THE SERVICE DATA */

        $.ajax({
            type: "GET",
            url: "http://www.inorthwind.com/Service1.svc/getAllCustomers",
            async: false,
            dataType: "json",
            cache: false,
            success: function (result) {
                Allcustomer = result;
            },
            error: function (error) {
                alert('error' + error);
            }
        });
        return Allcustomer;
    };
    factory.postCustomer = function () {

    };
    return factory;

});
myApp.controller('AllCustomerController', function ($scope, AllCustomerFactory) {
    $scope.allcustomer = [];
    init();
    function init() {
        $scope.allcustomer = AllCustomerFactory.getAllCustomer();
    }

    
});



myApp.controller('CustomerOrdersController', function ($scope, GetOrderByCustomerIDFactory) {
        
    $scope.orderDetails = [];
    init();
    function init() {
        $scope.orderDetails = GetOrderByCustomerIDFactory.getOrderDetail();
        $scope.gridOptions = {
            data: 'orderDetails',
            showGroupPanel: true,
         
        };
    }
    
    
});
myApp.factory('GetOrderByCustomerIDFactory', function ($routeParams) {
    var customer_id = $routeParams.CustomerID;
    var Details = [];
    var orderFactory = {};
    orderFactory.getOrderDetail = function () {
        $.ajax({
            type: "GET",
            url: "http://www.inorthwind.com/Service1.svc/getOrdersForCustomer/" + customer_id + "  ",
            async: false,
            dataType: "json",
            cache: false,
            success: function (result) {
                Details = result.GetOrdersForCustomerResult;
            },
            error: function (error) {
                alert('error' + error);
            }
        });
        return Details;
    };
    return orderFactory;

});

myApp.controller('TabularViewController', function ($scope) {

  
    init();
    function init() {

        $("#accordion").accordion({
            heightStyle: "fill"
        });

        $("#accordion-resizer").resizable({
            minHeight: 140,
            minWidth: 200,
            resize: function () {
                $("#accordion").accordion("refresh");
            }
        });
        createSmallGrid();

    };
    $scope.dropSuccess = function ($event, ui) {
        
        if (document.elementFromPoint($event.x, $event.y).nodeName == "TD")
        {
                alert($(document.elementFromPoint($event.x, $event.y)).attr('aria-describedby'));
        }
        else if (document.elementFromPoint($event.x, $event.y).parentElement.nodeName == "TD")
        {
            alert($(document.elementFromPoint($event.x, $event.y).parentElement).attr('aria-describedby'));
        }
       
        var source = $event.currentTarget.innerText;
        source = source.replace(" ", "");
        var DropWidth = source.length * 10;
        if (DropWidth < 50) {
            DropWidth = 50;
        }
        insertNodes(source, "facename", "facevalue", "stateObject", "Numeric", DropWidth);
       // $('.ui-jqgrid-hdiv').css("width", $('#tree').width() + "px");
    };
    $scope.changeCB = function () {
        alert("");
    };
    $scope.AddCustomer = function () {
        alert("");
        $('#mainDiv').append('<b>append</b>');
       

    };
});

myApp.controller('formController', function ($scope) {
   
    init();
    function init() {
    
    }
    $scope.submit = function () {
        alert($scope.firstname + ' check box is ' + $scope.checkbox + '  and local datetime is ' + $scope.datetime + ' radio is ' + $scope.radio);
        alert('date is ' + $scope.date);
    
    };


});






