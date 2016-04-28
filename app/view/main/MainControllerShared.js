Ext.define('Client.view.main.MainControllerShared', {
    extend: 'Ext.app.ViewController',

    initViewModel: function(){
        var me = this;
        var token = localStorage.getItem("token", token);
        me.getViewModel().setData('token', token);
        me.loadData(token);
    },

    loadData: function(token){
        var me = this;
        var proxy = Ext.getStore('Users').getProxy();
        var headers = proxy.getHeaders() || {};
            headers["Authorization"] = token;
        proxy.setHeaders(headers)
        Ext.getStore('Users').load();
    }
});
