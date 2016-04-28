/**
 * This view is an example list of people.
 */
Ext.define('Client.view.main.List', {
    extend: 'Ext.dataview.List',
    xtype: 'mainlist',

    requires: [
        'Client.store.Users'
    ],

    title: 'Users',

    store: {
        type: 'users'
    },

    itemTpl: '{first_name} {last_name} - {email}'
});
