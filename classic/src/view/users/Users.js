Ext.define('Client.view.users.Users', {
    extend: 'Ext.grid.Panel',
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

    tbar: [{
        xtype: 'button',
        text: 'Add',
        handler: 'onAdd'
    }],

    columns: [
        { text: 'First Name',  dataIndex: 'first_name', flex: 1 },
        { text: 'Last Name', dataIndex: 'last_name', flex: 1 },
        { text: 'Email', dataIndex: 'email', flex: 2 },
        {
            xtype : 'actioncolumn',
            width: 35,
            align: 'right',
            items : [{
                icon : 'resources/remove-icon.png',
                handler : 'onDelete'
            }]
        }
    ],

    listeners: {
        select: 'onEdit'
    }

});
