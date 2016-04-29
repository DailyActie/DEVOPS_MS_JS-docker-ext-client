Ext.define('Client.view.users.UsersController', {
    extend: 'Client.view.users.UsersControllerShared',
    alias: 'controller.users',

    onDelete: function(grid, rowIndex, colIndex, item, event, record){
        var me = this;
        me.onRemove(record);
    },

    createForm: function(title, data){
        var form = Ext.create('Client.view.users.UserForm', {
            title: title
        });

        form.setRecord(data);
    },

    beforeSubmit: function() {
        var me = this,
            formpanel = me.getView().down('form'),
            form = formpanel.getForm(),
            submission = {};
            submission.method = "",
            submission.values = form.getValues(),
            submission.url = submission.values.url,
            submission.token = "",
            submission.success = function(response){
                var result = Ext.decode(response.responseText);
                Ext.Msg.alert('Alright!', "User " + result.username + submission.successMsg);
                Ext.getStore('Users').load();
                form.reset();
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
            submission.url = Client.utils.Constants.LIVE_URL + '/users/';
            //</debug>
            submission.method = 'POST';
            submission.successMsg = " was created.";
        }

        if (form.isValid()) {
            var token = null;
            if(!Client.utils.Constants.DISABLE_TOKEN){
                if (typeof(Storage) !== "undefined") {
                    token = localStorage.getItem("token");
                    if (!token) Ext.Msg.alert('Oops', "You will need to be logged in.");
                }
            }
            me.onSubmit(submission);
        } else {
            Ext.Msg.alert('Oops', "Something went wrong.");
        }
    }


});
