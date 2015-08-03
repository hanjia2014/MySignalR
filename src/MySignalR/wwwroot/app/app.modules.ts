module HotmenuApp {
    // SignalR's hub object.
    var productMessageHub = $.connection.productMessageHub;

    $(function () {
        $.connection.hub.logging = true;
        $.connection.hub.start();
    });

    var app = angular.module('hotmenuApp', []);
    app.value('productMessageHub', productMessageHub);
}