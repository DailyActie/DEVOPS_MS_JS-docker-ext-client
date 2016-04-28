Ext.define('Client.view.users.UsersController', {
    extend: 'Client.view.users.UsersControllerShared',
    alias: 'controller.users',

    createForm: function(title){
        this.getView().up('app-main').lookupReference('backbtn').show();
        this.getView().up('#users').setActiveItem(1);
        Ext.ComponentQuery.query('userform')[0].setRecord(null);
        Ext.ComponentQuery.query('userform')[0].reset();
    },

    onDelete: function(record){
        var me = this;
        me.onRemove(record);
    },

    onSelect: function(list, i, target, rec){
        this.getView().up('app-main').lookupReference('backbtn').show();
        this.getView().up('#users').setActiveItem(1);
        Ext.ComponentQuery.query('userform')[0].setRecord(rec);
    },

    beforeSubmit: function(btn) {
        var me = this,
            submission = {};
            submission.method = "",
            submission.values = btn.up('formpanel').getValues(),
            submission.url = submission.values.url,
            submission.token = "",
            submission.success = function(response){
                var result = Ext.decode(response.responseText);
                Ext.Msg.alert('Alright!', "User " + result.username + submission.successMsg);
                Ext.getStore('Users').load();
                Ext.ComponentQuery.query('userform')[0].reset()
                me.getView().destroy();
            },
            submission.failure = function(response){
                var result = Ext.decode(response.responseText);
                var msg = "";
                for (error in result) {
                    msg += error + ": " + result[error] + " <br>";
                }
                Ext.Msg.alert('Oops!', msg);
            }
            successMsg = "";

        if (submission.url) {
            submission.url = submission.url;
            submission.method = 'PUT';
            submission.successMsg = " is modified.";
        } else {
            submission.url = '/users/';
            //<debug>
            submission.url = 'http://localhost:8080/users/';
            //</debug>
            submission.method = 'POST';
            submission.successMsg = " was created.";
        }

        var token = null;
        if (typeof(Storage) !== "undefined") {
            token = localStorage.getItem("token");
            submission.token = token
        }

        if (!token) Ext.Msg.alert('Oops', "You will need to be logged in.");

        me.onSubmit(submission);
    }
});
