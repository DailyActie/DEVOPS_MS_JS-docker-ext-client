
Ext.define('Client.view.login.Login',{
    extend: 'Ext.container.Container',
    xtype: 'login',

    requires: [
        'Client.view.login.LoginController'
    ],

    controller: 'login-login',

    layout: {
        type: 'vbox',
        pack: 'center'
    },

    items:[{
        xtype: 'formpanel',
        title: 'Login',
        bodyPadding: 20,
        items: [{
            xtype: 'textfield',
            label: 'Username',
            margin: 5,
            name: 'username'
        }, {
            xtype: 'textfield',
            margin: 5,
            inputType: 'password',
            label: 'Password',
            name: 'password'
        },{
            xtype: 'button',
            margin: '5 4',
            text: 'Login',
            handler: 'onLogin'
        }]
    }]
});
