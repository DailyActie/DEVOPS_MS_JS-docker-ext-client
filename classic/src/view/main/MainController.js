Ext.define('Client.view.main.MainController', {
    extend: 'Client.view.main.MainControllerShared',

    alias: 'controller.main',

    onLogout: function(){
        if(typeof(Storage) !== "undefined") {
            localStorage.removeItem("token");
        }
        this.getView().destroy();
        Ext.create('Client.view.login.Login');
    }
});
