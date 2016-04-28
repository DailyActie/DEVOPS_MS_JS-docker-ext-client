
Ext.define('Client.view.login.Login',{
    extend: 'Ext.window.Window',
    xtype: 'login',

    requires: [
        'Client.view.login.LoginController'
    ],

    controller: 'login-login',

    cls: 'loginform',

    autoShow: true,
    draggable: false,
    resizable: false,
    closable: false,

    items:[{
        xtype: 'form',
        title: 'Login',
        bodyPadding: 20,
        items: [{
            xtype: 'textfield',
            fieldLabel: 'Username',
            name: 'username'
        }, {
            xtype: 'textfield',
            inputType: 'password',
            fieldLabel: 'Password',
            name: 'password'
        }],
        buttons: [{
            xtype: 'button',
            text: 'Login',
            handler: 'onLogin'
        }]
    }]
});
