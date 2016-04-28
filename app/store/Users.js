Ext.define('Client.store.Users', {
    extend: 'Ext.data.Store',

    alias: 'store.users',
    storeId: 'Users',

    fields: [
        'first_name', 'last_name', 'email'
    ],

    autoLoad: false,

    proxy: {
        type: 'ajax',
        url: 'http://localhost:8080/users/?format=json',
        reader: {
            type: 'json',
            rootProperty: ''
        }
    }
});
