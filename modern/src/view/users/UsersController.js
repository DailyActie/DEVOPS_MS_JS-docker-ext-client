Ext.define('Client.view.users.UsersController', {
    extend: 'Client.view.users.UsersControllerShared',
    alias: 'controller.users',

    createForm: function(title){
        var form = Ext.ComponentQuery.query('userform')[0];
        form.down('#delbar').hide();
        this.getView().up('app-main').lookupReference('backbtn').show();
        this.getView().up('#users').setActiveItem(1);
        form.setRecord(null);
        form.reset();
    },

    onDelete: function(btn){
        var me = this;
        var record = btn.up('userform').getRecord();
        if(record) me.onRemove(record, function(){
            var form = Ext.ComponentQuery.query('userform')[0];
            form.setRecord(null);
            form.reset();
            btn.up('#users').setActiveItem(0);
        });
    },

    onSelect: function(list, i, target, rec){
        this.getView().up('app-main').lookupReference('backbtn').show();
        this.getView().up('#users').setActiveItem(1);
        var form = Ext.ComponentQuery.query('userform')[0];
        form.setRecord(rec);
        form.down('#delbar').show();
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
                Ext.ComponentQuery.query('userform')[0].reset();
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

        var token = null;
        if(!Client.utils.Constants.DISABLE_TOKEN){
            if (typeof(Storage) !== "undefined") {
                token = localStorage.getItem("token");
                if (!token) Ext.Msg.alert('Oops', "You will need to be logged in.");
            }
        }
        
        me.onSubmit(submission);
    }
});
