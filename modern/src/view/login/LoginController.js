Ext.define('Client.view.login.LoginController', {
    extend: 'Client.view.login.LoginControllerShared',
    alias: 'controller.login-login',

    onLogin: function(btn){
        var params = btn.up('formpanel').getValues();
        var me = this;

        me.doLogin(params);
    },

    createInterface:function(){
        Ext.Viewport.removeAll();
        Ext.Viewport.add({
            xtype: 'app-main',
            fullscreen: true
        });
    }

});
