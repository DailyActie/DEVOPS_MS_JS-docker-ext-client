Ext.define('Client.Application', {
    extend: 'Ext.app.Application',
    name: 'Client',
    requires: [
        'Client.view.main.Main',
        'Client.view.login.Login',
        'Client.store.Users'
    ],

    stores: ['Users'],

    launch: function () {
        var loggedIn = false;
        if(typeof(Storage) !== "undefined") {
            loggedIn = localStorage.getItem("token");
        }

        Ext.Viewport.add({
            xtype: loggedIn ? 'app-main' : 'login',
            fullscreen: true
        });

    }
});
