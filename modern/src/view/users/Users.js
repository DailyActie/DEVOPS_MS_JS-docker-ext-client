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

    itemTpl: '{first_name} {last_name} - {email}'
});
