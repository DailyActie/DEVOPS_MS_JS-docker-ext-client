/**
 * This view is an example list of people.
 */
Ext.define('Client.view.users.Users', {
    extend: 'Ext.dataview.List',
    xtype: 'userlist',

    requires: [
        'Client.store.Users',
        'Client.view.users.UsersController'
    ],

    controller: 'users',


    title: 'Users',

    store: {
        type: 'users'
    },

    items: [{
        docked: 'top',
        xtype: 'toolbar',
        items: [{
            xtype: 'button',
            text: 'Add',
            handler: 'onAdd'
        }]
    }],

    listeners: {
        itemtap: 'onSelect'
    },

    itemTpl: '{first_name} {last_name} - {email}'
});
