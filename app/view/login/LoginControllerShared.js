Ext.define('Client.view.login.LoginControllerShared', {
    extend: 'Ext.app.ViewController',

    doLogin: function(params){
        var me = this;
        Ext.Ajax.request({
            url: 'http://localhost:8080/api-token-auth/',
            method: 'POST',
            params: params,
            success: function(response){
                var text = response.responseText;
                var data = Ext.decode(text, true);

                me.saveToken("Token " + data.token);
                me.createInterface();
            },
            failure: function(response){
                var text = response.responseText;
                var data = Ext.decode(text, true);
                var msg = "";
                if(data.username) msg += "Username field: " + data.username[0] +"<br>";
                if(data.password) msg += "Password field: " + data.password[0];
                if(data.non_field_errors) msg = data.non_field_errors[0];
                Ext.Msg.alert("Bummer", msg);
            }
        });
    },

    saveToken: function(token){
        //<debug>
        console.log(token);
        //</debug>
        var me = this;
        if(typeof(Storage) !== "undefined") {
            localStorage.setItem("token", token);
        }
    }

});
