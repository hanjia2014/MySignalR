var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var HotmenuApp;
(function (HotmenuApp) {
    var Controllers;
    (function (Controllers) {
        var HomeController = (function (_super) {
            __extends(HomeController, _super);
            function HomeController($scope, $location, menuService, $q, productMessageHub) {
                var _this = this;
                _super.call(this);
                this.$scope = $scope;
                this.$location = $location;
                this.menuService = menuService;
                this.$q = $q;
                this.productMessageHub = productMessageHub;
                this.sendMessage = function () {
                    // Send data to server.
                    _this.productMessageHub.server.handleProductMessage("hello");
                };
                $scope.Messages = new Array();
                productMessageHub.client.handleProductMessage = function (message) {
                    // Method which handles messages.
                    $scope.$apply(function () {
                        $scope.Messages.push(message);
                    });
                };
            }
            HomeController.$inject = ['$scope', '$location', 'HotmenuApp.Services.MenuService', '$q', 'productMessageHub'];
            return HomeController;
        })(Controllers.BaseController);
        Controllers.HomeController = HomeController;
        angular.module("hotmenuApp").controller("HotmenuApp.Controllers.HomeController", HomeController);
    })(Controllers = HotmenuApp.Controllers || (HotmenuApp.Controllers = {}));
})(HotmenuApp || (HotmenuApp = {}));
