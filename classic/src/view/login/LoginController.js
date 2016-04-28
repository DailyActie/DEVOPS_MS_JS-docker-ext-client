Ext.define('Client.view.login.LoginController', {
    extend: 'Client.view.login.LoginControllerShared',
    alias: 'controller.login-login',

    onLogin: function(btn){
        var params = btn.up('form').getValues();
        var me = this;

        me.doLogin(params);
    },

    createInterface:function(){
        var main = Ext.create({
            xtype: 'app-main'
        });

        var login = Ext.ComponentQuery.query('login')[0];
        login.destroy();
    }

});
