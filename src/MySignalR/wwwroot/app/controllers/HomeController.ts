module HotmenuApp.Controllers {
    export class HomeController extends BaseController {
        static $inject = ['$scope', '$location', 'HotmenuApp.Services.MenuService', '$q', 'productMessageHub'];
        constructor(private $scope: HotmenuApp.Scopes.IHomeScope, private $location: ng.ILocationService, private menuService: HotmenuApp.Interfaces.IMenuService, private $q: ng.IQService, private productMessageHub) {
            super();
            $scope.Messages = new Array<string>();



            productMessageHub.client.handleProductMessage = function (message) {
                // Method which handles messages.
                $scope.$apply(() => {
                    $scope.Messages.push(message);
                });
            };
        }

        sendMessage = () => {
            // Send data to server.
            this.productMessageHub.server.handleProductMessage("hello");
        };
    }

    angular.module("hotmenuApp").controller("HotmenuApp.Controllers.HomeController", HomeController);
}