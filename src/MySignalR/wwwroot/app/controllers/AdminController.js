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
        var AdminController = (function (_super) {
            __extends(AdminController, _super);
            function AdminController($scope, $location, menuService, $q, productMessageHub) {
                _super.call(this);
                this.$scope = $scope;
                this.$location = $location;
                this.menuService = menuService;
                this.$q = $q;
                this.productMessageHub = productMessageHub;
                $scope.Messages = new Array();
                productMessageHub.client.handleProductMessage = function (message) {
                    // Method which handles messages.
                    $scope.$apply(function () {
                        $scope.Messages.push(message);
                    });
                };
            }
            AdminController.$inject = ['$scope', '$location', 'HotmenuApp.Services.MenuService', '$q', 'productMessageHub'];
            return AdminController;
        })(Controllers.BaseController);
        Controllers.AdminController = AdminController;
        angular.module("hotmenuApp").controller("HotmenuApp.Controllers.AdminController", AdminController);
    })(Controllers = HotmenuApp.Controllers || (HotmenuApp.Controllers = {}));
})(HotmenuApp || (HotmenuApp = {}));
