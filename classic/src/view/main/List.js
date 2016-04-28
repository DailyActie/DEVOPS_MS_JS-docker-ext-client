/**
 * This view is an example list of people.
 */
Ext.define('Client.view.main.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlist',

    requires: [
        'Client.store.Users'
    ],

    title: 'Users',

    store: {
        type: 'users'
    },

    columns: [
        { text: 'First Name',  dataIndex: 'first_name', flex: 1 },
        { text: 'Last Name', dataIndex: 'last_name', flex: 1 },
        { text: 'Email', dataIndex: 'email', flex: 2 }
    ]

});
