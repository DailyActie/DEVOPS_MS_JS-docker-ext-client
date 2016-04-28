Ext.define('Client.Application', {
    extend: 'Ext.app.Application',
    name: 'Client',
    requires: [
        'Client.view.main.Main',
        'Client.view.login.Login'
    ],

    launch: function () {
        var loggedIn = false;
        if(typeof(Storage) !== "undefined") {
            loggedIn = localStorage.getItem("token");
        }

        Ext.create({
            xtype: loggedIn ? 'app-main' : 'login'
        });
    }
});
