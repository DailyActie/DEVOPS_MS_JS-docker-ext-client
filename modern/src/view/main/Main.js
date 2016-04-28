/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting causes an instance of this class to be created and
 * added to the Viewport container.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('Client.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',

    requires: [
        'Client.view.main.MainController',
        'Client.view.main.MainModel',
        'Client.view.users.Users',
        'Client.view.users.UserForm',
        'Ext.TitleBar'
    ],

    controller: 'main',
    viewModel: 'main',

    defaults: {
        tab: {
            iconAlign: 'top'
        },
        styleHtmlContent: true
    },

    tabBarPosition: 'bottom',

    items: [
        {
            xtype: 'titlebar',
            title: 'Users',
            docked: 'top',
            items: [
                {
                    text: 'Back',
                    handler: 'onBack',
                    hidden: true,
                    reference: 'backbtn',
                    align: 'left'
                },
                {
                    text: 'Logout',
                    handler: 'onLogout',
                    align: 'right'
                }
            ]
        },
        {
            title: 'Users',
            iconCls: 'x-fa fa-user',
            layout: 'card',
            itemId: 'users',
            items: [
            {
                xtype: 'userlist'
            }, {
                xtype: 'userform'
            }]
        }
    ]
});
