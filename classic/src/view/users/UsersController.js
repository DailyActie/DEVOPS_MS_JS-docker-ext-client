Ext.define('Client.view.users.UsersController', {
    extend: 'Client.view.users.UsersControllerShared',
    alias: 'controller.users',

    createForm: function(title, data){
        var form = Ext.create('Client.view.users.UserForm', {
            title: title
        });

        form.setRecord(data);

    }
});
