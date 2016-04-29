Ext.define('Client.view.main.MainController', {
    extend: 'Client.view.main.MainControllerShared',

    alias: 'controller.main',

    onLogout: function(){
        if(typeof(Storage) !== "undefined") {
            localStorage.removeItem("token");
        }
        this.getView().destroy();
        Ext.create('Client.view.login.Login');
    },

    getMeta: function(submission) {
        if(typeof(Storage) !== "undefined") {
            var token = localStorage.getItem("token");
        }

        Ext.Ajax.request({
            headers: {
                "Authorization": token
            },
            method: 'OPTIONS',
            url: 'http://127.0.0.1:8080/users/',
            success: function(response){
                //console.log(response);
                console.log(Ext.decode(response.responseText));
            },
            failure: function(response){
                console.error(response);
            }
        });
    }
});
