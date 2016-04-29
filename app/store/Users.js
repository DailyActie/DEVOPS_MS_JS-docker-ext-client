Ext.define('Client.store.Users', {
    extend: 'Ext.data.Store',

    alias: 'store.users',
    storeId: 'Users',

    requires: ['Client.model.User'],
    model: 'Client.model.User',

    autoLoad: false
});
