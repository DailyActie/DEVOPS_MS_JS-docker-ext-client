Ext.define('Client.view.users.UserForm', {
    extend: 'Ext.form.Panel',
    xtype: 'userform',

    requires: [
        'Ext.field.Email',
        'Client.store.Users',
        'Client.view.users.UsersController'
    ],

    controller: 'users',

    config: {
        record: null
    },

    items: [
    {
        xtype: 'toolbar',
        itemId: 'delbar',
        hidden: true,
        docked: 'top',
        items: [{
            xtype: 'button',
            text: 'Delete',
            handler: 'onDelete',
            flex: 1
        }]
    },
    {
        xtype: 'fieldset',
        title: 'User',
        defaultType: 'textfield',
        defaults: {
            anchor: '100%'
        },
        items: [{
            xtype: 'hiddenfield',
            name: 'url'
        }, {
            label: 'First Name',
            name: 'first_name'
        }, {
            label: 'Last Name',
            name: 'last_name'
        }, {
            xtype: 'emailfield',
            label: 'Email',
            name: 'email'
        }, {
            label: 'Username',
            name: 'username'
        }]
    }, {
        xtype: 'button',
        margin: '10 0',
        text: 'Save',
        handler: 'beforeSubmit'
    }],

    updateRecord: function(rec){
        if(rec){
            form = this.down('form');
            form.loadRecord(rec);
        }
    }
});
