module HotmenuApp.Controllers {
    export class AdminController extends BaseController {
        static $inject = ['$scope', '$location', 'HotmenuApp.Services.MenuService', '$q', 'productMessageHub'];
        constructor(private $scope: HotmenuApp.Scopes.IAdminScope, private $location: ng.ILocationService, private menuService: HotmenuApp.Interfaces.IMenuService, private $q: ng.IQService, private productMessageHub) {
            super();
            $scope.Messages = new Array<string>();

            productMessageHub.client.handleProductMessage = function (message) {
                // Method which handles messages.
                $scope.$apply(() => {
                    $scope.Messages.push(message);
                });
            };
        }
    }

    angular.module("hotmenuApp").controller("HotmenuApp.Controllers.AdminController", AdminController);
}